"use client";
import React, { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import classes from "@/app/components/HeaderMegaMenu.module.css";
import {
  Group,
  Button,
  Drawer,
  ScrollArea,
  rem,
  Card,
  Image,
  Text,
  Select,
  Modal,
} from "@mantine/core";
import { MdArrowBack, MdOutlineCalendarMonth } from "react-icons/md";
import { Tabs } from "@mantine/core";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RxCross2 } from "react-icons/rx";
import { HeaderMegaMenu } from "../components/Header";
import { FooterCentered } from "../components/Footer";

const testimonials = [
  {
    name: "Asfandyar",
    feedback:
      "I really like the quick turnaround response I received. Matt seems really easy to talk to.",
    image: "/assets/avatar.svg",
  },
  {
    name: "Asfandyar",
    feedback:
      "I really like the quick turnaround response I received. Matt seems really easy to talk to.",
    image: "/assets/avatar.svg",
  },
  {
    name: "Asfandyar",
    feedback:
      "I really like the quick turnaround response I received. Matt seems really easy to talk to.",
    image: "/assets/avatar.svg",
  },
  {
    name: "Asfandyar",
    feedback:
      "I really like the quick turnaround response I received. Matt seems really easy to talk to.",
    image: "/assets/avatar.svg",
  },
  {
    name: "Asfandyar",
    feedback:
      "I really like the quick turnaround response I received. Matt seems really easy to talk to.",
    image: "/assets/avatar.svg",
  },
];

const sliderData = [
  {
    title: "Design System Basics",
    author: "Usman Zafar",
    duration: "30 Mins",
    type: "Video Meeting",
    image: "/assets/arrow-meeting.svg",
  },
  {
    title: "Design System basics",
    author: "Usman Zafar",
    duration: "45 Mins",
    type: "Webinar",
    image: "/assets/arrow-meeting.svg",
  },
  {
    title: "UI/UX Fundamentals",
    author: "John Smith",
    duration: "60 Mins",
    type: "Live Session",
    image: "/assets/arrow-meeting.svg",
  },
  {
    title: "Prototyping Tools",
    author: "Alice Johnson",
    duration: "25 Mins",
    type: "Workshop",
    image: "/assets/arrow-meeting.svg",
  },
  {
    title: "Prototyping Tools",
    author: "Alice Johnson",
    duration: "25 Mins",
    type: "Workshop",
    image: "/assets/arrow-meeting.svg",
  },
  {
    title: "Prototyping Tools",
    author: "Alice Johnson",
    duration: "25 Mins",
    type: "Workshop",
    image: "/assets/arrow-meeting.svg",
  },
];

