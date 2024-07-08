import Image from 'next/image'
import React from 'react'
import { IoArrowForward } from "react-icons/io5";


const WhyYouShouldHireDesigners = () => {
  return (
    <div>
        <div className='px-3 2xl:px-[100px] mt-[60px] mb-[100px]'>
            <h4 className='text-center text-[14px] leading-[17.85px] font-semibold'>Simplify your life</h4>
            <h1 className='capitalize text-[28px] leading-[40px] md:text-[45px] md:leading-[57px] font-black text-center max-w-[639px] mx-auto mt-4'>why you <span className='font-medium'>should</span> hire <span className='font-medium'>Designers</span></h1>

            <div className='mt-[40px] flex items-center justify-center flex-wrap gap-5'>
                <div className='border-borderCustom3 border-[#1E1E1E] rounded-[15px] w-[380px] h-[320px] bg-[#FFFAF2] p-6'>
                    <Image src='/assets/1.svg' alt='Logo' width={78} height={76} />
                    <h2 className='mt-[30px] mb-[20px] text-[25px] leading-[31.87px] font-extrabold max-w-[216px] capitalize'>Begin <span className='font-medium'>your</span> side <span className='font-medium'>hustle</span></h2>
                    <p className='text-[16px] leading-[20.4px] font-normal'>Always had the kick to start something of your own? Start with monetizing your time with logoname!</p>
                </div>
                <div className='border-borderCustom3 border-[#1E1E1E] rounded-[15px] w-[380px] h-[320px] bg-[#FFFAF2] p-6'>
                    <Image src='/assets/2.svg' alt='Logo' width={78} height={76} />
                    <h2 className='mt-[30px] mb-[20px] text-[25px] leading-[31.87px] font-medium max-w-[216px] capitalize'>Connect <span className='font-extrabold'>with your</span> followers</h2>
                    <p className='text-[16px] leading-[20.4px] font-normal'>Always had the kick to start something of your own? Start with monetizing your time with logoname!</p>
                </div>
                <div className='border-borderCustom3 border-[#1E1E1E] rounded-[15px] w-[380px] h-[320px] bg-[#FFFAF2] p-6'>
                    <Image src='/assets/3.svg' alt='Logo' width={78} height={76} />
                    <h2 className='mt-[30px] mb-[20px] text-[25px] leading-[31.87px] font-medium max-w-[216px] capitalize'>Up-skill <span className='font-extrabold'>your community</span></h2>
                    <p className='text-[16px] leading-[20.4px] font-normal'>Always had the kick to start something of your own? Start with monetizing your time with logoname!</p>
                </div>
            </div>
        </div>

        {/* Slider */}
        <div className='bg-[#ECCC7B] w-full py-[53px]'>
            <div className='px-3 2xl:px-[100px]'>
                <h4 className='text-[14px] leading-[17.85px] font-semibold mb-[17px]'>Simplify your life</h4>
                <h1 className='capitalize text-[28px] leading-[40px] md:text-[45px] md:leading-[57px] font-black'>why you <span className='font-medium'>should</span> hire <span className='font-medium'>Designers</span></h1>
            </div>

            <div className='grid md:grid-cols-6 gap-2 md:gap-[300px] grid-cols-2 overflow-scroll justify-items-center mt-[50px] mx-2 md:mx-0'>
                <div className='md:min-w-[295px] max-w-[295px] border-borderCustom2 border-[#1E1E1E] bg-white rounded-[12px]'>
                    <Image src='assets/designer.svg' alt='Image' width={295} height={315} className='rounded-[12px]' />
                    <div className='p-3.5'>
                        <h3 className='text-[#64748B] text-[12px] md:text-[14px] font-normal leading-[18px]'>UI UX Designer</h3>
                        <h2 className='text-[16px] md:text-[20px] leading-[25px] font-black my-1.5'>Usman Zafar</h2>
                        <div className='w-full flex items-center justify-between gap-1.5'>
                          <h4 className='text-[#64748B] text-[12px] md:text-[14px] leading-[18px] font-normal'>4 years experinece</h4>
                          <IoArrowForward className='text-black text-lg md:text-2xl cursor-pointer' />
                        </div>
                    </div>
                </div>
                <div className='md:min-w-[295px] max-w-[295px] border-borderCustom2 border-[#1E1E1E] bg-white rounded-[12px]'>
                    <Image src='assets/designer1.svg' alt='Image' width={295} height={315} className='rounded-[12px]' />
                    <div className='p-3.5'>
                        <h3 className='text-[#64748B] text-[12px] md:text-[14px] font-normal leading-[18px]'>UI UX Designer</h3>
                        <h2 className='text-[16px] md:text-[20px] leading-[25px] font-black my-1.5'>Usman Zafar</h2>
                        <div className='w-full flex items-center justify-between gap-1.5'>
                            <h4 className='text-[#64748B] text-[12px] md:text-[14px] leading-[18px] font-normal'>4 years experinece</h4>
                            <IoArrowForward className='text-black text-lg md:text-2xl cursor-pointer' />
                        </div>
                    </div>
                </div>
                <div className='md:min-w-[295px] border-borderCustom2 border-[#1E1E1E] bg-white rounded-[12px]'>
                    <Image src='assets/designer.svg' alt='Image' width={295} height={315} className='rounded-[12px]' />
                    <div className='p-3.5'>
                        <h3 className='text-[#64748B] text-[12px] md:text-[14px] font-normal leading-[18px]'>UI UX Designer</h3>
                        <h2 className='text-[16px] md:text-[20px] leading-[25px] font-black my-1.5'>Usman Zafar</h2>
                        <div className='w-full flex items-center justify-between gap-1.5'>
                            <h4 className='text-[#64748B] text-[12px] md:text-[14px] leading-[18px] font-normal'>4 years experinece</h4>
                            <IoArrowForward className='text-black text-lg md:text-2xl cursor-pointer' />
                        </div>
                    </div>
                </div>
                <div className='md:min-w-[295px] border-borderCustom2 border-[#1E1E1E] bg-white rounded-[12px]'>
                    <Image src='assets/designer3.svg' alt='Image' width={295} height={315} className='rounded-[12px]' />
                    <div className='p-3.5'>
                        <h3 className='text-[#64748B] text-[12px] md:text-[14px] font-normal leading-[18px]'>UI UX Designer</h3>
                        <h2 className='text-[16px] md:text-[20px] leading-[25px] font-black my-1.5'>Usman Zafar</h2>
                        <div className='w-full flex items-center justify-between gap-1.5'>
                            <h4 className='text-[#64748B] text-[12px] md:text-[14px] leading-[18px] font-normal'>4 years experinece</h4>
                            <IoArrowForward className='text-black text-lg md:text-2xl cursor-pointer' />
                        </div>
                    </div>
                </div>
                <div className='md:min-w-[295px] border-borderCustom2 border-[#1E1E1E] bg-white rounded-[12px]'>
                    <Image src='assets/designer.svg' alt='Image' width={295} height={315} className='rounded-[12px]' />
                    <div className='p-3.5'>
                        <h3 className='text-[#64748B] text-[12px] md:text-[14px] font-normal leading-[18px]'>UI UX Designer</h3>
                        <h2 className='text-[16px] md:text-[20px] leading-[25px] font-black my-1.5'>Usman Zafar</h2>
                        <div className='w-full flex items-center justify-between gap-1.5'>
                            <h4 className='text-[#64748B] text-[12px] md:text-[14px] leading-[18px] font-normal'>4 years experinece</h4>
                            <IoArrowForward className='text-black text-lg md:text-2xl cursor-pointer' />
                        </div>
                    </div>
                </div>
                <div className='md:min-w-[295px] border-borderCustom2 border-[#1E1E1E] bg-white rounded-[12px]'>
                    <Image src='assets/designer.svg' alt='Image' width={295} height={315} className='rounded-[12px]' />
                    <div className='p-3.5'>
                        <h3 className='text-[#64748B] text-[12px] md:text-[14px] font-normal leading-[18px]'>UI UX Designer</h3>
                        <h2 className='text-[16px] md:text-[20px] leading-[25px] font-black my-1.5'>Usman Zafar</h2>
                        <div className='w-full flex items-center justify-between gap-1.5'>
                            <h4 className='text-[#64748B] text-[12px] md:text-[14px] leading-[18px] font-normal'>4 years experinece</h4>
                            <IoArrowForward className='text-black text-lg md:text-2xl cursor-pointer' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyYouShouldHireDesigners