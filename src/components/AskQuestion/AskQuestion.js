import { Box, Stack, Button, TextField } from '@mui/material';
import React from 'react';
import './AskQuestion.css';

function AskQuestion({askedQuestn, setAskedQuestn, handleAskedQuestn, handleSave}) {
 
  return (
    <div>         
        <Box className='askQuestnBlock'>           
          <form onSubmit={handleAskedQuestn}>
            <Stack direction="row" spacing={2} className='askQuestnRow'>
                <Box sx={{width:"90%"}}>
                    <TextField 
                      fullWidth 
                      id="askQuestion" 
                      placeholder='Message Bot AI' 
                      required
                      onInput={(e)=>setAskedQuestn(e.target.value)}
                      value={askedQuestn}
                      autoFocus={true}
                    />
                </Box>
                <Box><Button type="submit" variant="contained">Ask</Button></Box>
                <Box><Button type="button" variant="contained" onClick={handleSave}>Save</Button></Box>
            </Stack>  
          </form>         
        </Box>
    </div>
  )
}

export default AskQuestion;