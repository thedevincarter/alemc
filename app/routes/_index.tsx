import type { MetaFunction } from "@remix-run/node";
import { Button, useMantineColorScheme, Box, BackgroundImage, Image, AspectRatio } from '@mantine/core'
import Hero from '../components/layout/Hero'

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const { colorScheme, setColorScheme } = useMantineColorScheme()

  return (
    <Hero />
  );
}
