import { useState, useEffect } from "react";
import { Container, Grid, Center, Avatar, Text } from "@mantine/core";
// import { R2ObjectBody } from "@cloudflare/workers-types";

import Picture from "./avatar.jpg";

export const Test = () => {
  const [profileImage, setProfileImage] = useState<Blob>();

  // useEffect(() => {
  //   const getProfileImage = async (name: string) => {
  //     const response = await fetch("/images/" + name);

  //     if (response.ok) {
  //       const image = await response.json();
  //       console.log(image);
  //       setProfileImage(image);
  //     }
  //   };

  //   void getProfileImage("profile/profile1.jpg1");
  // }, []);

  return (
    <Container fluid>
      <Grid grow>
        <Grid.Col span={4} bd="1px grey solid" style={{ borderRadius: "10px" }}>
          <Center>
            <Avatar name="Dan Searle" radius="18rem" size="18rem" color="initials" src="/images/profile/profile1.jpg" bd=".1rem grey solid" />
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
