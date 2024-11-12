import { Box, AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ mb: 4 }}>
        <Toolbar>
          <Typography variant="h6">RE-STORE</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;