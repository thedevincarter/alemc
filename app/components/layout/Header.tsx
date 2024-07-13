import { useState, useEffect } from 'react';
import { Container, Group, Burger, Image, Box, BackgroundImage,  HoverCard,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Stack, 
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme, } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './Header.module.css';
import { Link, useMatches } from '@remix-run/react'
import logo from '../../images/logo.png'


const links = [
  { link: '/what-we-do', label: 'What We Do' },
  { link: '/officers', label: 'Officers' },
  { link: '/founding-members', label: 'Founding Members' },
  { link: '/chapters', label: 'Chapters' },
];

export default function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const pathname = useMatches()[1].pathname

  

  const items = links.map((link) => (
    <Link
        key={link.label}
        to={link.link}
        className={classes.link}
        data-active={pathname === link.link || undefined}
        onClick={() => {
        setActive(link.link);
        closeDrawer()
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <Box>
      <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Link to="/">
            <img src={logo} className={classes.logo} />
        </Link>
        

        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="xs" size="sm" />

        
      </Container>
    </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Allegiance LEMC Arkansas"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <Stack>
          {items}
        </Stack>
      </Drawer>
    </Box>
    
  );
}