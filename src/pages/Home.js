
import React, {useState} from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import ChatScreen from '../components/ChatScreen/ChatScreen';
import { Box } from '@mui/material';

// const drawerWidth = 250;

function Home() {
  const temp = JSON.parse(localStorage.getItem("BotAiTempData"));
  const [newchat, setNewChat] = useState(()=>{
    if(temp && temp.length>0){
      return false;
    }else{
      return true;
    }
  });
  
   
  return (
    <div>
      <Box sx={{ display: 'flex', height: '100vh' }}> 
     
        <Sidebar newchat={newchat} setNewChat={setNewChat}/>

        <Box
          component="main" backgroundColor='#f5f5f5' flexGrow={1}
        >          
          <ChatScreen newchat={newchat} setNewChat={setNewChat}/> 
      </Box>
    </Box>
    </div>
  )
}
  export default Home;