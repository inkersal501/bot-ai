import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import ChatScreen from '../components/ChatScreen/ChatScreen';
import { Box } from '@mui/material';
 
const drawerWidth = 250;

function Home() {
  return (
    <div>
      <Box sx={{ display: 'flex', height: '100vh' }}> 
      
        <Sidebar />
  
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 0,
            mt: '64px', 
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            backgroundColor: '#f5f5f5',
          }}
        >
          <ChatScreen /> 
      </Box>
    </Box>
    </div>
  )
}

export default Home