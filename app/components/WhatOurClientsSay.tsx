'use client'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';


const clientTestimonials = [
  {
    id: 1,
    name: 'Usman Zafar',
    designation: 'Designer',
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare venenatis semper.Quisque facilisis nisi ac viverra lobortis.',
    rating: 5.0,
  },
  {
    id: 2,
    name: 'Usman Zafar',
    designation: 'Designer',
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare venenatis semper.Quisque facilisis nisi ac viverra lobortis.',
    rating: 5.0,
  },
  {
    id: 3,
    name: 'Usman Zafar',
    designation: 'Designer',
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare venenatis semper.Quisque facilisis nisi ac viverra lobortis.',
    rating: 5.0,
  },
  {
    id: 4,
    name: 'Usman Zafar',
    designation: 'Designer',
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare venenatis semper.Quisque facilisis nisi ac viverra lobortis.',
    rating: 5.0,
  },
  {
    id: 5,
    name: 'Usman Zafar',
    designation: 'Designer',
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare venenatis semper.Quisque facilisis nisi ac viverra lobortis.',
    rating: 5.0,
  },
  {
    id: 5,
    name: 'Usman Zafar',
    designation: 'Designer',
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare venenatis semper.Quisque facilisis nisi ac viverra lobortis.',
    rating: 5.0,
  },
];

const settings = {
    centerMode: true,
    slidesToShow: 4.49,  
    slidesToScroll: 1,  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.10,
        },
      },
    ],
  };
  

const WhatOurClientsSay: React.FC = () => {
  return (
    <div className="w-full pt-28 pb-0">
      <h2 className="text-4xl font-normal text-black text-center mb-8">
        What Our <span className="font-black">Clients</span> Say
      </h2>
      <style jsx global>{`
        .slick-slide {
          background-color: transparent;
          border: 1px solid #1e1e1e;
          padding: 0 5px; 
          border-radius: 10px;
        }
        .slick-slide.slick-current {
          background-color: #d9f99d;
          border: 1px solid #1e1e1e;
        }
        .gap-4 > .slick-list > .slick-track > .slick-slide {
          margin-right: 15px; /* Adjust the gap size as needed */
        }
        .gap-2 > .slick-list > .slick-track > .slick-slide {
          margin-right: 1px; /* Adjust the gap size as needed */
        }
      `}</style>
      <div className="overflow-x-hidden -mb-[250px] w-full ">
        <Slider {...settings} className="gap-4">
          {clientTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-5">
              <Image src="/assets/sliderComma.svg" alt="Comma" width={32} height={32} />
              <p className="text-[#000F24] text-[20px] font-normal leading-[26px] mt-4">
                {testimonial.testimonial}
              </p>
              <h2 className="text-[#000F24] text-[18px] leading-[23px] font-bold mt-[60px]">
                {testimonial.name}
              </h2>
              <h4 className="text-[#1E1E1E] text-[16px] leading-[20.4px] font-normal mt-0.5">
                {testimonial.designation}
              </h4>
              <div className="flex gap-1.5 mt-2.5">
                <h2 className="text-[#1E1E1E] text-[14px] leading-[17.85px] font-normal mt-0.5">
                  {testimonial.rating}
                </h2>
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <FaStar key={starIndex} className="text-[#FB923C] text-[20px]" />
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default WhatOurClientsSay;
