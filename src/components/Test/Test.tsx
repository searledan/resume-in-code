import { useState } from "react";
import { Container, Grid, Center, NativeSelect, Avatar, Box, Text, Tabs } from "@mantine/core";
import { IconBriefcase, IconBulb, IconMail } from "@tabler/icons-react";

import classes from "./Test.module.css";
import picture from "./Avatar.jpg";

export const Test = () => {
  const [tailoredValue, setTailoredValue] = useState("General");

  return (
    <Container fluid m={100}>
      <Grid grow>
        <Grid.Col span={4}>
          <Center>
            <Avatar className={classes.border} name="Dan Searle" alt="Dan Searle" radius="18rem" size="18rem" color="initials" src={picture} />
          </Center>

          <Box pt={25} px={100}>
            <Text fw={600} size="1.5rem" py={2}>Dan Searle</Text>
            <Text fw={300} size="1.5rem" tt="lowercase" py={2}>he/him</Text>
          </Box>
        </Grid.Col>

        <Grid.Col span={8}>
          <Grid>
            <Grid.Col className={classes.border} span={12} my={25} p={0}>
              <Text p={25}>Welcome, welcome, welcome!</Text>
            </Grid.Col>

            <Grid.Col className={classes.border} span={12} my={25}>
              <NativeSelect
                size="md"
                label="Tailored Resume"
                value={tailoredValue}
                onChange={(event) => { setTailoredValue(event.currentTarget.value); }}
                data={["General", "Infrastructure", "DevOps", "Cloud"]}
                mb={25}
              />

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
