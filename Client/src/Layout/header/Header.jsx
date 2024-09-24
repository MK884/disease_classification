import { Paper, Box } from '@mui/material'
import React from 'react'

export const Header = () => {
  return (
    <>
        <Box
            sx={{
                bgcolor:'#121212',
                color:'#fff',
                padding:"1rem",
            }}  
        >
            Skin disease classification Dashboard
        </Box>    
    </>
  )
}

