import React from "react";
import { Button } from "@mantine/core";
import classes from "@/app/components/HeaderMegaMenu.module.css";

const page = () => {
  return (
    <div className="sticky top-0">
      <div className="flex h-[900px] w-screen gap-3 overflow-hidden">
        <div className="h-[900px] min-w-[30%] grid gap-3 grid-rows-2">
          <div className="w-full h-[500px] overflow-hidden">
            <img
              src="/assets/login1.jpeg"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="w-full max-h-[450px] overflow-hidden">
            <img
              src="/assets/login4.jpeg"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="h-[900px] w-full grid gap-3 grid-rows-[34%_66%]">
          <div className="w-full  overflow-hidden">
            <img
              src="/assets/login2.jpeg"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="py-[8%] w-full h-full flex flex-col justify-center items-center bg-white text-center max-h-[600px] overflow-hidden">
            <div>
              <h1 className="text-[34px] font-bold px-[15%] py-8">
                No task too big, no skill too{" "}
                <span className="font-normal">small</span>, Find your{" "}
                <span className="font-normal">perfect</span> pro
              </h1>
              <p className="text-[16px] leading-[21px]">
                Let's <span className="font-bold">Hire</span> someone
              </p>
            </div>
            <div className="space-y-3 py-10 flex flex-col">
              <div>
                <Button
                  variant="default"
                  radius={"35px"}
                  className={classes.button}
                >
                  Continue with Google
                </Button>
              </div>
              <div>
                <Button
                  variant="default"
                  radius={"35px"}
                  className={classes.button}
                >
                  Continue with Facebook
                </Button>
              </div>
              <div>
                <Button
                  variant="default"
                  radius={"35px"}
                  className={classes.button}
                >
                  Continue with Email
                </Button>
              </div>
            </div>

            <div>
              <p className="text-[14px] text-slate-400 leading-[20px] px-[15%]">
                By signing up you agree to LOGO Terms of Service and Privacy
                Policy. You'll get updates at your email.
              </p>
              <p className="text-[14px] text-slate-400 leading-[20px] px-[15%]">
                Already have an account?
                <span className="cursor-pointer text-orange-500">Log in</span>
              </p>
            </div>
          </div>
        </div>

        <div className="h-[900px] min-w-[30%] grid gap-3 grid-rows-[34%_66%]">
          <div className="w-full overflow-hidden">
            <img
              src="/assets/login3.jpeg"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="w-full overflow-hidden">
            <img
              src="/assets/login5.jpeg"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-3 mt-3 h-[300px]">
        <div className="min-w-[30%] h-full overflow-hidden">
          <img
            src="/assets/login6.jpeg"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="min-w-[30%] h-full overflow-hidden">
          <img
            src="/assets/login7.jpeg"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-full h-full overflow-hidden">
          <img
            src="/assets/login8.jpeg"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
