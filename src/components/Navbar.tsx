import { AppBar, Toolbar, InputBase, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Navbar() {
  return (
    <AppBar position="sticky" sx={{ bgcolor: "#fff", color: "#000" }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>YouTube Clone</Box>
        <Box
          sx={{
            display: "flex",
            bgcolor: "#f1f1f1",
            borderRadius: 2,
            padding: "4px 8px",
          }}
        >
          <InputBase placeholder="Search…" />
          <SearchIcon />
        </Box>
      </Toolbar>
    </AppBar>
  );
}