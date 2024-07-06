"use client";
import React from "react";
import { Group, Button, Burger, Drawer, ScrollArea, rem } from "@mantine/core";
import classes from "./HeaderMegaMenu.module.css";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "For Creators", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Testimonials", href: "#" },
];

export function HeaderMegaMenu() {
  const [isOpen, { toggle, close }] = useDisclosure();

  return (
    <Group pos="relative" w="100%" >
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Link href="/">
            <img
              height={"24px"}
              width={"150px"}
              src="/assets/logo.svg"
              alt="Logo"
            />
          </Link>

          <Group
            h="100%"
            gap={"40px"}
            visibleFrom="sm"
            bg={"#FFFFFF"}
            py="14px"
            px="40px"
            display={"flex"}
            className="border-[0.5px] bg-white border-b-[2px] border-[#000000] rounded-[26px]"
          >
            {menuItems.map((item) => (
              <a key={item.label} href={item.href} className={classes.link}>
                {item.label}
              </a>
            ))}
          </Group>

          <Group visibleFrom="sm" h="100%">
            <Link href="/login">
              <Button
                variant="default"
                radius={"35px"}
                className={classes.button}
              >
                Log in
              </Button>
            </Link>
            <Link href="/login">
              <Button radius={"35px"} bg={"#FB923C"} className={classes.button}>
                Sign up
              </Button>
            </Link>
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

            <Group justify="center" className="flex flex-col">
              <Button
                variant="default"
                radius={"35px"}
                className={classes.button}
              >
                Log in
              </Button>
              <Button radius={"35px"} bg={"#FB923C"} className={classes.button}>
                Sign up
              </Button>
            </Group>
          </Group>
        </ScrollArea>
      </Drawer>
    </Group>
  );
}
