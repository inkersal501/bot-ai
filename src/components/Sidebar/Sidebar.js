import React, { useState } from 'react';
import { AppBar, Box, Stack, Drawer, IconButton, Toolbar, Typography, Button  } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import './Sidebar.css';
import logo from '../../assets/logo.png'; 
import { Link } from 'react-router-dom';

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const drawerWidth = 250;

function Sidebar({newchat, handleNewChat, darkMode, toggleTheme}) {

  const [mobileOpen, setMobileOpen] = useState(false);
 
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box>
      <Stack direction="row" spacing={2} className="newChat" sx={{backgroundColor: 'background.sidebar'}}>
        <Link to="/"><Box component="img" src={logo} className="logo" alt="Logo" boxShadow={4} /></Link>
        <Typography sx={{cursor:"pointer"}} onClick={handleNewChat} ms={0} component="h6" variant="h6" fontWeight="500">
          New Chat
        </Typography>  
        <IconButton onClick={handleNewChat} ><AddCommentOutlinedIcon /></IconButton>   
       </Stack>
      <Box sx={{ padding: '20px 0px', textAlign:"center" }}>
        <Link to="/saved"><Button variant="contained">Past Conversations</Button></Link>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: 'background.appbar', 
          boxShadow:"none"
        }} 
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon color="primary" />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{color:"#AF9FCD"}}>
            Bot AI
          </Typography>
          <Box sx={{display:"flex", justifyContent:'flex-end', flexGrow:"1"}}>
            <Box sx={{display:"flex", alignItems:"center", gap:"10px"}}>
            {darkMode ? 
            (<> 
              <Typography variant='p' fontSize="14px">Dark</Typography> 
              <IconButton onClick={toggleTheme}><DarkModeIcon /></IconButton>
            </>)
            :(<> 
              <Typography variant='p' fontSize="14px">Light</Typography>
              <IconButton onClick={toggleTheme}><LightModeIcon /></IconButton>
            </>)}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Sidebar;
