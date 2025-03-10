'use client'
import React from 'react'
import WhatOurClientsSay from '../components/WhatOurClientsSay'
import FAQ from '../components/FAQ'
import WhyYouShouldHireDesigners from './WhyYouShouldHireDesigners'
import Image from 'next/image'
import { FooterCentered } from '../components/Footer'
import { HeaderMegaMenu } from '../components/Header'


const DesktopTwo = () => {
  return (
    <>
    <HeaderMegaMenu/>
    <div className='w-full'>
      {/* Hero Section */}
      <div className='max-w-[1440px] mx-auto w-full flex items-center md:flex-row flex-col justify-between px-4 md:px-[50px] 2xl:px-[100px] gap-8'>
        <div className='max-w-[618px]'>
          <h4 className='text-[14px] leading-[17.85px] font-semibold mb-4'>Turning browsers into believers</h4>
          <h1 className='text-[38px] leading-[49px] md:text-[60px] md:leading-[66px] font-extrabold mb-7'>From pixels to <span className='font-medium'>profits</span>, We <span className='font-medium'>design</span> for your success</h1>
          <p className='text-[14px] md:text-[16px] leading-[20px] font-normal mb-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare venenatis semper. Quisque facilisis nisi ac viverra lobortis. Vivamus porta justo justo</p>
          <button className='border-borderCustom border-[#1E1E1E] w-[147px] h-[47px] rounded-[35px] bg-white text-[16px] font-bold leading-[20px]'>Get Started</button>
        </div>
        <div className='md:h-[520px]'>
          <Image src='/assets/desktop2-hero.svg' alt='Image' width={423} height={553} />
        </div>
      </div>

      {/* Why you should hire Designers */}
      <WhyYouShouldHireDesigners/>

      {/* Faq */}
      <FAQ/>

      {/* What Our Clients Say */}
      <WhatOurClientsSay/>

      {/* Footer */}
      <FooterCentered/>
    </div>
    </>
  )
}

export default DesktopTwo