import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <Container component={Paper} sx={{ height: 400 }}>
      <Typography gutterBottom variant="h3">
        Oops - We could not find what you are looking for
      </Typography>
      <Divider />
      <Button fullWidth component={NavLink} to="/catalog">
        Go back to shop
      </Button>
    </Container>
  );
};

export default NotFound;
