import React, { useState } from 'react';
import { AppBar, Box, Stack, Drawer, IconButton, Toolbar, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './Sidebar.css';
import logo from '../../assets/logo.png';
import newChatImg from '../../assets/newchat.png';

const drawerWidth = 250;

function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box>
      <Stack direction="row" spacing={2} className="newChat">
        <Box component="img" src={logo} className="logo" alt="Logo" />
        <Typography ms={0} component="h6" variant="h6" fontWeight="500">
          New Chat
        </Typography>
         
        <Box component="img" src={newChatImg} className="newchatImg" alt="New Chat" />
         
      </Stack>
      <Box sx={{ padding: '20px 0px' }}>
        <Button variant="contained">Past Conversations</Button>
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
          background: 'none',
          boxShadow: 'none',
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
          <Typography variant="h6" noWrap component="div" color="primary">
            Bot AI
          </Typography>
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
