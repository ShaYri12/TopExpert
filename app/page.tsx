import React from 'react'
import WhatOurClientsSay from './components/WhatOurClientsSay'
import FAQ from './components/FAQ'
// import { Image } from '@mantine/core'
import Image from 'next/image'
import { Button } from '@mantine/core'
import { IoArrowForward } from "react-icons/io5";
import FindRightExpert from './components/FindRightExpert'





const Home = () => {
  return (
    <div className='w-full bg-[#FDF6EA]'>
      <div className='flex items-center gap-3 py-[64px] justify-between px-[100px]'>
        <div className='max-w-[642px]'>
          <button className='border-2 border-[#1E1E1E] py-3 px-4 bg-transparent rounded-[26px] text-[14px] leading-[17.85px] font-semibold mb-6'>Instant access to top talent</button>
          <div className='flex items-center flex-wrap gap-2 text-[60px] leading-[75px] font-normal'><span className='font-bold'>Turn </span> your  
            <IoArrowForward className='bg-[#FDBA74] text-white rounded-[25px] text-[10px] border border-black min-w-[75px] h-[45px] font-normal' /> 
            <span className='font-bold'> passion</span> and <span className='font-bold text-[#10B981]'>knowledge</span> into a <span className='font-bold'>thriving business</span>
          </div>
          <p className='text-[16px] leading-[20px] font-normal py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare venenatis semper. Quisque facilisis nisi ac viverra lobortis. Vivamus porta justo justo</p>
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
          <Image src='/assets/Group 16.svg' alt='Logo' width={122} height={122} className='min-w-[122px] h-[122px] bg-contain z-20 absolute -bottom-16 -left-16' />
        </div>
      </div>

      {/* Find The Right Expert */}
      <FindRightExpert/>

      {/* FAQ */}
      <FAQ/>

      {/* What Our Clients Say */}
      <WhatOurClientsSay/>
    </div>
  )
}

export default Home