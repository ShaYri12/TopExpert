import React from "react";
import { Sidebar } from "../components/Sidebar";
import DashboardTopbar from "../components/DashboardTopbar";
import { Button } from "@mantine/core";
import { FaArrowRight } from "react-icons/fa";

const DesktopSeven = () => {
  return (
    <div className="flex w-full bg-zinc-100">
      <Sidebar />
      <div className="w-full">
        <DashboardTopbar />

        <div className="m-4 flex flex-col md:flex-row gap-4">
          <div className="flex-1 bg-white rounded-[10px] p-[20px]">
            <div className="flex justify-between gap-4">
              <div>
                <h4 className="text-[16px] md:text-[18px] text-black font-[700]">
                  Launch Your page by 5th Feb
                </h4>
                <p className="text-[12px] md:text-[14px] text-black">
                  Get featured on our exclusive new launches page
                </p>
              </div>
              <img src="/assets/5.svg" alt="" />
            </div>

            <div className="mt-8 space-y-[22px]">
              <div className=" flex items-start gap-[10px]">
                <img src="/assets/colorCheck.svg" alt="" />
                <div className="space-y-[11px] ">
                  <h6 className="text-[12px] md:text-[14px] text-black  font-[700]">
                    Add availability
                  </h6>
                  <p className="text-[10px] md:text-[12px] text-black ">
                    Add your availability so your followers can select a slot
                  </p>
                  <Button
                    bg={"#F97316"}
                    variant="default"
                    className="text-[12px]"
                  >
                    Add Availability
                  </Button>
                </div>
              </div>

              <div className=" flex items-center gap-[10px]">
                <img src="/assets/tick-circle.svg" alt="" />
                <div className="space-y-[11px] ">
                  <h6 className="text-[12px] md:text-[14px] text-black  font-[700]">
                    Complete Your Profile
                  </h6>
                </div>
              </div>

              <div className=" flex items-center gap-[10px]">
                <img src="/assets/tick-circle.svg" alt="" />
                <div className="space-y-[11px] ">
                  <h6 className="text-[12px] md:text-[14px] text-black  font-[700]">
                    Create a service
                  </h6>
                </div>
              </div>

              <div className=" flex items-center gap-[10px]">
                <img src="/assets/tick-circle.svg" alt="" />
                <div className="space-y-[11px] ">
                  <h6 className="text-[12px] md:text-[14px] text-black  font-[700]">
                    Connect payout
                  </h6>
                </div>
              </div>

              <div className=" flex items-center gap-[10px]">
                <img src="/assets/tick-circle.svg" alt="" />
                <div className="space-y-[11px] ">
                  <h6 className="text-[12px] md:text-[14px] text-black  font-[700]">
                    Complete Your Profile
                  </h6>
                </div>
              </div>
            </div>
          </div>

          <div className=" bg-white rounded-[10px] p-[20px] space-y-[20px] min-w-[35%]">
            <h4 className="text-[14px] md:text-[18px] text-black font-[700]">
              Friend list
            </h4>

            <div className="w-full flex justify-between">
              <div className="flex gap-2">
                <img src="/assets/amanda.svg" alt="" />
                <div>
                  <h4 className="text-[14px] md:text-[18px] text-black leading-5 font-[700]">
                    Amanda
                  </h4>

                  <p className="text-[#64748B] text-[14px] md:text-[18px]">
                    @amanda089
                  </p>
                </div>
              </div>
              <img src="/assets/msg.svg" alt="" />
            </div>

            <div className="w-full flex justify-between">
              <div className="flex gap-2">
                <img src="/assets/amanda.svg" alt="" />
                <div>
                  <h4 className="text-[14px] md:text-[18px] text-black leading-5 font-[700]">
                    Amanda
                  </h4>

                  <p className="text-[#64748B] text-[14px] md:text-[18px]">
                    @amanda089
                  </p>
                </div>
              </div>
              <img src="/assets/msg.svg" alt="" />
            </div>

            <div className="w-full flex justify-between">
              <div className="flex gap-2">
                <img src="/assets/amanda.svg" alt="" />
                <div>
                  <h4 className="text-[14px] md:text-[18px] text-black leading-5 font-[700]">
                    Amanda
                  </h4>

                  <p className="text-[#64748B] text-[14px] md:text-[18px]">
                    @amanda089
                  </p>
                </div>
              </div>
              <img src="/assets/msg.svg" alt="" />
            </div>

            <div className="w-full flex justify-between">
              <div className="flex gap-2">
                <img src="/assets/amanda.svg" alt="" />
                <div>
                  <h4 className="text-[14px] md:text-[18px] text-black leading-5 font-[700]">
                    Amanda
                  </h4>

                  <p className="text-[#64748B] text-[14px] md:text-[18px]">
                    @amanda089
                  </p>
                </div>
              </div>
              <img src="/assets/msg.svg" alt="" />
            </div>

            <div className="w-full flex justify-between">
              <div className="flex gap-2">
                <img src="/assets/amanda.svg" alt="" />
                <div>
                  <h4 className="text-[14px] md:text-[18px] text-black leading-5 font-[700]">
                    Amanda
                  </h4>

                  <p className="text-[#64748B] text-[14px] md:text-[18px]">
                    @amanda089
                  </p>
                </div>
              </div>
              <img src="/assets/msg.svg" alt="" />
            </div>
          </div>
        </div>

        <div className="mx-4 flex flex-col md:flex-row gap-[20px]">
          <div className="md:w-[60%] grid grid-cols-2 gap-[20px]">
            <div className="bg-white p-[20px] rounded-[10px]">
              <img
                src="/assets/note-2.svg"
                alt=""
                className="p-2 md:p-4 border border-[#E2E8F0] rounded-[19px]"
              />

              <div className="my-3 md:my-5">
                <h4 className="text-[15px] md:text-[18px] font-[700]">
                  Request feature
                </h4>
                <p className="text-[13px] md:text-[16px]">
                  Share your feature request or feedback, we’re all ears
                </p>
              </div>

              <button className="border-b border-[#3F88EC] text-[13px] md:text-[16px] flex gap-2 items-center text-[#3F88EC]">
                Tell Me More <FaArrowRight />
              </button>
            </div>

            <div className="bg-white p-[20px]  rounded-[10px]">
              <img
                src="/assets/call-calling.svg"
                alt=""
                className="p-2 md:p-4 border border-[#E2E8F0] rounded-[19px]"
              />

              <div className="my-3 md:my-5">
                <h4 className="text-[15px] md:text-[18px] font-[700]">
                  Help centre
                </h4>
                <p className="text-[13px] md:text-[16px]">
                  Reach out to community, support or your personal assistant
                </p>
              </div>

              <button className="border-b border-[#3F88EC] flex gap-2 text-[13px] md:text-[16px] items-center text-[#3F88EC]">
                Tell Me More <FaArrowRight />
              </button>
            </div>
          </div>

          <div className="bg-white p-[20px] md:w-[40%] rounded-[10px]">
            <div className="mb-4">
              <h4 className="text-[15px] md:text-[18px] font-[700]">
                New Bookings
              </h4>
              <p className="text-[13px] md:text-[16px]">
                No Booking Right Now :)
              </p>
            </div>
            <div className="flex items-end justify-center md:justify-end">
              <img src="/assets/bookingMan.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopSeven;
