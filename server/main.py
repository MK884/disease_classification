from fastapi import FastAPI, File, UploadFile
import uvicorn
import numpy as np
from io import BytesIO
from PIL import Image
import cv2
import tensorflow as tf
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import os


model_path = os.path.join("server", "Model", "Dis45.hdf5")
MODEL = tf.keras.models.load_model('Model/Dis45.hdf5')   # model loading
CLASS_NAMES = ['Eczema','Melanoma','Basal Cell Carcinoma','Melanocytic Nevi'] #4 classs names for predictions

app = FastAPI();
app.mount("/static", StaticFiles(directory="dist"), name="static")

@app.get("/")
async def read_index():
    return FileResponse("dist/index.html")

@app.get("/{path:path}")
async def read_path(path: str):
    file_path = f"dist/{path}"
    if not os.path.exists(file_path):
        return FileResponse("dist/index.html")
    return FileResponse(file_path)

#middleware to request from any other origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def read_file_as_image(data) -> np.ndarray:
    # image = Image.open(data).resize((100,75))
    image = np.array(Image.open(BytesIO(data)))
    return image

@app.get("/home")
async def ping():
    return "Hello Connected"   


@app.post("/classify")
async def classify(file: UploadFile = File(...)):

    try:
        image = read_file_as_image(await file.read())
        image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)  # Convert from BGR to RGB
        resized_image = cv2.resize(image, (222, 294))  # Resize the image
        resized_image = np.expand_dims(resized_image, axis=0)  # Add batch dimension
        # resized_image = resized_image / 255.0  # Normalize pixel values to [0, 1]
        predictions = MODEL.predict(resized_image)

        # Create a dictionary to store class predictions
        class_predictions = {}
        for i, class_name in enumerate(CLASS_NAMES):
            class_predictions[class_name] = float(predictions[0][i])
        
        prediction_class = CLASS_NAMES[np.argmax(predictions[0])]
        confidence = np.max(predictions[0])

        if confidence > 0.5:
            return {"class_predictions": class_predictions,'predicted_class':prediction_class, 'confidence':float(confidence)}
        else:
            return {"class_predictions": '',"predicted_class": "mistakenly provided wrong image, probably.",
            "confidence": 0
            }
    except Exception as e:
        return {"error": "An error occurred during classification"}
    


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run(app, host='localhost', port=port)