const Page = () => {
  const [open, setOpen] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? sliderData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1));
  };
  return (
    <>
    <div className="relative z-50">
      <HeaderMegaMenu/>
    </div>
      <div
        className={`${
          open === true ? "opacity-100 z-10" : "opacity-0"
        } fixed inset-0 bg-black/30 duration-700 transition-opacity `}
      ></div>

      <div
        className={`px-4 md:px-[40px] 2xl:px-[6%] flex gap-[20px] xl:gap-[5%]  py-9 ${
          open === true ? "relative" : "z-20"
        }`}
      >
        <div
          className={`bg-[#FFFCF8] h-full border w-full  md:w-[60%] border-black p-5 ${classes.card}`}
        >
          <div className="flex justify-between items-center">
            <Button
              variant="default"
              bg="#FDF6EA"
              radius={"35px"}
              // className=''
            >
              <MdArrowBack className="mr-2" size={20} /> Luna Data Scientist
            </Button>
            <Button
              variant="default"
              radius={"35px"}
              bg="#FDF6EA"
              // className={`border-2 border-black ${classes.simpleButton}`}
            >
              <img
                src="/assets/star.svg"
                className="mr-2 h-5 w-5 md:h-auto md:w-auto"
              />
              5/5 (5)
            </Button>
          </div>

          {/* Header Content */}
          <div className="my-8 space-y-[20px]">
            <div className="flex justify-between items-end flex-wrap">
              <div className="rounded-full h-[93px] w-[93px] overflow-hidden">
                <img
                  src="/assets/profile.jpeg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-[6px] mt-5 md:mt-0">
                <Button
                  variant="default"
                  radius={"35px"}
                  bg="#FDF6EA"
                  color="#FFF"
                  // className={`${classes.simpleButton} `}
                  onClick={() => setOpen(true)}
                >
                  <MdOutlineCalendarMonth
                    className="mr-2 h-5 w-5 md:w-auto md:h-auto"
                    size={20}
                  />
                  30 mins meeting
                </Button>
                <Button
                  variant="default"
                  bg="#FB923C"
                  radius={"35px"}
                  color="#ffffff"
                  // className={classes.button}
                  onClick={() => setOpen(true)}
                >
                  <span className="line-through mr-1 md:mr-2">$49</span>
                  <span className="text-[15px] md:text-[20px]">$39</span>
                </Button>
              </div>
            </div>

            <div className="text-[20px] md:text-[25px] font-[700] w-[90%] md:w-[60%]">
              <h1>Modern landing Page & Mobile app Redesign</h1>
              <p className="text-[14px] md:text-[16px] text-slate-500 my-3 font-[400]">
                Mentor - Expert
              </p>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="gallery" className="flex items-center">
            <Tabs.List className="overflow-scroll" style={{display:'flex', gap:'1rem', flexWrap:'nowrap', overflow:'scroll'}}>
              <Tabs.Tab value="gallery">Description</Tabs.Tab>
              <Tabs.Tab value="about">About Seller</Tabs.Tab>
              <Tabs.Tab value="testimonials">Testimonials</Tabs.Tab>
              <Tabs.Tab value="offers">More Offers</Tabs.Tab>
            </Tabs.List>

            {/* Gallery Tab Content */}
            <Tabs.Panel value="gallery">
              <div className="py-[5%] border-b border-zinc/200">
                <h1 className="text-[16px] md:text-[20px] font-[700]">
                  Description
                </h1>

                <p className="text-[13px] md:text-[16px] pb-[18px]">
                  I possess an extensive background in data science,
                  encompassing a span of 4 years, during which I've
                  predominantly specialized in the retail sector. My core
                  responsibility revolves around employing machine learning
                  models to tackle intricate business challenges.
                </p>

                <ul className="space-y-[15px]">
                  <li className="flex items-center gap-3 ">
                    <img src="/assets/BlueArrow.svg" alt="" />
                    <p className="text-[13px] md:text-[16px]">
                      Developing a roadmap to your ideal job in data.
                    </p>
                  </li>
                  <li className="flex items-center gap-3 ">
                    <img src="/assets/BlueArrow.svg" alt="" />
                    <p className="text-[13px] md:text-[16px]">
                      Developing a roadmap to your ideal job in data.
                    </p>
                  </li>
                  <li className="flex items-center gap-3 ">
                    <img src="/assets/BlueArrow.svg" alt="" />
                    <p className="text-[13px] md:text-[16px]">
                      Developing a roadmap to your ideal job in data.
                    </p>
                  </li>
                  <li className="flex items-center gap-3 ">
                    <img src="/assets/BlueArrow.svg" alt="" />
                    <p className="text-[13px] md:text-[16px]">
                      Developing a roadmap to your ideal job in data.
                    </p>
                  </li>
                  <li className="flex items-center gap-3 ">
                    <img src="/assets/BlueArrow.svg" alt="" />
                    <p className="text-[13px] md:text-[16px]">
                      Developing a roadmap to your ideal job in data.
                    </p>
                  </li>
                </ul>
              </div>
            </Tabs.Panel>

            {/* About Tab Content */}
            <Tabs.Panel value="about">
              <div className="py-[5%] border-b border-zinc/200">
                <h1 className="text-[16px] md:text-[20px] font-[700]">
                  About Seller
                </h1>

                <p className="text-[13px] md:text-[16px] pb-[18px]">
                  My educational journey is rooted in Statistics. I earned my
                  B.A. in Statistics from UC Berkeley and pursued my Master's
                  degree at Carnegie Mellon University. Remarkably, my academic
                  voyage began at a community college, where I initially
                  grappled with English proficiency. Over time, I mastered the
                  language and diligently acquired the technical expertise
                  required in the field.
                </p>
              </div>
            </Tabs.Panel>

            {/* Testimonials Tab Content */}
            <Tabs.Panel value="testimonials">
              <div className=' h-[225px] mt-6 relative py-4 overflow-hidden'>
                <div className='flex items-center justify-between'>
                  <h1 className='text-[20px] leading-[25px] font-bold'>Testimonials</h1>
                  <div className='flex items-center gap-2'>
                    <button onClick={handlePrev}><GoArrowLeft className='w-[28px] h-[28px]' /></button>
                    <button onClick={handleNext}><GoArrowRight className='w-[28px] h-[28px]' /></button>
                  </div>
                </div>

                <div className='mt-[17px] flex overflow-scroll relative' style={{ width: 'calc(100% + 15px)' }}>
                  <div
                    className='flex gap-x-4 transition-transform duration-500'
                    style={{ transform: `translateX(-${(currentIndex * (262 + 16)) - (currentIndex === 0 ? 0 : 131)}px)` }}
                  >
                    {testimonials.map((item, index) => (
                      <div
                        key={index}
                        className={`min-w-[262px] h-[145px] bg-white border-borderCustom1 border-[#E2E8F0] p-4 rounded ${index === sliderData.length - 1 && currentIndex === sliderData.length - 1 ? 'hidden md:block' : ''}`}
                      >
                        <div className="flex items-center gap-2 mb-[15px]">
                          <Image src={item.image} alt="Image"  className="w-[40px] h-[40px]"/>
                          <h1 className='text-[14px] leading-[17px] font-bold'>{item.name}</h1>
                        </div>
                        <h4 className='text-[12px] leading-[18px] font-normal'>{item.feedback}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Tabs.Panel>

            {/* Offers Tab Content */}
            <Tabs.Panel value="offers">
              <div className='bg-[#ECCC7B] h-[225px] shadow-custom1 mt-6 relative py-4 overflow-hidden'>
                <div className='flex items-center justify-between px-5'>
                  <h1 className='text-[20px] leading-[25px] font-bold'>More Offerings</h1>
                  <div className='flex items-center gap-2'>
                    <button onClick={handlePrev}><GoArrowLeft className='w-[28px] h-[28px]' /></button>
                    <button onClick={handleNext}><GoArrowRight className='w-[28px] h-[28px]' /></button>
                  </div>
                </div>

                <div className='mt-[17px] flex overflow-scroll pl-5 relative' style={{ width: 'calc(100% + 15px)' }}>
                  <div
                    className='flex gap-x-4 transition-transform duration-500'
                    style={{ transform: `translateX(-${(currentIndex * (262 + 16)) - (currentIndex === 0 ? 0 : 131)}px)` }}
                  >
                    {sliderData.map((item, index) => (
                      <div
                        key={index}
                        className={`min-w-[262px] h-[145px] bg-[#FDF6EA] border-borderCustom1 border-black p-3 rounded ${index === sliderData.length - 1 && currentIndex === sliderData.length - 1 ? 'hidden md:block' : ''}`}
                      >
                        <h1 className='text-[16px] leading-[20px] font-bold mb-1.5'>{item.title}</h1>
                        <h4 className='text-[14px] leading-[17.85px] font-normal'>By <span className='font-semibold'>{item.author}</span></h4>
                        <div className='flex items-center gap-3 mt-3'>
                          <button className='border border-[#1E1E1E] rounded-[50px] w-[65px] h-[28px] text-[12px] leading-[15.3px] font-normal'>{item.duration}</button>
                          <button className='border border-[#1E1E1E] rounded-[50px] w-[101px] h-[28px] text-[12px] leading-[15.3px] font-normal'>{item.type}</button>
                        </div>
                        <div className='flex items-end justify-end cursor-pointer'>
                          <Image src={item.image} alt='Arrow' width={41} height={41} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Tabs.Panel>
          </Tabs>
        </div>


        <div
          className={`bg-white max-h-[500px] hidden md:flex flex-col justify-between border w-[40%] border-black p-[2%] ${classes.card}`}
        >
          <h2 className="text-[16px] md:text-[20px] font-[700] ">Booking</h2>

          <div className="space-y-[12px]">
            <p className="text-[14px] font-[600]">Pick a date</p>
            <div className="flex items-center gap-[10px]">
              <Button
                variant="default"
                radius={"35px"}
                bg={"#FED7AA"}
                className={classes.button}
              >
                Sun, 11 Feb, 2024
              </Button>
              <Button
                variant="default"
                radius={"35px"}
                className={classes.simpleButton}
              >
                Sun, 11 Feb, 2024
              </Button>
            </div>
          </div>

          <div className="space-y-[12px]">
            <p className="text-[14px] font-[600]">Pick a time</p>
            <div className="flex items-center gap-[10px]">
              <Button
                variant="default"
                radius={"35px"}
                bg={"#FED7AA"}
                className={classes.button}
              >
                01:00 AM
              </Button>
              <Button
                variant="default"
                radius={"35px"}
                className={classes.simpleButton}
              >
                01:30 AM
              </Button>
              <Button
                variant="default"
                radius={"35px"}
                className={classes.simpleButton}
              >
                02:00 AM
              </Button>
            </div>
          </div>

          <div className="space-y-[12px]">
            <p className="text-[14px] font-[600]">Time Zone</p>
            <Select
              className={"border border-black"}
              placeholder="(GMT+5:00)Islamabad, Karachi, Tashkent (PKT)"
              data={[
                "(GMT+5:00)Islamabad, Karachi, Tashkent (PKT)",
                "(GMT+5:00)Islamabad, Karachi, Tashkent (IST)",
                "(GMT+5:00)Islamabad, Karachi, Tashkent (BGT)",
                "(GMT+5:00)Islamabad, Karachi, Tashkent (KUP)",
              ]}
            />
          </div>

          <div className="flex items-center justify-center gap-[10px]">
            <Button radius={"35px"} bg={"#FB923C"} className={classes.button}>
              Confirms Details
            </Button>
            <Button
              variant="default"
              radius={"35px"}
              className={classes.button}
            >
              Subscribe for <span className="font-[800]"> $37/mo</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Booking */}
      <div
        className={`${
          open === true ? "bottom-0" : "bottom-[-100%]"
        } bg-white fixed w-full z-50 md:hidden flex flex-col duration-700 justify-between rounded-t-[30px] border border-black h-[70%] p-[7%]`}
      >
        <div className="flex justify-between w-full">
          <h2 className="text-[16px] md:text-[20px] font-[700] ">Booking</h2>
          <RxCross2
            size={25}
            className="cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>

        <div className="space-y-[12px]">
          <p className="text-[14px] font-[600]">Pick a date</p>
          <div className="flex items-center gap-[10px]">
            <Button
              variant="default"
              radius={"35px"}
              bg={"#FED7AA"}
              className={classes.button}
            >
              Sun, 11 Feb, 2024
            </Button>
            <Button
              variant="default"
              radius={"35px"}
              className={classes.simpleButton}
            >
              Sun, 11 Feb, 2024
            </Button>
          </div>
        </div>

        <div className="space-y-[12px]">
          <p className="text-[14px] font-[600]">Pick a time</p>
          <div className="flex items-center gap-[10px]">
            <Button
              variant="default"
              radius={"35px"}
              bg={"#FED7AA"}
              className={classes.button}
            >
              01:00 AM
            </Button>
            <Button
              variant="default"
              radius={"35px"}
              className={classes.simpleButton}
            >
              01:30 AM
            </Button>
            <Button
              variant="default"
              radius={"35px"}
              className={classes.simpleButton}
            >
              02:00 AM
            </Button>
          </div>
        </div>

        <div className="space-y-[12px]">
          <p className="text-[14px] font-[600]">Time Zone</p>
          <Select
            className={"border border-black"}
            placeholder="(GMT+5:00)Islamabad, Karachi, Tashkent (PKT)"
            data={[
              "(GMT+5:00)Islamabad, Karachi, Tashkent (PKT)",
              "(GMT+5:00)Islamabad, Karachi, Tashkent (IST)",
              "(GMT+5:00)Islamabad, Karachi, Tashkent (BGT)",
              "(GMT+5:00)Islamabad, Karachi, Tashkent (KUP)",
            ]}
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-[10px]">
          <Button radius={"35px"} bg={"#FB923C"} className={classes.fullButton}>
            Confirms Details
          </Button>
          <Button
            variant="default"
            radius={"35px"}
            className={classes.fullButton}
          >
            Subscribe for <span className="font-[800]"> $37/mo</span>
          </Button>
        </div>
      </div>

      {/* Footer */}
      <FooterCentered/>
    </>
  );
};

export default Page;
