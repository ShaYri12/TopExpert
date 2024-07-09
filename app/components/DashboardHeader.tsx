"use client";
import React from "react";
import { Group, Button, Drawer, ScrollArea, rem, Box, Image, Flex, Text } from "@mantine/core";
import classes from "./HeaderMegaMenu.module.css";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { RiSearchLine } from "react-icons/ri";
import { IconArrowUpRight, IconBell, IconBolt, IconCopy, IconCurrencyDollar, IconGift, IconHeart, IconMessage2 } from "@tabler/icons-react";

const menuItems = [
  { label: "Profile", href: "/", icon: "/assets/profile.svg", alt: "Profile" },
  { label: "Payments", href: "#", icon: "/assets/paymentIcon.svg", alt: "Payments" },
  { label: "Priority DM", href: "#", icon: <IconMessage2 stroke={1.5} />, alt: "Priority DM" },
  { label: "Testimonials", href: "#", icon: <IconHeart stroke={1.5} />, alt: "Testimonials" },
  { label: "What’s New", href: "#", icon: <IconBell stroke={1.5} />, alt: "What’s New" },
  { label: "Invite & Earn", href: "#", icon: <IconGift stroke={1.5} />, alt: "Invite & Earn" },
  { label: "Rewards", href: "#", icon: <IconBolt stroke={1.5} />, alt: "Rewards" },
];

export function DashboardHeader() {
  const [isOpen, { toggle, close }] = useDisclosure();

  return (
    <div className="md:hidden block relative w-full py-[30px] lg:px-[100px] md:px-[50px] px-[30px]">
      <header className={classes.dashboardHeader}>
        <Group justify="space-between" h="100%">
          <Link href="/">
            <img
              height={"24px"}
              width={"150px"}
              src="/assets/logo.svg"
              alt="Logo"
            />
          </Link>
            
          <div className="flex gap-[10px]">
            <div className="p-[10px] rounded-[5px] bg-[#ffffff]">
              <img
                src="/assets/search-normal.svg"
                alt="Search"
                onClick={toggle}
                style={{ cursor: "pointer" }}
              />
            </div>
            <img
              src="/assets/dashboardmenu.svg"
              alt="Menu"
              onClick={toggle}
              style={{ cursor: "pointer", borderRadius: "5px", padding: "10px", backgroundColor: "#ffffff" }}
              className="rounded-[5px] p-[10px]"
            />
          </div>
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
          <div className="flex flex-col mx-[20px] gap-[16px] border-t border-t-[##0000001A] py-[20px]">
            <div className="flex items-center gap-[13px]">
                <img src="/assets/jamesbond.svg" width={"50px"} height={"50px"} alt="profile" />
                <Text>Logo.io/usman_zafar</Text>
            </div>
            <Flex justify={"space-between"} align={"center"} direction={"row"}>
                <div className="flex justify-between items-center gap-[24px] rounded-[26px]   border-[0.5px] border-b-[2px] border-b-[#1E1E1E] border-[#1E1E1E] py-[8px] ps-[24px] pe-[8px]  ">
                    <Text fw={400} size="14px" lh={"17.85px"}>Get more bookings</Text>
                    <span className="font-[600] text-[12px] text-[#ffffff] leading-[15.3px] px-[14px] py-[5px] bg-[#CD432D] gap-[8px] rounded-[8px]">New</span>
                </div>
                <div className="flex gap-[12px]">
                    <span  className="bg-[#FFF7ED] rounded-[5px] p-[8px]">
                        <IconArrowUpRight stroke={1.5} />
                    </span>
                    <span className="bg-[#FFF7ED] rounded-[5px] p-[8px]">
                    <IconCopy stroke={1.5}/>
                    </span>
                </div>
            </Flex>     
          </div>
          <Group gap={20} px="20px">
            {menuItems.map((item) => (
              <Link key={item.label} href={item.href} passHref className={classes.dashboardLink}>
                {typeof item.icon === "string" ? (
                  <img src={item.icon} alt={item.alt}/>
                ) : (
                  item.icon
                )}
                {item.label}
              </Link>
            ))}
          </Group>
        </ScrollArea>
      </Drawer>
    </div>
  );
}
