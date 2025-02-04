import { Container, Grid, Center, Avatar, Text } from "@mantine/core";

import Picture from "./avatar.jpg";

export const Test = () => {
  return (
    <Container fluid>
      <Grid grow>
        <Grid.Col span={4} bd="1px grey solid" style={{ borderRadius: "10px" }}>
          <Center>
            <Avatar name="Dan Searle" alt="Dan Searle" radius="18rem" size="18rem" color="initials" src={Picture} bd=".1rem grey solid" />
          </Center>
        </Grid.Col>
        <Grid.Col span={8}></Grid.Col>

        <Grid.Col span={4} bd="1px grey solid" style={{ borderRadius: "10px" }}>
          <Text>Information about me</Text>
        </Grid.Col>
        <Grid.Col span={4} bd="1px grey solid" style={{ borderRadius: "10px" }}>3</Grid.Col>
      </Grid>
    </Container>
  );
};

export default Test;
