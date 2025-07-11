import { Drawer, List, ListItem, ListItemText } from "@mui/material";

export default function Sidebar() {
  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        {["Home", "Trending", "Subscriptions"].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}