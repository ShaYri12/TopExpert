"use client";
import { useEffect, useState } from "react";
import { Anchor, Group, ActionIcon } from "@mantine/core";
import { IconBrandInstagram, IconMail } from "@tabler/icons-react";
import classes from "./FooterCentered.module.css";

const links = [
  { link: "#", label: "Home" },
  { link: "#", label: "Features" },
  { link: "#", label: "FAQs" },
  { link: "#", label: "Testimonials" },
];

export function FooterCentered() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const currentPath =
      typeof window !== "undefined" ? window.location.pathname : "";
    if (currentPath.includes("login")) {
      setShow(false);
    }
  }, []);

  const items = links.map((link) => (
    <Anchor
      c="dimmed"
      key={link.label}
      href={link.link}
      lh={1}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  if (!show) {
    return null;
  }

  return (
    <div className={classes.footer}>
      <div className="flex items-center justify-between py-[50px]">
        <div className="max-w-[50%]">
          <h1 className="text-[69px] text-[#FEF08A] leading-[81px] tracking-[-1px] font-[900]">
            Get Started{" "}
            <span className="text-[#F7F7F7] font-[400]">
              With Booking Your First
            </span>{" "}
            Expert Session
          </h1>
        </div>
        <div className="max-w-[50%]">
          <img src="/assets/world.svg" alt="World" />
        </div>
      </div>

      <div className={classes.inner}>
        <img height={"24px"} width={"150px"} src="/assets/logowhite.svg" alt="Logo" />
        <Group className={classes.links}>{items}</Group>

        <Group gap="10px" justify="flex-end" wrap="nowrap">
          <ActionIcon h="50px" w="50px" color="#FFFFFF1A" radius="xl">
            <IconMail style={{ height: "23px" }} />
          </ActionIcon>
          <ActionIcon h="50px" w="50px" color="#FFFFFF1A" radius="xl">
            <svg
              className="h-[18px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"></path>
            </svg>
          </ActionIcon>
          <ActionIcon h="50px" w="50px" color="#FFFFFF1A" radius="xl">
            <IconBrandInstagram style={{ height: "22px" }} />
          </ActionIcon>
          <ActionIcon h="50px" w="50px" color="#FFFFFF1A" radius="xl">
            <svg
              className="h-[20px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M16 8.24537V15.5C16 19.0899 13.0899 22 9.5 22C5.91015 22 3 19.0899 3 15.5C3 11.9101 5.91015 9 9.5 9C10.0163 9 10.5185 9.06019 11 9.17393V12.3368C10.5454 12.1208 10.0368 12 9.5 12C7.567 12 6 13.567 6 15.5C6 17.433 7.567 19 9.5 19C11.433 19 13 17.433 13 15.5V2H16C16 4.76142 18.2386 7 21 7V10C19.1081 10 17.3696 9.34328 16 8.24537Z"></path>
            </svg>
          </ActionIcon>
        </Group>
      </div>

      <p className="py-[33px] text-center text-[14px] text-[#FFFFFFC2] font-[500] leading-[17.85px]">
        © 2023 Logo name Copyrights Reserved
      </p>
    </div>
  );
}
