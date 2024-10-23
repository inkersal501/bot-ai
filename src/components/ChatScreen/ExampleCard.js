import { Box, Typography } from '@mui/material';
import React from 'react'
import  './ChatScreen.css';

function ExampleCard({text}) {
  return (
    <div>
        <Box className='exampleBox' boxShadow={5}>
            <Box>
                <Typography 
                component="h6" variant='h6'
                fontSize="1rem"
                >
                    {text}
                </Typography>
                <Typography 
                component="h6" variant='p'
                sx={{marginTop:"10px"}}
                color='#999'
                >
                    Get immediate AI generated response
                </Typography>
            </Box>
        </Box>
    </div>
  )
}

export default ExampleCard;