import type { MetaFunction } from "@remix-run/node";
import { Button, useMantineColorScheme } from '@mantine/core'

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const { colorScheme, setColorScheme } = useMantineColorScheme()

  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">Welcome to Remix</h1>

      <Button onClick={() => setColorScheme(colorScheme === 'light' ? 'dark' : 'light')}>Change to {colorScheme === 'light' ? 'dark' : 'light'} theme</Button>

      <ul className="list-disc mt-4 pl-6 space-y-2">
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/start/quickstart"
            rel="noreferrer"
          >
            5m Quick Start
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/start/tutorial"
            rel="noreferrer"
          >
            30m Tutorial
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/docs"
            rel="noreferrer"
          >
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
