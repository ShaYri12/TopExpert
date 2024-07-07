'use client'
import { useState } from 'react';
import { Avatar, Button, Group, Text } from '@mantine/core';
import {
  IconHeart,
  IconHome2,
  IconMessage2,
  IconPhoneCall,
} from '@tabler/icons-react';
import classes from './Sidebar.module.css';

// Define a type for the icon data
type IconData = {
  link: string;
  label: string;
  iconType: 'img' | 'icon';
  icon: string | React.ElementType;
};

const data1: IconData[] = [
  { link: '', label: 'Home', iconType: 'icon', icon: IconHome2 },
  { link: '', label: 'Bookings', iconType: 'icon', icon: IconPhoneCall },
  { link: '', label: 'Priority DM', iconType: 'icon', icon: IconMessage2 },
  { link: '', label: 'Services', iconType: 'img', icon: '/assets/servicesIcon.svg' },
];

const data2: IconData[] = [
  { link: '', label: 'Testimonails', iconType: 'icon', icon: IconHeart },
  { link: '', label: 'Calendar', iconType: 'img', icon: '/assets/calendar2.svg' },
  { link: '', label: 'Payments', iconType: 'img', icon: '/assets/paymentIcon.svg' },
  { link: '', label: 'Profile', iconType: 'img', icon: '/assets/profile.svg' },
];

function renderIcon(iconType: 'img' | 'icon', icon: string | React.ElementType, isActive: boolean) {
  if (iconType === 'img') {
    return <img width={"24px"} height={"24px"} src={icon as string} className={`${classes.linkIcon} ${isActive ? classes.activeIcon : ''}`} alt="" />;
  } else if (iconType === 'icon') {
    const IconComponent = icon as React.ElementType;
    return <IconComponent className={`${classes.linkIcon} ${isActive ? classes.activeIcon : ''}`} stroke={1.5} />;
  }
  return null;
}

export function Sidebar() {
  const [active, setActive] = useState('Home');

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
      {renderIcon(item.iconType, item.icon, item.label === active)}
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
      {renderIcon(item.iconType, item.icon, item.label === active)}
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
