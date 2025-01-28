import { useState, useEffect } from "react";
import { MantineProvider, Text, Code } from "@mantine/core";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

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

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState<string>();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/data");

      if (response.ok) {
        const dataString = await response.json() as string;

        setData(dataString);
      }
    };

    void getData();
  }, []);

  return (
    <MantineProvider defaultColorScheme="auto">
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => {
            setCount(count => count + 1);
          }}
        >
          count is
          {" "}
          {count}
        </button>
        <p>
          Edit
          {" "}
          <code>src/App.tsx</code>
          {" "}
          and save to test HMR
        </p>
      </div>
      {data
        ? <Text>Data loading...</Text>
        : <Code block>{data}</Code>
      }
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </MantineProvider>
  );
}

export default App;
