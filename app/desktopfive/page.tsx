"use client";
import React, { useState } from "react";
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

const testimonials = [
  {
    name: "Asfandyar",
    feedback:
      "I really like the quick turnaround response I received. Matt seems really easy to talk to.",
    image: "/assets/Avatar.png",
  },
  {
    name: "Asfandyar",
    feedback:
      "I really like the quick turnaround response I received. Matt seems really easy to talk to.",
    image: "/assets/Avatar.png",
  },
  {
    name: "Asfandyar",
    feedback:
      "I really like the quick turnaround response I received. Matt seems really easy to talk to.",
    image: "/assets/Avatar.png",
  },
  {
    name: "Asfandyar",
    feedback:
      "I really like the quick turnaround response I received. Matt seems really easy to talk to.",
    image: "/assets/Avatar.png",
  },
];

const Page = () => {
  const [open, setOpen] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <div
        className={`${
          open === true ? "opacity-100 z-10" : "opacity-0"
        } fixed inset-0 bg-black/30 duration-700 transition-opacity `}
      ></div>

      <div
        className={`px-[6%] flex gap-[5%]  py-9 ${
          open === true ? "relative" : "z-20"
        }`}
      >
        <div
          className={`bg-white h-full border md:w-[60%] border-black p-[2%] ${classes.card}`}
        >
          <div className="flex justify-between items-center">
            <Button
              variant="default"
              bg="#FDF6EA"
              radius={"35px"}
              className={classes.button}
            >
              <MdArrowBack className="mr-2" size={20} /> Luna Data Scientist
            </Button>
            <Button
              variant="default"
              radius={"35px"}
              bg="#FDF6EA"
              className={`border-2 border-black ${classes.simpleButton}`}
            >
              <img
                src="/assets/star.svg"
                className="mr-2 h-5 w-5 md:h-auto md:w-auto"
              />
              5/5 (5)
            </Button>
          </div>

          <div className="my-8 space-y-[20px]">
            <div className="flex justify-between items-end ">
              <div className="rounded-full h-[93px] w-[93px] overflow-hidden">
                <img
                  src="/assets/profile.jpeg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-[6px]">
                <Button
                  variant="default"
                  radius={"35px"}
                  bg="#FDF6EA"
                  color="#FFF"
                  className={`${classes.simpleButton} `}
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
                  className={classes.button}
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

          <Tabs defaultValue="gallery">
            <Tabs.List>
              <Tabs.Tab value="gallery">Description</Tabs.Tab>
              <Tabs.Tab value="about">About Seller</Tabs.Tab>
              <Tabs.Tab value="testimonials">Testimonials</Tabs.Tab>
              <Tabs.Tab value="offers">More Offers</Tabs.Tab>
            </Tabs.List>

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

            <Tabs.Panel value="testimonials">
              <div className="py-[5%] border-b border-zinc/200">
                <div className="flex justify-between items-center pb-4">
                  <h1 className="text-[16px] md:text-[20px] font-[700]">
                    Testimonials
                  </h1>

                  <div className="flex gap-6 items-center">
                    <FaArrowLeft size={25} className="cursor-pointer" />
                    <FaArrowRight size={25} className="cursor-pointer" />
                  </div>
                </div>

                <Slider {...settings}>
                  <div>
                    <Card
                      padding="lg"
                      component="div"
                      className="w-[350px] mx-4 flex-shrink-0 border border-black"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-[42px] h-[42px] rounded-full overflow-hidden">
                          <img
                            src={"/assets/Avatar.png"}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h2 className="text-[14px] font-[700]">Asfandyar</h2>
                      </div>
                      <Text className="text-[13px] md:text-[16px] pb-[18px]">
                        I really like the quick turnaround response I received.
                        Matt seems really easy to talk to.
                      </Text>
                    </Card>
                  </div>
                </Slider>
                <div className="slider-container">
                  <div
                    className="overflow-x-auto"
                    style={{
                      scrollbarWidth: "none", // For Firefox
                      msOverflowStyle: "none", // For Internet Explorer and Edge
                    }}
                  >
                    <div className="flex flex-nowrap">
                      {testimonials.map((testimonial, index) => (
                        <Card
                          key={index}
                          padding="xl"
                          component="div"
                          className="w-[250px] mx-2 flex-shrink-0 border border-black"
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-[42px] h-[42px] rounded-full overflow-hidden">
                              <img
                                src={testimonial.image}
                                alt=""
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <h2 className="text-[14px] font-[700]">
                              {testimonial.name}
                            </h2>
                          </div>
                          <Text className="text-[13px] md:text-[16px] pb-[18px]">
                            {testimonial.feedback}
                          </Text>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Tabs.Panel>

            <Tabs.Panel value="offers" className={`bg-[#ECCC7B]`}>
              <div className="p-[5%] border-b border-zinc/200">
                <div className="flex justify-between items-center pb-4">
                  <h1 className="text-[16px] md:text-[20px] font-[700]">
                    More Offerings
                  </h1>

                  <div className="flex gap-6 items-center">
                    <FaArrowLeft size={25} className="cursor-pointer" />
                    <FaArrowRight size={25} className="cursor-pointer" />
                  </div>
                </div>

                <div
                  className="overflow-x-auto"
                  style={{
                    scrollbarWidth: "none", // For Firefox
                    msOverflowStyle: "none", // For Internet Explorer and Edge
                  }}
                >
                  <div className="flex flex-nowrap">
                    {testimonials.map((testimonial, index) => (
                      <Card
                        key={index}
                        padding="sm"
                        component="div"
                        className="w-[260px] mx-2 flex-shrink-0 border border-black"
                      >
                        <div className="">
                          <h2 className="text-[13px] md:text-[16px] font-[700]">
                            Design System basics
                          </h2>
                          <p className="text-[14px] font-[400]">
                            By Usman Zafar
                          </p>

                          <div className="space-x-2 py-4">
                            <Button
                              variant="default"
                              radius={"35px"}
                              className={"border border-black text-[12px]"}
                            >
                              30 mins
                            </Button>
                            <Button
                              variant="default"
                              radius={"35px"}
                              className={"border border-black text-[12px]"}
                            >
                              Video Meeting
                            </Button>
                          </div>
                          <div className="flex justify-end">
                            <FiArrowUpRight
                              size={50}
                              className=" rounded-full p-3 text-white bg-orange-400"
                            />
                          </div>
                        </div>
                      </Card>
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

      <div
        className={`${
          open === true ? "bottom-0" : "bottom-[-1000px]"
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
    </>
  );
};

export default Page;
