import React from "react";
import { Button, Input } from "@mantine/core";
import classes from "../components/HeaderMegaMenu.module.css";

const DashboardTopbar = () => {
  return (
    <div>
      <div className="bg-white p-5 hidden md:flex justify-between items-center w-full ">
        <div className="space-y-[7px]">
          <p className="text-[14px]">Saturday, November 18</p>
          <p className="text-[20px] font-[700]">Good afternoon, Usman</p>
        </div>
        <div className="flex gap-5 items-center">
          <Input
            placeholder="Search Something..."
            radius="35px"
            className="h-full outline-none rounded-full border border-black "
            leftSection={<img src="/assets/search-normal.svg" alt="" />}
            rightSection={
              <img
                src="/assets/search.svg"
                alt=""
                className="mr-3 cursor-pointer"
              />
            }
          />

          <Button
            variant="default"
            radius={"35px"}
            className={`${classes.simpleButton} flex items-center gap-3`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.832 6.66663C17.2127 6.66663 18.332 5.54734 18.332 4.16663C18.332 2.78591 17.2127 1.66663 15.832 1.66663C14.4513 1.66663 13.332 2.78591 13.332 4.16663C13.332 5.54734 14.4513 6.66663 15.832 6.66663Z"
                fill="#22C55E"
                stroke="#22C55E"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.83203 10.8334H9.9987"
                stroke="#1E1E1E"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.83203 14.1666H13.332"
                stroke="#1E1E1E"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.668 1.66663H7.5013C3.33464 1.66663 1.66797 3.33329 1.66797 7.49996V12.5C1.66797 16.6666 3.33464 18.3333 7.5013 18.3333H12.5013C16.668 18.3333 18.3346 16.6666 18.3346 12.5V8.33329"
                stroke="#1E1E1E"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Notifications
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardTopbar;
