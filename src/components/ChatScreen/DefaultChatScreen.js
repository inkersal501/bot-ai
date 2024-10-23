import { Box, Typography } from '@mui/material'
import React from 'react'; 
import logo from '../../assets/logo2.png';
import './ChatScreen.css';
import Examples from './Examples';

function DefaultChatScreen() {    

  return (
    <div>

        <Box className='defaultChatScreen'>
            <Box className='defaultChatScreenTop'>
              <Typography variant="h4" gutterBottom>
                  How Can I Help You Today?
              </Typography>
              <Box component="img" src={logo} className="logolg" alt="Logo" boxShadow={5} />
            </Box>
            <Examples />
        </Box>
        

    </div>
  )
}

export default DefaultChatScreen;