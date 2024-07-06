import React from 'react';
import { Button, Card } from '@mantine/core';
import { IconArrowLeft, IconMail, IconBrandFacebook, IconBrandInstagram, IconBrandTiktok, IconArrowRight } from '@tabler/icons-react';
import Seller from './Seller';
import Reviews from './Reviews'
import classes from './DesktopSix.module.css'

const links = [
  { link: '#', label: '📧', icon: IconMail },
  { link: '#', label: '📘', icon: IconBrandFacebook },
  { link: '#', label: '📸', icon: IconBrandInstagram },
  { link: '#', label: '🎵', icon: IconBrandTiktok },
];

const DesktopSix = () => {
  return (
    <div className="px-[100px] pb-[100px]">
      <div className="mt-[-30px]">
        <Button variant="default" radius="xl" className={classes.button}>
          <IconArrowLeft width="15px" stroke="3px" /> Luna Data Scientist
        </Button>
      </div> 
      <Seller />
      <div className="shadow-custom-black border border-[#000000] bg-[#FFFCF8] mt-[21px] py-[16px] px-[19px]">
        <div className="flex w-fit border-b border-[#E2E8F0]">
          <Button variant='default' className={`${classes.button2} ${classes.activeBtn}`}>All</Button>
          <Button variant='default' className={classes.button2}>1:1 Call</Button>
          <Button variant='default' className={classes.button2}>Package</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {[...Array(5)].map((_, index) => (
            <div key={index}>
              <Card bg={"#FFFBF5"} px="20px" py="16px" className="border border-[#000000] flex flex-col gap-[26px]" style={{ boxShadow: "-2px 4px 0px 0px #28231A" }}>
                <div className='flex flex-col gap-[11px]'>
                  <span className="w-fit bg-[#E0F2FE] border border-[#075985] text-[#0284C7] p-[10px] font-[700] rounded-[40px] text-[12px] leading-[15.3px]">Popular</span>
                  <div className='flex flex-col gap-[5px]'>
                    <h2 className="text-[18px] font-[700] leading-[22.95px] text-[#000000]">Career Guidance (30 Mins)</h2>
                    <p className="text-[14px] font-[400] leading-[17.85px] text-[#000000]">Direction for the data job hunt</p>
                  </div>
                </div>
                <div className="flex items-center justify-between bg-[#F9EDD9] rounded-[6px] p-[7px]">
                  <div className="flex items-center gap-[9px]">
                    <div className='bg-[#FFFFFF] rounded-[7px] p-[9px]'>
                      <img src="/assets/calendar.svg" alt="calendar" width={"25.29px"} height={"24.45px"} />
                    </div>
                    <div>
                      <p className="text-[14px] font-[700] leading-[17.85px]">30 Mins</p>
                      <p className="text-[14px] font-[400] leading-[17.85px]">Video Meeting</p>
                    </div>
                  </div>
                  <Button variant="default" bg={"#FDF6EA"} radius="30px" bd={"1px solid #000000"} className='flex gap-[4px] font-[700] text-[14px] leading-[17.85px] items-center justify-center py-[7px] px-[10px]'>$55 <IconArrowRight width="15px" stroke="3px" /></Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      <Reviews />
      </div>
    </div>
  );
}

export default DesktopSix;
