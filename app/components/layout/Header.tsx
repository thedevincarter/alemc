import { useState, useEffect } from 'react';
import { Container, Group, Burger, Image, Box, BackgroundImage } from '@mantine/core';
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
  const [opened, { toggle }] = useDisclosure(false);
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
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Link to="/">
            <Image src={logo} height={50} width={50} />


        </Link>
        

        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}