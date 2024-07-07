'use client'
import React, { useState } from "react";
import { Box, Text } from '@mantine/core';
import Link from "next/link";
import { IconHome2, IconMenu2, IconMessage2, IconPhoneCall } from "@tabler/icons-react";

const BottomMenu = () => {
  const [activeLink, setActiveLink] = useState("/");

  const menuItems = [
    { href: "/", icon: <IconHome2 />, label: "Home" },
    { href: "/bookings", icon: <IconPhoneCall />, label: "Bookings" },
    { href: "/services", icon: <img src="/assets/servicesIcon.svg" alt="services" />, label: "Services" },
    { href: "/calendar", icon: <img src="/assets/calendar2.svg" alt="calendar-icon" />, label: "Calendar" },
    { href: "/more", icon: <IconMenu2 />, label: "More" },
  ];

  return (
    <Box className="flex items-center w-full bg-white justify-around items-center py-[16px] px-[10px] gap-[30px]">
      {menuItems.map((item) => {
        const isActive = activeLink === item.href;

        return (
          <Link
            key={item.href}
            href="#"
            passHref
            className={`flex flex-col gap-[7px] items-center justify-center ${isActive ? 'text-[#F97316]' : 'text-black'}`}
            onClick={() => setActiveLink(item.href)}
          >
            {React.isValidElement(item.icon) && item.icon.type === 'img' ? (
              <img
                src={(item.icon as React.ReactElement).props.src}
                alt={(item.icon as React.ReactElement).props.alt}
                style={{ filter: isActive ? 'invert(37%) sepia(87%) saturate(6430%) hue-rotate(351deg) brightness(101%) contrast(104%)' : 'brightness(0) saturate(100%)' }}
              />
            ) : (
              React.cloneElement(item.icon, { color: isActive ? '#F97316' : 'black' })
            )}
            <p className={`text-[12px] leading-[15.3px] ${isActive ? 'font-[700]' : 'font-[400]'}`}>
              {item.label}
            </p>
          </Link>
        );
      })}
    </Box>
  );
};

export default BottomMenu;
