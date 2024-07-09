import Image from 'next/image'
import React from 'react'
import { IoArrowForward } from "react-icons/io5";
import { RiArrowRightUpLine } from "react-icons/ri";


const ConnectWithTopRatedExperts = () => {
  return (
    <div className='max-w-[1440px] mx-auto pt-[50px] md:pt-[122px] 2xl:px-[100px] md:px-[50px] px-4'>
        {/* Connect with top-rated experts in various fields */}
        <div className='flex items-center md:flex-row flex-col justify-between px-2 gap-10 mb-[50px] md:mb-0'>
          <div className='max-w-[553px]'>
            <h1 className='text-[28px] leading-[45px] md:text-[45px] md:leading-[57px]  font-black capitalize'>Connect <span className='font-normal'>with</span> <span className='font-medium top-rated-bg text-white rounded-md px-1'>top-rated</span> experts <span className='font-normal'>in various</span> fields</h1>
            <p className='text-[14px] md:text-[16px] leading-[30px] font-normal py-[25px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare venenatis semper. Quisque facilisis nisi ac viverra lobortis. Vivamus porta justo justo</p>
            <button className='border-borderCustom border-[#1E1E1E] bg-white rounded-[35px] h-[47px] w-[159px] text-[16px] leading-[20px] font-bold'>View Experts</button>
          </div>
          <div>
            <Image src='/assets/top-rated.svg' alt='Image' width={477} height={459} />
          </div>
        </div>

        {/* list your services and start earning $$ */}
        <div className='flex md:flex-row flex-col items-center justify-between gap-[70px] bg-[#DCFCE7] rounded-[22px] p-5 md:p-10 mb-[50px] md:mb-[100px] px-2'>
          <div>
            <Image src='/assets/list-your-services.svg' alt='Image' width={441} height={426} />
          </div>
          <div className=''>
            <h1 className='text-[28px] leading-[45px] md:text-[45px] md:leading-[57px] font-normal'>List Your <span className='font-black'>Services</span> And</h1>
            <h1 className='text-[28px] leading-[45px] md:text-[45px] md:leading-[57px]  font-normal flex items-center gap-2'>Start Earning <IoArrowForward className='bg-[#FDBA74] text-white rounded-[25px] border border-black min-w-[54px] md:min-w-[75px] h-[33px] md:h-[45px]' /> <span className='font-black'>$$</span> </h1>
            <div className='my-[31px] grid grid-cols-2 gap-3 md:gap-5'>
              <h3 className='text-[14px] md:text-[16px] leading-[20px] font-bold'>Offer 1:1 sessions</h3>
              <h3 className='text-[14px] md:text-[16px] leading-[20px] font-bold'>Sell a digital product</h3>
              <h3 className='text-[14px] md:text-[16px] leading-[20px] font-bold'>Setup Priority DM in seconds</h3>
              <h3 className='text-[14px] md:text-[16px] leading-[20px] font-bold'>Bundle your services</h3>
              <h3 className='text-[14px] md:text-[16px] leading-[20px] font-bold'>Host a webinar</h3>
            </div>
            <button className='border-borderCustom border-[#1E1E1E] rounded-[35px] w-[212px] h-[51px] bg-white text-[16px] leading-[20px] font-bold flex items-center gap-1 justify-center'>Launch your page <RiArrowRightUpLine /></button>
          </div>
        </div>

        {/* Create your page in a flash */}
        <div className='flex items-center md:flex-row flex-col justify-between gap-5'>
            <div className='max-w-[443px] flex flex-col gap-[15px] md:gap-[32px]'>
                <h1 className='text-[26px] leading-[38px] md:text-[45px] md:leading-[57px] font-bold'>Create <span className='font-normal'>Your</span> Page <span className='font-normal'>In A</span> Flash</h1>
                <p className='text-[14px] md:text-[16px] font-normal leading-[20px]'>Start earning $$ by the time you finish reading our website</p>
                <button className='border-borderCustom border-[#1E1E1E] bg-white rounded-[35px] h-[47px] w-[195px] text-[16px] leading-[20px] font-bold'>Launch Your Page</button>
            </div>
            <div>
                <Image src='/assets/create-your-page.svg' alt='Image' width={513} height={434} />
            </div>
        </div>
    </div>
  )
}

export default ConnectWithTopRatedExperts