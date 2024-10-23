
import React, {useState} from 'react';

import Sidebar from '../components/Sidebar/Sidebar';
import ChatScreen from '../components/ChatScreen/ChatScreen';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// const drawerWidth = 250;

function Home({darkMode, toggleTheme}) {

  const navigate = useNavigate();
  const temp = JSON.parse(localStorage.getItem("BotAiTempData"));
  const [newchat, setNewChat] = useState(()=>{
    if(temp && temp.length>0){
      return false;
    }else{
      return true;
    }
  });
  const handleNewChat = ()=>{
    localStorage.removeItem("BotAiTempData"); 
    setNewChat(true);
    navigate("/");
  };
   
  return (
  
    <div>
      <Box sx={{ display: 'flex', height: '100vh' }}> 
     
        <Sidebar newchat={newchat} handleNewChat={handleNewChat} darkMode={darkMode} toggleTheme={toggleTheme}/>

        <Box
          component="main" flexGrow={1} sx={{backgroundColor:"background.chatScreen"}}
        >          
          <ChatScreen newchat={newchat} setNewChat={setNewChat}/> 
      </Box>
    </Box>
    </div>
  
  )
}
  export default Home;