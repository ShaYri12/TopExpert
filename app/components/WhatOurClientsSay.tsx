"use client";
import React from "react";
import { useCallback, useEffect, useState } from "react";
import { Carousel, Embla } from "@mantine/carousel";

const WhatOurClientsSay: React.FC = () => {
  // Replace with your actual data for each slide
  const sliderData = [
    { id: 1, content: "Client feedback 1" },
    { id: 2, content: "Client feedback 2" },
    { id: 3, content: "Client feedback 3" },
    { id: 4, content: "Client feedback 4" },
    { id: 5, content: "Client feedback 5" },
    { id: 6, content: "Client feedback 6" },
    { id: 7, content: "Client feedback 7" },
    { id: 8, content: "Client feedback 8" },
    { id: 9, content: "Client feedback 9" },
  ];

  return (
    <div className="bg-[#FDF6EA] w-full py-28">
      <h2 className="text-[45px] leading-[57px] font-normal text-black text-center">
        What Our <span className="font-black">Clients</span> Say
      </h2>
      <div className="">
        <Carousel
          initialSlide={0}
          slideGap={30}
          slideSize="20%" // Adjusts the size of each slide to fit 5 in view
          align="start" // Aligns the slides to the start
        >
          {sliderData.slice(0, 5).map((slide) => (
            <Carousel.Slide
              key={slide.id}
              className="bg-red-500 min-w-[351px] h-[350px] border border-black"
            >
              {slide.content}
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default WhatOurClientsSay;
