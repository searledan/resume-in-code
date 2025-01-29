import { useState, useEffect } from "react";
import { MantineProvider, Text, Code, Divider } from "@mantine/core";
import { KVNamespaceListResult } from "@cloudflare/workers-types";

import reactLogo from "./react.svg";
import viteLogo from "./vite.svg";

import "./Home.css";

export const Home = () => {
  const [count, setCount] = useState(0);
  const [keys, setKeys] = useState<KVNamespaceListResult<string>>();
  const [key, setKey] = useState<string>("loading");

  useEffect(() => {
    const getKeys = async () => {
      const response = await fetch("/data");

      if (response.ok) {
        const data = await response.json() as KVNamespaceListResult<string>;

        setKeys(data);
      }
    };

    const getKey = async (name: string) => {
      const response = await fetch("/data/" + name);

      if (response.ok) {
        const data = await response.json() as string;

        setKey(data);
      }
    };

    void getKeys();
    void getKey("test1");
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

      {keys && keys.keys.length === 0 && <Text>No keys found.</Text>}
      {keys
        ? keys.keys.map(x => <Code key={x.name} style={{ borderRadius: 0 }} block>{x.name}</Code>)
        : <Text>Loading keys...</Text>}

      <Divider m="lg" />

      {key === "loading" && <Text>Loading key...</Text>}
      {!key && <Text>No key found.</Text>}
      {key && <Code style={{ borderRadius: 0 }} block>{key}</Code>}

      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </MantineProvider>
  );
};

export default Home;
