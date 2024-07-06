'use client'
import { useState } from 'react';
import { Button, Group, Text} from '@mantine/core';
import {
  IconBellRinging,
  IconFingerprint,
  IconKey,
  IconReceipt2,
} from '@tabler/icons-react';
import classes from './Sidebar.module.css';

const data1 = [
  { link: '', label: 'Home', icon: IconBellRinging },
  { link: '', label: 'Bookings', icon: IconReceipt2 },
  { link: '', label: 'Priority DM', icon: IconFingerprint },
  { link: '', label: 'Services', icon: IconKey },
];

const data2 = [
  { link: '', label: 'Testimonails', icon: IconBellRinging },
  { link: '', label: 'Calendar', icon: IconReceipt2 },
  { link: '', label: 'Payments', icon: IconFingerprint },
  { link: '', label: 'Profile', icon: IconKey },
];

export function Sidebar() {
  const [active, setActive] = useState('Billing');

  const links1 = data1.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  const links2 = data2.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <img width={"137px"} height={"32px"} src="/assets/logo.svg" />
        </Group>
        <div className='flex flex-col gap-[14px] mt-[59px]'>
            <Text px={19}>Main Menu</Text>
            <div>
                {links1}
            </div>
        </div>
        <div className='flex flex-col gap-[14px] mt-[59px]'>
        <Text px={19}>Main Menu</Text>
            <div>
                {links2}
            </div>
        </div>
      </div>

      <div className={classes.footer}>
        <img src="/assets/jamesbond.svg" />
        <Text>James Bond</Text>
        <Text>Jamesbond007@gmail.com</Text>
        <Button>Logout</Button>
      </div>
    </nav>
  );
}