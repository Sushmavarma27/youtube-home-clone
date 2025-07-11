import React from 'react';
import { AppBar, Toolbar, InputBase, IconButton, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  return (
    <AppBar position="fixed" color="default">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src="https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg" alt="YouTube" width={100} />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#f1f1f1', px: 2, borderRadius: 2 }}>
          <InputBase placeholder="Search" />
          <IconButton><SearchIcon /></IconButton>
        </Box>
        <Box>
          <IconButton><VideoCallIcon /></IconButton>
          <IconButton><NotificationsIcon /></IconButton>
          <IconButton><AccountCircleIcon /></IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;