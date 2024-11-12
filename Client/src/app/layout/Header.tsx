import { ShoppingCart } from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  Typography,
  Switch,
  List,
  ListItem,
  IconButton,
  Badge,
  Box,
} from "@mui/material";
import { Navigate, NavLink } from "react-router-dom";

const midLinks = [
  { title: "catalog", patch: "/catalog" },
  { title: "about", patch: "/about" },
  { title: "contact", patch: "/contact" },
];

const rightLinks = [
  { title: "login", patch: "/login" },
  { title: "register", patch: "/register" },
];

const navStyles = {
  color: "inherit",
  textDecoration: "none",
  typography: "h6",
  "&:hover": {
    color: "grey.500",
  },
  "&.active": {
    color: "text.secondary",
  },
};

interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
}

const Header = ({ darkMode, handleThemeChange }: Props) => {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box display="flex" alignItems="center">
          <Typography variant="h6" component={NavLink} to="/" sx={navStyles}>
            RE-STORE
          </Typography>
          <Switch checked={darkMode} onChange={handleThemeChange} />
        </Box>

        <List sx={{ display: "flex" }}>
          {midLinks.map(({ title, patch }) => (
            <ListItem key={patch} component={NavLink} to={patch} sx={navStyles}>
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>

        <Box display="flex" alignItems="center">
          <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
            <Badge badgeContent="4" color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>

          <List sx={{ display: "flex" }}>
            {rightLinks.map(({ title, patch }) => (
              <ListItem
                key={patch}
                component={NavLink}
                to={patch}
                sx={navStyles}
              >
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
