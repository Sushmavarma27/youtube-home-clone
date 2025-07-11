import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import WhatshotIcon from '@mui/icons-material/Whatshot';

const Sidebar = () => {
  return (
    <Box sx={{ width: 200, position: 'fixed', top: 64, left: 0, height: '100vh', backgroundColor: '#fafafa' }}>
      <List>
        {[
          { text: 'Home', icon: <HomeIcon /> },
          { text: 'Shorts', icon: <WhatshotIcon /> },
          { text: 'Subscriptions', icon: <SubscriptionsIcon /> },
          { text: 'Library', icon: <VideoLibraryIcon /> }
        ].map(({ text, icon }) => (
          <ListItem button key={text}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;