import React from 'react';
import { Box } from '@mui/material';
import AskQuestion from '../AskQuestion/AskQuestion'; 
import './ChatScreen.css';
import DefaultChatScreen from './DefaultChatScreen';

const ChatScreen = () => {
  return (
    <Box
      sx={{
        height: '98vh',
        background: 'linear-gradient(180deg, rgba(215, 199, 244, 0.05) 0%, rgba(151, 133, 186, 0.2) 100%)',
        borderRadius: 2,
        padding: 2,
        overflowY: 'hidden',
        // boxShadow: 1,
      }}
    >
        <DefaultChatScreen />
       
        {/* Chat content goes here */}
       
      <AskQuestion />

    </Box>
  );
};

export default ChatScreen;
