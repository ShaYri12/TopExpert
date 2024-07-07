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
    <div className="relative w-full py-[30px] lg:px-[100px] md:px-[50px] px-[30px]" >
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

          <div className={classes.linksBox}>
            {menuItems.map((item) => (
              <a key={item.label} href={item.href} className={classes.link}>
                {item.label}
              </a>
            ))}
          </div>

          <div className={classes.loginSignup}>
            <Link href="/login" className={classes.login}>
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
          </div>

          <Burger opened={isOpen} onClick={toggle} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer
        opened={isOpen}
        onClose={close}
        size="100%"
        padding="md"
        title={<img height={"22px"} width={"120px"} src="/assets/logo.svg" alt="Navigation"/>}
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Group gap="20px" pb="xl" px="md">
            {menuItems.map((item) => (
              <a key={item.label} href={item.href} className={classes.link2}>
                {item.label}
              </a>
            ))}

            <div className="flex flex-col justify-center gap-[20px]">
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
            </div>
          </Group>
        </ScrollArea>
      </Drawer>
    </div>
  );
}
