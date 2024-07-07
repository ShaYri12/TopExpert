'use client'
import { useState } from 'react';
import { Avatar, Button, Group, Text} from '@mantine/core';
import {
  IconBellRinging,
  IconCalendar,
  IconFingerprint,
  IconHeart,
  IconHome,
  IconKey,
  IconMessage2,
  IconPhoneCall,
  IconReceipt2,
  IconServicemark,
  IconUser,
} from '@tabler/icons-react';
import classes from './Sidebar.module.css';

const data1 = [
  { link: '', label: 'Home', icon: IconHome },
  { link: '', label: 'Bookings', icon: IconPhoneCall },
  { link: '', label: 'Priority DM', icon: IconMessage2 },
  { link: '', label: 'Services', icon: IconServicemark },
];

const data2 = [
  { link: '', label: 'Testimonails', icon: IconHeart },
  { link: '', label: 'Calendar', icon: IconCalendar },
  { link: '', label: 'Payments', icon: IconFingerprint },
  { link: '', label: 'Profile', icon: IconUser },
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
        <div className='flex flex-col gap-[51px] w-[175px]'>
          <div className='flex flex-col gap-[14px]'>
          <Text px={11} fw={400} size='12px' lh={"15.3px"} className='tracking-[4%]'>Main Menu</Text>
              <div>
                  {links1}
              </div>
          </div>
          <div className='flex flex-col gap-[14px]'>
          <Text px={11} fw={400} size='12px' lh={"15.3px"} className='tracking-[4%]'>Main Menu</Text>
              <div>
                  {links2}
              </div>
          </div>
        </div>
      </div>

      <div className={classes.footer}>
        <div className='flex flex-col gap-[16px] items-center justify-center'>
          <Avatar w={117} h={117} src="/assets/jamesbond.svg" />
          <div className='flex flex-col gap-[5px items-center justify-center]'>
          <Text fw={700} size='16px' lh={"20.4px"}>James Bond</Text>
          <Text fw={400} size='14px' lh={"17.85px"}>Jamesbond007@gmail.com</Text>
          </div>
        </div>
        <Button p={10} w={127} bg={"#F87171"} color='#FFFFFF'>Logout</Button>
      </div>
    </nav>
  );
}