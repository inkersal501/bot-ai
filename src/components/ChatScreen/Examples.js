import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React from 'react'
import  './ChatScreen.css';
import ExampleCard from './ExampleCard';

const exampleData = [
    "Hi, what is the weather",
    "Hi, what is my location",
    "Hi, what is the temperature",
    "Hi, how are you"
];

function Examples() {
  return (
    <div>
        <Box className='exampleContainer'>        
            <Grid container rowSpacing={{ xs:1, lg:4 }} columnSpacing={{ xs:0, lg:2 }}>
                {exampleData.map((example, index)=>(
                    <Grid size={{ xs: 12, sm: 12, md: 6 }} key={index}>
                        <ExampleCard text={example}/>
                    </Grid>
                ))}            
            </Grid>
        </Box>
    </div>
  )
}

export default Examples;