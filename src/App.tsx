import { MantineProvider } from "@mantine/core";
import { Home } from "./components/Home/";

import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/charts/styles.css";
import "@mantine/code-highlight/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/dropzone/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/nprogress/styles.css";
import "@mantine/spotlight/styles.css";
import "@mantine/tiptap/styles.css";

export const App = () => {
  return (
    <MantineProvider defaultColorScheme="auto">
      <Home />
    </MantineProvider>
  );
};

export default App;
