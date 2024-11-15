import { Container, Divider, Paper, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

const ServerError = () => {
  const { state } = useLocation();

  return (
    <Container component={Paper}>
      {state?.error ? (
        <>
          <Typography variant="h5" gutterBottom color="secondary">
            {state.error.title}
          </Typography>
          <Divider />
          <Typography variant="body1" gutterBottom color="secondary">
            {state.error.detail || "Interal server error"}
          </Typography>
        </>
      ) : (
        <Typography variant="h5" color="secondary">
          Server Error
        </Typography>
      )}
    </Container>
  );
};

export default ServerError;
