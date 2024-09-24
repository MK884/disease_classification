import { ApexOptions } from "apexcharts";

// CLASS_NAMES = ['Eczema','Melanoma','Basal Cell Carcinoma','Melanocytic Nevi']



export const predictionsOptions = {
  chart: {
    type: "bar",
    height: 380,
  },
  plotOptions: {
    bar: {
      barHeight: "100%",
      distributed: true,
      horizontal: true,
      dataLabels: {
        position: "bottom",
      },
    },
  },
  colors: ["#33b2df", "#546E7A", "#d4526e", "#13d8aa"],
  dataLabels: {
    enabled: true,
    textAnchor: "start",
    style: {
      colors: ["#121212"],
    },
    formatter: function (val, opt) {
      return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
    },
    offsetX: 0,
    
  },
  stroke: {
    width: 1,
    colors: ["#fff"],
  },
  xaxis: {
    categories: [
      "Eczema",
      "Melanoma",
      "Basal Cell Carcinoma",
      "Melanocytic Nevi",
    ],
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  title: {
    text: "Prediction Status",
    align: "center",
    floating: true,
  },
  
  tooltip: {
    theme: "dark",
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function () {
          return "";
        },
      },
    },
  },
};

export const accuracyOptions = {
  chart: {
    type: "bar",
    height: 380,
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      dataLabels: {
        position: 'top', // top, center, bottom
      },
    }
  },
  // colors: ["#33b2df", "#546E7A", "#d4526e", "#13d8aa"],
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + "%";
    },
    offsetY: -20,
    style: {
      fontSize: '12px',
      colors: ["#304758"]
    }
  },
  stroke: {
    width: 1,
    colors: ["#fff"],
  },
  xaxis: {
    categories: ["VGG16", "VGG19", "CNN", "SVM", "EfficiantNet", "MobileNet", "CNN(2D)", "CNN(Skin Disease)"],
    position: 'top',
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    crosshairs: {
      fill: {
        type: 'gradient',
        gradient: {
          colorFrom: '#D8E3F0',
          colorTo: '#BED1E6',
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        }
      }
    },
    tooltip: {
      enabled: true,
    }
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
      formatter: function (val) {
        return val + "%";
      }
    }
  
  },
  title: {
    text: 'Model Accuracy',
    floating: true,
    offsetY: 330,
    align: 'center',
    style: {
      color: '#444'
    }
  },
  
};




