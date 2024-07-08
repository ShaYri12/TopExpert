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
      <div className="flex items-center sm:flex-row flex-col justify-between py-[50px] gap-10">
        <div className="sm:max-w-[50%]">
          <h1 className="text-[42px] sm:text-[50px] lg:text-[69px] text-[#FEF08A] leading-[60px] lg:leading-[81px] tracking-[-1px] font-[900]"> Get Started <span className="text-[#F7F7F7] font-[400]"> With Booking Your First </span> Expert Session</h1>
        </div>
        <div className="sm:max-w-[50%]">
          <img src="/assets/world.svg" alt="World" className="sm:block hidden" />
          <img src="/assets/svgviewer-output.svg" alt="World" className="block sm:hidden text-end" />
        </div>
      </div>

      <div className={classes.inner}>
        {/* Logo */}
        <img src="/assets/logowhite.svg" alt="Logo" className="w-[140px] sm:min-w-[170px]"/>

        {/* Web Links */}
        <div className="lg:flex hidden items-center justify-center flex-col">
          <Group className={classes.links}>{items}</Group>
          <p className="py-[33px] text-center text-[14px] text-[#FFFFFFC2] font-[500] leading-[17.85px]">© 2023 Logo name Copyrights Reserved</p>
        </div>
        
        {/* Links Social Media */}
        <Group gap="5px" justify="flex-end" wrap="nowrap" display='flex'>
          <img src='/assets/footer-icons1.svg' alt='Logo' className="w-[44px] h-[44px] sm:w-[50px] sm:h-[50px]" />
          <img src='/assets/footer-icons2.svg' alt='Logo' className="w-[44px] h-[44px] sm:w-[50px] sm:h-[50px]" />
          <img src='/assets/footer-icons3.svg' alt='Logo' className="w-[44px] h-[44px] sm:w-[50px] sm:h-[50px]" />
          <img src='/assets/footer-icons4.svg' alt='Logo' className="w-[44px] h-[44px] sm:w-[50px] sm:h-[50px]" />
        </Group>
      </div>

      {/* Web Links */}
      <div className="flex items-center justify-center flex-col lg:hidden mt-10">
          <Group className={classes.links}>{items}</Group>
          <p className="py-[33px] text-center text-[14px] text-[#FFFFFFC2] font-[500] leading-[17.85px]">© 2023 Logo name Copyrights Reserved</p>
      </div>
    </div>
  );
}
