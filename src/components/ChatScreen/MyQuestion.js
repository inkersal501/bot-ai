import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import avatar from '../../assets/avatar.png';
import "./ChatScreen.css";


function MyQuestion({data}) {

  const qdata = data.request;
  return (
    <div>
        <Box className='promptBox'>
            <Stack direction="row" spacing={2} alignItems="center">
                 <Box> 
                    <Box component="img" src={avatar} className='avatar'/>
                 </Box>
                 <Box>
                    <Stack spacing={2} textAlign="left">
                        <Typography component="p" variant='p' fontWeight="bold">You</Typography>
                        <Typography component="p" variant='p' margin="10px 0px 0px 0px !important">{qdata.prompt}</Typography>
                        <Typography component="p" variant='p' color='rgba(0, 0, 0, 0.62)' fontSize="12px">{qdata.time}</Typography>
                    </Stack>
                 </Box>
            </Stack>
        </Box>
    </div>
  )
}

export default MyQuestion;