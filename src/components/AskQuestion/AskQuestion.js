import { Box, Stack, Button, TextField } from '@mui/material';
import React from 'react';
import './AskQuestion.css';
 
function AskQuestion() {
  return (
    <div>
        <Box className='askQuestnBlock'>
            <Stack direction="row" spacing={2} className='askQuestnRow'>
                <Box sx={{width:"80%"}}>
                    <TextField fullWidth id="fullWidth" placeholder='Message Bot AI'/>
                </Box>
                <Box><Button variant="contained">Ask</Button></Box>
                <Box><Button variant="contained">Save</Button></Box>
            </Stack>           
        </Box>
    </div>
  )
}

export default AskQuestion;