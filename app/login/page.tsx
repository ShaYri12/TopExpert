import React from "react";
import { Button } from "@mantine/core";
import classes from "@/app/components/HeaderMegaMenu.module.css";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <div className="bg-[#1A1E28]">

    <div className="w-full  mx-auto max-w-[1440px]">
      <div className="flex w-full gap-[0.8rem] relative">
          <div className="absolute inset-0 h-[200px] bg-custom-gradient1"></div>

        <div className="flex flex-col gap-2.5">
          <Image src='assets/login1.svg' alt="Image" width={404} height={457} />
          <Image src='assets/login4.svg' alt="Image" width={404} height={456} />
        </div>

        <div className="flex flex-col gap-2.5">
            <Image src="/assets/login2.svg" alt="Image" width={609} height={301}/>
             <div className="bg-white w-full py-10 flex items-center flex-col justify-center text-center">
                <h2 className="capitalize max-w-[390px] font-black text-[34px] leading-[43px] text-[#1A1E28]">No task too big, no skill too <span className="font-medium">small</span>, Find your <span className="font-medium">perfect</span> pro</h2>
                <h4 className="text-[#1A1E28] text-[16px] leading-[20px] capitalize font-normal mt-5">Let's <span className="font-bold border-b-2 border-[#F97316] pb-1">Hire</span> someone</h4>

                <div className="mt-9 mb-16 flex flex-col gap-2.5">
                  <button className="min-w-[416px] h-[56px] rounded-[55px] border-borderCustom1 border-[#1E1E1E] text-[16px] leading-[20px] flex items-center gap-1 justify-center">
                    <Image src='/assets/login-google.svg' alt='Google Icon' width={20} height={20} className="mr-2.5"/> Continue with  <span className="font-bold"> Google </span>
                  </button>
                  <button className="min-w-[416px] h-[56px] rounded-[55px] border-borderCustom1 border-[#1E1E1E] text-[16px] leading-[20px] flex items-center gap-1 justify-center">
                    <Image src='/assets/login-facebook.svg' alt='Google Icon' width={20} height={20} className="mr-2.5"/> Continue with  <span className="font-bold"> Facebook </span>
                  </button>
                  <button className="min-w-[416px] h-[56px] rounded-[55px] border-borderCustom1 border-[#1E1E1E] text-[16px] leading-[20px] flex items-center gap-1 justify-center">
                    <Image src='/assets/login-sms.svg' alt='Google Icon' width={20} height={20} className="mr-2.5"/> Continue with  <span className="font-bold"> Email </span>
                  </button>
                </div>

                <p className="text-[#334155] text-[14px] leading-[20px] tracking-[-0.02em] font-normal max-w-[366px]">By signing up you agree to LOGO Terms of Service and Privacy Policy. You'll get updates at your email.</p>
                <h2 className="text-[#334155] text-[14px] leading-[20px] tracking-[-0.02em] mt-4">Already have an account? <Link href='/login' className="text-[#F97316] font-bold">Log in</Link></h2>
             </div>
        </div>

        <div className="flex items-center flex-col gap-2.5">
          <Image src="/assets/login3.svg" alt="Image" width={404} height={301}/>
          <Image src="/assets/login5.svg" alt="Image" width={404} height={613}/>
        </div>
      </div>

      <div className="flex items-center gap-2.5 mt-2.5 relative">
          <div className="absolute inset-0 top-8 bg-custom-gradient"></div>
          <Image src="/assets/login6.svg" alt="Image" width={405} height={303}/>
          <Image src="/assets/login7.svg" alt="Image" width={405} height={303}/>
          <Image src="/assets/login8.svg" alt="Image" width={611} height={303}/>
      </div>
    </div>
    
    </div>
  );
};

export default Login;
