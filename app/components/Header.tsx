'use client'
import React from 'react';
import {
  Group,
  Button,
  Burger,
  Drawer,
  ScrollArea,
  rem,
} from '@mantine/core';
import classes from './HeaderMegaMenu.module.css';
import { useDisclosure } from '@mantine/hooks';

const menuItems = [
  { label: 'Home', href: '#' },
  { label: 'For Creators', href: '#' },
  { label: 'About Us', href: '#' },
  { label: 'Testimonials', href: '#' },
];

export function HeaderMegaMenu() {
  const [isOpen, { toggle, close }] = useDisclosure();

  return (
    <Group pos="relative" w="100%">
      <header className={classes.header} >
        <Group justify="space-between" h="100%">
          <img src="/assets/logo.svg" alt="Logo" />

          <Group h="100%" gap={0} visibleFrom="sm" >
            {menuItems.map((item) => (
              <a key={item.label} href={item.href} className={classes.link}>
                {item.label}
              </a>
            ))}
          </Group>

          <Group visibleFrom="sm">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>

          <Burger opened={isOpen} onClick={toggle} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer
        opened={isOpen}
        onClose={close}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Group gap="md" pb="xl" px="md">
            {menuItems.map((item) => (
              <a key={item.label} href={item.href} className={classes.link}>
                {item.label}
              </a>
            ))}

            <Group justify="center">
              <Button variant="default">Log in</Button>
              <Button>Sign up</Button>
            </Group>
          </Group>
        </ScrollArea>
      </Drawer>
    </Group>
  );
}
