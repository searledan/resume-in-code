import { Container, Grid, Center, Avatar } from "@mantine/core";

export const Test = () => {
  return (
    <Container fluid>
      <Grid>
        <Grid.Col span={4} bd="1px grey solid" style={{ borderRadius: "10px" }}>
          <Center>
            <Avatar name="Dan Searle" radius="xl" size="xl" color="initials" />
          </Center>
        </Grid.Col>
        <Grid.Col span={8}></Grid.Col>

        <Grid.Col span={4} bd="1px grey solid" style={{ borderRadius: "10px" }}>2</Grid.Col>
        <Grid.Col span={4} bd="1px grey solid" style={{ borderRadius: "10px" }}>3</Grid.Col>
      </Grid>
    </Container>
  );
};

export default Test;
