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

interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
}

const Header = ({ darkMode, handleThemeChange }: Props) => {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography
          variant="h6"
          component={NavLink}
          to="/"
          sx={{ color: "inherit", textDecoration: "none" }}
        >
          RE-STORE
        </Typography>
        <Switch checked={darkMode} onChange={handleThemeChange} />

        <List sx={{ display: "flex" }}>
          {midLinks.map(({ title, patch }) => (
            <ListItem
              key={patch}
              component={NavLink}
              to={patch}
              sx={{ color: "inherit", typography: "h6" }}
            >
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>

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
              sx={{ color: "inherit", typography: "h6" }}
            >
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
