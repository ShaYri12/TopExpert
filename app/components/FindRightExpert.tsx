import Image from 'next/image'
import React from 'react'

const FindRightExpert = () => {
  return (
      <div className='bg-[#ECCC7B] w-full mt-14 relative py-36'>
        <Image src='/assets/hero-slider.svg' alt='Image' width={2000} height={150} className='absolute -top-11'/>
        <p className='text-[14px] leading-[17.85px] font-semibold text-center capitalize'>Get Personalized advice from top experts to your specific questions</p>
        <h2 className='text-[45px] leading-[57px] text-center max-w-[570px] mx-auto mt-4 capitalize'>Find The <span className='font-black'>right expert</span> in your <span className='font-black'>field</span> in minutes</h2>
        
        {/* Search */}
        <div className='mx-auto max-w-[927px] bg-white pl-6 pr-4 py-3 border-borderCustom1 border-[#1E1E1E] rounded-[56px] flex items-center justify-between'>
            <input type='search' placeholder='Search Expert' className='bg-transparent outline-none w-[85%] text-[18px] leading-[23px] font-normal'/>
            <button className='border-borderCustom border-[#1E1E1E] bg-white rounded-[35px] w-[110px] h-[47px]'>Search</button>
        </div>
    </div>
  )
}

export default FindRightExpert