import Image from 'next/image';
import React from 'react';

const OneStopShop = () => {
  return (
    <div className='bg-white py-[78px] px-3 2xl:px-[100px]'>
      <div className='max-w-[1400px] mx-auto flex items-center lg:flex-row flex-col justify-between gap-5'>
        <div className='pt-[50px]'>
          <h1 className='text-[28px] leading-[40px] md:text-[45px] md:leading-[57px] max-w-[422px] font-normal capitalize'>
            Your <span className='font-black'>one-stop shop </span>
            {/* <Image src='/assets/one-step.svg' alt='Image' width={79} height={54} />{' '} */}
             for all your <span className='font-black'>expert needs</span>
          </h1>
          <p className='text-[14px] md:text-[16px] leading-[24px] md:leading-[30px] font-normal max-w-[512px] mt-[21px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare venenatis semper. Quisque facilisis nisi ac viverra lobortis. Vivamus porta justo justo Lorem ipsum dolor sit amet.</p>
        </div>
        <div className='flex gap-3 md:gap-[50px] flex-col md:flex-row'>
          <div>
            <div className='shadow-custom bg-white w-[191px] md:w-[274px] h-[148px] md:h-[214px] flex items-center justify-center rounded-[12px] mb-3'>
              <Image src='/assets/one-step-img1.svg' alt='Image' width={162} height={224} className='-mt-8 w-[113px] md:w-[162px] h-[155px] md:h-[224px]' />
            </div>
            <h2 className='text-[18px] md:text-[22.43px] leading-[28.6px] font-bold'>Designers</h2>
            <h3 className='text-[14px] md:text-[17.45px] leading-[22.25px] font-normal mt-1'>2345 available</h3>
          </div>

          <div className='md:mt-[130px] mt-[-30px] md:ml-0 ml-[150px]'>
            <div className='shadow-custom bg-white w-[191px] md:w-[274px] h-[148px] md:h-[214px] flex items-center justify-center rounded-[12px] mb-3'>
              <Image src='/assets/one-step-img2.svg' alt='Image' width={162} height={224} className='-mt-10 w-[113px] h-[155px] md:w-[162px] md:h-[224px]' />
            </div>
            <h2 className='text-[18px] md:text-[22.43px] leading-[28.6px] font-bold'>Developers</h2>
            <h3 className='text-[14px] md:text-[17.45px] leading-[22.25px] font-normal mt-1'>2345 available</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneStopShop;
