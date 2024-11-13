import { Button, ButtonGroup, Container, Typography } from "@mui/material";
import agent from "../../app/api/agent";

const AboutPage = () => {
  // return <Typography variant="h2">About Page</Typography>;
  return (
    <Container>
      <Typography gutterBottom variant="h2">
        Errors for testing
      </Typography>
      <ButtonGroup fullWidth>
        <Button
          variant="contained"
          onClick={() => agent.TestError.testErrorServer()}
        >
          Test error server
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default AboutPage;
