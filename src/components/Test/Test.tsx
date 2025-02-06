import { Container, Grid, Center, Avatar, Box, Text, Tabs } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { IconBriefcase, IconBulb, IconMail } from "@tabler/icons-react";

import Picture from "./avatar.jpg";

export const Test = () => {
  const { height } = useViewportSize();

  return (
    <Container fluid m={100}>
      <Grid grow>
        <Grid.Col span={4} mih={height}>
          <Center>
            <Avatar name="Dan Searle" alt="Dan Searle" radius="18rem" size="18rem" color="initials" src={Picture} bd=".1rem var(--mantine-color-dark-4) solid" />
          </Center>

          <Box pt={25} px={100}>
            <Text fw={600} size="1.5rem" py={2}>Dan Searle</Text>
            <Text fw={300} size="1.5rem" tt="lowercase" py={2}>he/him</Text>
          </Box>
        </Grid.Col>

        <Grid.Col span={8}>
          <Grid>
            <Grid.Col span={12} my={25} bd="1px var(--mantine-color-dark-4) solid" style={{ borderRadius: "5px" }}>
              <Text p={25}>Welcome, welcome, welcome!</Text>
            </Grid.Col>

            <Grid.Col span={12} my={25}>
              <Tabs variant="outline" defaultValue="gallery">
                <Tabs.List grow>
                  <Tabs.Tab value="gallery" leftSection={<IconBriefcase size={16} />}>
                    Experience
                  </Tabs.Tab>
                  <Tabs.Tab value="messages" leftSection={<IconBulb size={16} />}>
                    Skills
                  </Tabs.Tab>
                  <Tabs.Tab value="settings" leftSection={<IconMail size={16} />}>
                    Get in contact
                  </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="gallery">
                  <Text p={20}>Experience</Text>
                </Tabs.Panel>

                <Tabs.Panel value="messages">
                  <Text p={20}>Skills</Text>
                </Tabs.Panel>

                <Tabs.Panel value="settings">
                  <Text p={20}>Get in contact</Text>
                </Tabs.Panel>
              </Tabs>
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Test;
