'use client'
import { Group, Tabs, TabsList } from '@mantine/core'
import { FC, useState } from 'react';
import Image from 'next/image'
import { IoArrowForward } from "react-icons/io5";


type Tab = 'Designers' | 'Developers' | 'Product Managers' | 'Business gurus' | 'Data Scientists' | 'Medical Experts';

 
const FindRightExpert: FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('Designers');

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);
  };

  return (
      <div className='bg-[#ECCC7B] w-full mt-14 relative py-20 md:py-36 px-2'>
        <Image src='/assets/hero-slider.svg' alt='Image' width={2000} height={150} className='absolute w-[2000px] -top-4 md:-top-11 left-0 overflow-hidden'/>
        <p className='text-[14px] leading-[17.85px] font-semibold text-center capitalize'>Get Personalized advice from top experts to your specific questions</p>
        <h2 className='text-[28px] md:text-[45px] leading-[38px] md:leading-[57px] text-center max-w-[570px] mx-auto mt-4 capitalize'>Find The <span className='font-black'>right expert</span> in your <span className='font-black'>field</span> in minutes</h2>
        
        {/* Search */}
        <Group className='mt-[36px] mx-auto max-w-[1086px] bg-white pl-6 pr-2 md:pr-4 py-1 sm:py-3 border-borderCustom1 border-[#1E1E1E] rounded-[56px] flex items-center justify-between'>
            <input type='text' placeholder='Search Expert' className='flex-1 bg-transparent outline-none text-[16px] md:text-[18px] leading-[23px] font-normal p-0 border-none '/>
            <button className='border-borderCustom border-[#1E1E1E] bg-white rounded-[35px] min-w-[110px] h-[47px]'>Search</button>
        </Group>

        {/* Tabs */}
        <div>
            <div className='mt-[38px] w-full max-w-[1095px] mx-auto flex items-center justify-center flex-wrap gap-2 md:gap-4'>
              {(['Designers', 'Developers', 'Product Managers', 'Business gurus', 'Data Scientists', 'Medical Experts'] as Tab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  className={`border-[#1E1E1E] ${activeTab === tab ? 'bg-[#FB923C]' : 'bg-white'} p-2.5 md:px-5 h-[46px] md:h-[53px] rounded-[56px] text-[14px] md:text-[18px] leading-[23px] font-${activeTab === tab ? 'bold' : 'normal'} text-${activeTab === tab ? 'white' : 'black'} border-borderCustom${activeTab === tab ? '' : '1'}`}
                >
                  {tab}
                </button>
              ))}
          </div>

          <div className='w-full max-w-[1240px] mx-auto mt-[60px]'>
              {/* Designers */}
              {activeTab === 'Designers' && (
                <div className='grid md:grid-cols-4 grid-cols-2 justify-items-center gap-5'>
                    <div className='max-w-[295px] border-borderCustom2 border-[#1E1E1E] bg-white rounded-[12px]'>
                      <Image src='assets/designer.svg' alt='Image' width={295} height={315} className='rounded-[12px]' />
                      <div className='p-3.5'>
                        <h3 className='text-[#64748B] text-[12px] md:text-[14px] font-normal leading-[18px]'>UI UX Designer</h3>
                        <h2 className='text-[16px] md:text-[20px] leading-[25px] font-black my-1.5'>Usman Zafar</h2>
                        <div className='w-full flex items-center justify-between gap-1.5'>
                          <h4 className='text-[#64748B] text-[12px] md:text-[14px] leading-[18px] font-normal'>4 years experinece</h4>
                          <IoArrowForward className='text-black text-2xl cursor-pointer' />
                        </div>
                      </div>
                    </div>
                    <div className='max-w-[295px] border-borderCustom2 border-[#1E1E1E] bg-white rounded-[12px]'>
                      <Image src='assets/designer1.svg' alt='Image' width={295} height={315} className='rounded-[12px]' />
                      <div className='p-3.5'>
                        <h3 className='text-[#64748B] text-[12px] md:text-[14px] font-normal leading-[18px]'>UI UX Designer</h3>
                        <h2 className='text-[16px] md:text-[20px] leading-[25px] font-black my-1.5'>Usman Zafar</h2>
                        <div className='w-full flex items-center justify-between gap-1.5'>
                          <h4 className='text-[#64748B] text-[12px] md:text-[14px] leading-[18px] font-normal'>4 years experinece</h4>
                          <IoArrowForward className='text-black text-2xl cursor-pointer' />
                        </div>
                      </div>
                    </div>
                    <div className='max-w-[295px] border-borderCustom2 border-[#1E1E1E] bg-white rounded-[12px]'>
                      <Image src='assets/designer1.svg' alt='Image' width={295} height={315} className='rounded-[12px]' />
                      <div className='p-3.5'>
                        <h3 className='text-[#64748B] text-[12px] md:text-[14px] font-normal leading-[18px]'>UI UX Designer</h3>
                        <h2 className='text-[16px] md:text-[20px] leading-[25px] font-black my-1.5'>Usman Zafar</h2>
                        <div className='w-full flex items-center justify-between gap-1.5'>
                          <h4 className='text-[#64748B] text-[12px] md:text-[14px] leading-[18px] font-normal'>4 years experinece</h4>
                          <IoArrowForward className='text-black text-2xl cursor-pointer' />
                        </div>
                      </div>
                    </div>
                    <div className='max-w-[295px] border-borderCustom2 border-[#1E1E1E] bg-white rounded-[12px]'>
                      <Image src='assets/designer3.svg' alt='Image' width={295} height={315} className='rounded-[12px]' />
                      <div className='p-3.5'>
                        <h3 className='text-[#64748B] text-[12px] md:text-[14px] font-normal leading-[18px]'>UI UX Designer</h3>
                        <h2 className='text-[16px] md:text-[20px] leading-[25px] font-black my-1.5'>Usman Zafar</h2>
                        <div className='w-full flex items-center justify-between gap-1.5'>
                          <h4 className='text-[#64748B] text-[12px] md:text-[14px] leading-[18px] font-normal'>4 years experinece</h4>
                          <IoArrowForward className='text-black text-2xl cursor-pointer' />
                        </div>
                      </div>
                    </div>
                </div>
              )}

              {/* Developers */}
              {activeTab === 'Developers' && (
                <div className='grid md:grid-cols-4 grid-cols-2 gap-5'>
                  <div className='max-w-[295px] border-borderCustom2 border-[#1E1E1E] bg-white rounded-[12px]'>
                      <Image src='assets/designer3.svg' alt='Image' width={295} height={315} className='rounded-[12px]' />
                      <div className='p-3.5'>
                        <h3 className='text-[#64748B] text-[12px] md:text-[14px] font-normal leading-[18px]'>UI UX Designer</h3>
                        <h2 className='text-[16px] md:text-[20px] leading-[25px] font-black my-1.5'>Usman Zafar</h2>
                        <div className='w-full flex items-center justify-between gap-1.5'>
                          <h4 className='text-[#64748B] text-[12px] md:text-[14px] leading-[18px] font-normal'>4 years experinece</h4>
                          <IoArrowForward className='text-black text-2xl cursor-pointer' />
                        </div>
                      </div>
                  </div>
                  <div className='max-w-[295px] border-borderCustom2 border-[#1E1E1E] bg-white rounded-[12px]'>
                      <Image src='assets/designer3.svg' alt='Image' width={295} height={315} className='rounded-[12px]' />
                      <div className='p-3.5'>
                        <h3 className='text-[#64748B] text-[12px] md:text-[14px] font-normal leading-[18px]'>UI UX Designer</h3>
                        <h2 className='text-[16px] md:text-[20px] leading-[25px] font-black my-1.5'>Usman Zafar</h2>
                        <div className='w-full flex items-center justify-between gap-1.5'>
                          <h4 className='text-[#64748B] text-[12px] md:text-[14px] leading-[18px] font-normal'>4 years experinece</h4>
                          <IoArrowForward className='text-black text-2xl cursor-pointer' />
                        </div>
                      </div>
                  </div>
                  <div className='max-w-[295px] border-borderCustom2 border-[#1E1E1E] bg-white rounded-[12px]'>
                      <Image src='assets/designer3.svg' alt='Image' width={295} height={315} className='rounded-[12px]' />
                      <div className='p-3.5'>
                        <h3 className='text-[#64748B] text-[12px] md:text-[14px] font-normal leading-[18px]'>UI UX Designer</h3>
                        <h2 className='text-[16px] md:text-[20px] leading-[25px] font-black my-1.5'>Usman Zafar</h2>
                        <div className='w-full flex items-center justify-between gap-1.5'>
                          <h4 className='text-[#64748B] text-[12px] md:text-[14px] leading-[18px] font-normal'>4 years experinece</h4>
                          <IoArrowForward className='text-black text-2xl cursor-pointer' />
                        </div>
                      </div>
                  </div>
                  <div className='max-w-[295px] border-borderCustom2 border-[#1E1E1E] bg-white rounded-[12px]'>
                      <Image src='assets/designer3.svg' alt='Image' width={295} height={315} className='rounded-[12px]' />
                      <div className='p-3.5'>
                        <h3 className='text-[#64748B] text-[12px] md:text-[14px] font-normal leading-[18px]'>UI UX Designer</h3>
                        <h2 className='text-[16px] md:text-[20px] leading-[25px] font-black my-1.5'>Usman Zafar</h2>
                        <div className='w-full flex items-center justify-between gap-1.5'>
                          <h4 className='text-[#64748B] text-[12px] md:text-[14px] leading-[18px] font-normal'>4 years experinece</h4>
                          <IoArrowForward className='text-black text-2xl cursor-pointer' />
                        </div>
                      </div>
                  </div>
                </div>
              )}

              {/* Product Managers */}
              {activeTab === 'Product Managers' && (
                <div className='grid md:grid-cols-4 grid-cols-2 gap-5'>
                    <div className='max-w-[295px] border-borderCustom2 border-[#1E1E1E] bg-white rounded-[12px]'>
                      <Image src='assets/designer3.svg' alt='Image' width={295} height={315} className='rounded-[12px]' />
                      <div className='p-3.5'>
                        <h3 className='text-[#64748B] text-[12px] md:text-[14px] font-normal leading-[18px]'>UI UX Designer</h3>
                        <h2 className='text-[16px] md:text-[20px] leading-[25px] font-black my-1.5'>Usman Zafar</h2>
                        <div className='w-full flex items-center justify-between gap-1.5'>
                          <h4 className='text-[#64748B] text-[12px] md:text-[14px] leading-[18px] font-normal'>4 years experinece</h4>
                          <IoArrowForward className='text-black text-2xl cursor-pointer' />
                        </div>
                      </div>
                    </div>
                    <div className='max-w-[295px] border-borderCustom2 border-[#1E1E1E] bg-white rounded-[12px]'>
                      <Image src='assets/designer3.svg' alt='Image' width={295} height={315} className='rounded-[12px]' />
                      <div className='p-3.5'>
                        <h3 className='text-[#64748B] text-[12px] md:text-[14px] font-normal leading-[18px]'>UI UX Designer</h3>
                        <h2 className='text-[16px] md:text-[20px] leading-[25px] font-black my-1.5'>Usman Zafar</h2>
                        <div className='w-full flex items-center justify-between gap-1.5'>
                          <h4 className='text-[#64748B] text-[12px] md:text-[14px] leading-[18px] font-normal'>4 years experinece</h4>
                          <IoArrowForward className='text-black text-2xl cursor-pointer' />
                        </div>
                      </div>
                    </div>
                    <div className='max-w-[295px] border-borderCustom2 border-[#1E1E1E] bg-white rounded-[12px]'>
                      <Image src='assets/designer3.svg' alt='Image' width={295} height={315} className='rounded-[12px]' />
                      <div className='p-3.5'>
                        <h3 className='text-[#64748B] text-[12px] md:text-[14px] font-normal leading-[18px]'>UI UX Designer</h3>
                        <h2 className='text-[16px] md:text-[20px] leading-[25px] font-black my-1.5'>Usman Zafar</h2>
                        <div className='w-full flex items-center justify-between gap-1.5'>
                          <h4 className='text-[#64748B] text-[12px] md:text-[14px] leading-[18px] font-normal'>4 years experinece</h4>
                          <IoArrowForward className='text-black text-2xl cursor-pointer' />
                        </div>
                      </div>
                    </div>
                    <div className='max-w-[295px] border-borderCustom2 border-[#1E1E1E] bg-white rounded-[12px]'>
                      <Image src='assets/designer3.svg' alt='Image' width={295} height={315} className='rounded-[12px]' />
                      <div className='p-3.5'>
                        <h3 className='text-[#64748B] text-[12px] md:text-[14px] font-normal leading-[18px]'>UI UX Designer</h3>
                        <h2 className='text-[16px] md:text-[20px] leading-[25px] font-black my-1.5'>Usman Zafar</h2>
                        <div className='w-full flex items-center justify-between gap-1.5'>
                          <h4 className='text-[#64748B] text-[12px] md:text-[14px] leading-[18px] font-normal'>4 years experinece</h4>
                          <IoArrowForward className='text-black text-2xl cursor-pointer' />
                        </div>
                      </div>
                    </div>
                </div>
              )}

              {/* Business gurus */}
              {activeTab === 'Business gurus' && (
                <div className='grid md:grid-cols-4 grid-cols-2 gap-5'>
                    <div className='max-w-[295px] border-borderCustom2 border-[#1E1E1E] bg-white rounded-[12px]'>
                      <Image src='assets/designer3.svg' alt='Image' width={295} height={315} className='rounded-[12px]' />
                      <div className='p-3.5'>
                        <h3 className='text-[#64748B] text-[12px] md:text-[14px] font-normal leading-[18px]'>UI UX Designer</h3>
                        <h2 className='text-[16px] md:text-[20px] leading-[25px] font-black my-1.5'>Usman Zafar</h2>
                        <div className='w-full flex items-center justify-between gap-1.5'>
                          <h4 className='text-[#64748B] text-[12px] md:text-[14px] leading-[18px] font-normal'>4 years experinece</h4>
                          <IoArrowForward className='text-black text-2xl cursor-pointer' />
                        </div>
                      </div>
                    </div>
                    <div className='max-w-[295px] border-borderCustom2 border-[#1E1E1E] bg-white rounded-[12px]'>
                      <Image src='assets/designer3.svg' alt='Image' width={295} height={315} className='rounded-[12px]' />
                      <div className='p-3.5'>
                        <h3 className='text-[#64748B] text-[12px] md:text-[14px] font-normal leading-[18px]'>UI UX Designer</h3>
                        <h2 className='text-[16px] md:text-[20px] leading-[25px] font-black my-1.5'>Usman Zafar</h2>
                        <div className='w-full flex items-center justify-between gap-1.5'>
                          <h4 className='text-[#64748B] text-[12px] md:text-[14px] leading-[18px] font-normal'>4 years experinece</h4>
                          <IoArrowForward className='text-black text-2xl cursor-pointer' />
                        </div>
                      </div>
                    </div>
                    <div className='max-w-[295px] border-borderCustom2 border-[#1E1E1E] bg-white rounded-[12px]'>
                      <Image src='assets/designer3.svg' alt='Image' width={295} height={315} className='rounded-[12px]' />
                      <div className='p-3.5'>
                        <h3 className='text-[#64748B] text-[12px] md:text-[14px] font-normal leading-[18px]'>UI UX Designer</h3>
                        <h2 className='text-[16px] md:text-[20px] leading-[25px] font-black my-1.5'>Usman Zafar</h2>
                        <div className='w-full flex items-center justify-between gap-1.5'>
                          <h4 className='text-[#64748B] text-[12px] md:text-[14px] leading-[18px] font-normal'>4 years experinece</h4>
                          <IoArrowForward className='text-black text-2xl cursor-pointer' />
                        </div>
                      </div>
                    </div>
                    <div className='max-w-[295px] border-borderCustom2 border-[#1E1E1E] bg-white rounded-[12px]'>
                      <Image src='assets/designer3.svg' alt='Image' width={295} height={315} className='rounded-[12px]' />
                      <div className='p-3.5'>
                        <h3 className='text-[#64748B] text-[12px] md:text-[14px] font-normal leading-[18px]'>UI UX Designer</h3>
                        <h2 className='text-[16px] md:text-[20px] leading-[25px] font-black my-1.5'>Usman Zafar</h2>
                        <div className='w-full flex items-center justify-between gap-1.5'>
                          <h4 className='text-[#64748B] text-[12px] md:text-[14px] leading-[18px] font-normal'>4 years experinece</h4>
                          <IoArrowForward className='text-black text-2xl cursor-pointer' />
                        </div>
                      </div>
                    </div>
                </div>
              )}

              {/* Data Scientists */}
              {activeTab === 'Data Scientists' && (
                <div className='grid md:grid-cols-4 grid-cols-2 gap-5'>
                    <div className='max-w-[295px] border-borderCustom2 border-[#1E1E1E] bg-white rounded-[12px]'>
                      <Image src='assets/designer3.svg' alt='Image' width={295} height={315} className='rounded-[12px]' />
                      <div className='p-3.5'>
                        <h3 className='text-[#64748B] text-[12px] md:text-[14px] font-normal leading-[18px]'>UI UX Designer</h3>
                        <h2 className='text-[16px] md:text-[20px] leading-[25px] font-black my-1.5'>Usman Zafar</h2>
                        <div className='w-full flex items-center justify-between gap-1.5'>
                          <h4 className='text-[#64748B] text-[12px] md:text-[14px] leading-[18px] font-normal'>4 years experinece</h4>
                          <IoArrowForward className='text-black text-2xl cursor-pointer' />
                        </div>
                      </div>
                    </div>
                    <div className='max-w-[295px] border-borderCustom2 border-[#1E1E1E] bg-white rounded-[12px]'>
                      <Image src='assets/designer3.svg' alt='Image' width={295} height={315} className='rounded-[12px]' />
                      <div className='p-3.5'>
                        <h3 className='text-[#64748B] text-[12px] md:text-[14px] font-normal leading-[18px]'>UI UX Designer</h3>
                        <h2 className='text-[16px] md:text-[20px] leading-[25px] font-black my-1.5'>Usman Zafar</h2>
                        <div className='w-full flex items-center justify-between gap-1.5'>
                          <h4 className='text-[#64748B] text-[12px] md:text-[14px] leading-[18px] font-normal'>4 years experinece</h4>
                          <IoArrowForward className='text-black text-2xl cursor-pointer' />
                        </div>
                      </div>
                    </div>
                    <div className='max-w-[295px] border-borderCustom2 border-[#1E1E1E] bg-white rounded-[12px]'>
                      <Image src='assets/designer3.svg' alt='Image' width={295} height={315} className='rounded-[12px]' />
                      <div className='p-3.5'>
                        <h3 className='text-[#64748B] text-[12px] md:text-[14px] font-normal leading-[18px]'>UI UX Designer</h3>
                        <h2 className='text-[16px] md:text-[20px] leading-[25px] font-black my-1.5'>Usman Zafar</h2>
                        <div className='w-full flex items-center justify-between gap-1.5'>
                          <h4 className='text-[#64748B] text-[12px] md:text-[14px] leading-[18px] font-normal'>4 years experinece</h4>
                          <IoArrowForward className='text-black text-2xl cursor-pointer' />
                        </div>
                      </div>
                    </div>
                    <div className='max-w-[295px] border-borderCustom2 border-[#1E1E1E] bg-white rounded-[12px]'>
                      <Image src='assets/designer3.svg' alt='Image' width={295} height={315} className='rounded-[12px]' />
                      <div className='p-3.5'>
                        <h3 className='text-[#64748B] text-[12px] md:text-[14px] font-normal leading-[18px]'>UI UX Designer</h3>
                        <h2 className='text-[16px] md:text-[20px] leading-[25px] font-black my-1.5'>Usman Zafar</h2>
                        <div className='w-full flex items-center justify-between gap-1.5'>
                          <h4 className='text-[#64748B] text-[12px] md:text-[14px] leading-[18px] font-normal'>4 years experinece</h4>
                          <IoArrowForward className='text-black text-2xl cursor-pointer' />
                        </div>
                      </div>
                    </div>
                </div>
              )}

              {/* Medical Experts */}
              {activeTab === 'Medical Experts' && (
                <div className='grid md:grid-cols-4 grid-cols-2 gap-5'>
                    <div className='max-w-[295px] border-borderCustom2 border-[#1E1E1E] bg-white rounded-[12px]'>
                      <Image src='assets/designer3.svg' alt='Image' width={295} height={315} className='rounded-[12px]' />
                      <div className='p-3.5'>
                        <h3 className='text-[#64748B] text-[12px] md:text-[14px] font-normal leading-[18px]'>UI UX Designer</h3>
                        <h2 className='text-[16px] md:text-[20px] leading-[25px] font-black my-1.5'>Usman Zafar</h2>
                        <div className='w-full flex items-center justify-between gap-1.5'>
                          <h4 className='text-[#64748B] text-[12px] md:text-[14px] leading-[18px] font-normal'>4 years experinece</h4>
                          <IoArrowForward className='text-black text-2xl cursor-pointer' />
                        </div>
                      </div>
                    </div>
                    <div className='max-w-[295px] border-borderCustom2 border-[#1E1E1E] bg-white rounded-[12px]'>
                      <Image src='assets/designer3.svg' alt='Image' width={295} height={315} className='rounded-[12px]' />
                      <div className='p-3.5'>
                        <h3 className='text-[#64748B] text-[12px] md:text-[14px] font-normal leading-[18px]'>UI UX Designer</h3>
                        <h2 className='text-[16px] md:text-[20px] leading-[25px] font-black my-1.5'>Usman Zafar</h2>
                        <div className='w-full flex items-center justify-between gap-1.5'>
                          <h4 className='text-[#64748B] text-[12px] md:text-[14px] leading-[18px] font-normal'>4 years experinece</h4>
                          <IoArrowForward className='text-black text-2xl cursor-pointer' />
                        </div>
                      </div>
                    </div>
                    <div className='max-w-[295px] border-borderCustom2 border-[#1E1E1E] bg-white rounded-[12px]'>
                      <Image src='assets/designer3.svg' alt='Image' width={295} height={315} className='rounded-[12px]' />
                      <div className='p-3.5'>
                        <h3 className='text-[#64748B] text-[12px] md:text-[14px] font-normal leading-[18px]'>UI UX Designer</h3>
                        <h2 className='text-[16px] md:text-[20px] leading-[25px] font-black my-1.5'>Usman Zafar</h2>
                        <div className='w-full flex items-center justify-between gap-1.5'>
                          <h4 className='text-[#64748B] text-[12px] md:text-[14px] leading-[18px] font-normal'>4 years experinece</h4>
                          <IoArrowForward className='text-black text-2xl cursor-pointer' />
                        </div>
                      </div>
                    </div>
                    <div className='max-w-[295px] border-borderCustom2 border-[#1E1E1E] bg-white rounded-[12px]'>
                      <Image src='assets/designer3.svg' alt='Image' width={295} height={315} className='rounded-[12px]' />
                      <div className='p-3.5'>
                        <h3 className='text-[#64748B] text-[12px] md:text-[14px] font-normal leading-[18px]'>UI UX Designer</h3>
                        <h2 className='text-[16px] md:text-[20px] leading-[25px] font-black my-1.5'>Usman Zafar</h2>
                        <div className='w-full flex items-center justify-between gap-1.5'>
                          <h4 className='text-[#64748B] text-[12px] md:text-[14px] leading-[18px] font-normal'>4 years experinece</h4>
                          <IoArrowForward className='text-black text-2xl cursor-pointer' />
                        </div>
                      </div>
                    </div>
                </div>
              )}
          </div>
        </div>

      </div>
  )
}

export default FindRightExpert