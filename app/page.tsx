import React from 'react'
import WhatOurClientsSay from './components/WhatOurClientsSay'
import FAQ from './components/FAQ'
// import { Image } from '@mantine/core'
import Image from 'next/image'
import { Button } from '@mantine/core'
import { IoArrowForward } from "react-icons/io5";
import FindRightExpert from './components/FindRightExpert'
import EarnMoreOnLogoName from './components/EarnMoreOnLogoName'
import OneStopShop from './components/OneStopShop'
import ConnectWithTopRatedExperts from './components/ConnectWithTopRatedExperts'
import { FooterCentered } from './components/Footer'





const Home = () => {
  return (
    <div className='w-full bg-[#FDF6EA]'>
      <div className='flex lg:flex-row flex-col items-center lg:gap-3 gap-[50px] py-[64px] justify-between px-3 2xl:px-[100px]'>
        <div className='max-w-[642px]'>
          <button className='border-2 border-[#1E1E1E] py-3 px-4 bg-transparent rounded-[26px] text-[14px] leading-[17.85px] font-semibold mb-6'>Instant access to top talent</button>
          <div className='flex items-center flex-wrap gap-2 text-[32px] leading-[40px] sm:text-[40px] sm:leading-[51px] md:text-[60px] md:leading-[75px] font-normal'><span className='font-bold'>Turn </span> your  
            <IoArrowForward className='bg-[#FDBA74] text-white rounded-[25px] text-[10px] border border-black min-w-[54px] md:min-w-[75px] h-[33px] md:h-[45px] font-normal' /> 
            <span className='font-bold'> passion</span> and <span className='font-bold text-[#10B981]'>knowledge</span> into a <span className='font-bold'>thriving business</span>
          </div>
          <p className='text-[14px] md:text-[16px] leading-[20px] font-normal py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare venenatis semper. Quisque facilisis nisi ac viverra lobortis. Vivamus porta justo justo</p>
          <div className='flex items-center gap-5'>
            <button className='border-borderCustom border-[#1E1E1E] rounded-[36px] min-w-[159px] h-[47px] bg-white text-[16px] leading-[20px] font-bold'>View Experts</button>
            <div className='flex items-center gap-1.5'>
              <Image src='/assets/video-icon.svg' alt='Icon' width={24} height={24} />
              <h2 className='text-[16px] leading-[20px] font-bold'>Watch Video</h2>
            </div>
          </div>
        </div>
        <div className='relative'>
          <Image src='/assets/Group 5.svg' alt='Image' width={452} height={437} className='w-[452px] h-[437px]' />
          <Image src='/assets/Group 16.svg' alt='Logo' width={122} height={122} className='min-w-[122px] h-[122px] bg-contain z-20 absolute -bottom-16 left-1/2 md:left-0  transform -translate-x-1/2' />
        </div>

      </div>

      {/* Find The Right Expert */}
      <FindRightExpert/>

      {/* Connect with top-rated experts */}
      <ConnectWithTopRatedExperts/>

      {/* Creators Earn More On Logo Name */}
      <EarnMoreOnLogoName/>

      {/* Your one-stop shop for all your expert needs */}
      <OneStopShop/>

      {/* FAQ */}
      <FAQ/>

      {/* What Our Clients Say */}
      <WhatOurClientsSay />

      {/* Footer */}
      <FooterCentered/>
    </div>
  )
}

export default Home