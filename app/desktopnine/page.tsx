import React from "react";
import { Sidebar } from "../components/Sidebar";
import classes from "../components/HeaderMegaMenu.module.css";
import DashboardTopbar from "../components/DashboardTopbar";
import BottomMenu from "../components/DashboardBottomMenu";
import { DashboardHeader as Header } from "../components/DashboardHeader";

interface CardProps {
  imgSrc: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ imgSrc, title, description }) => {
  return (
    <div className={`bg-white p-7 border border-black ${classes.cardSM}`}>
      <img src={imgSrc} alt={title} />
      <p className="font-bold text-[18px] pt-3 pb-1">{title}</p>
      <p className="font-normal text-[16px] flex text-gray-500">
        {description}
      </p>
    </div>
  );
};

const DesktopSeven: React.FC = () => {
  return (
    <div>
      <div className="flex w-full">
        <Sidebar />

        <div className="w-full bg-[#FDF6EA]">
          <DashboardTopbar />
          <Header />
          <div className="md:hidden block fixed bottom-0 w-full">
            <BottomMenu />
          </div>
          <div className=" m-4 mb-20 md:mb-4">
            <div className="w-full p-7 border bg-white border-black">
              <p className="font-bold text-[18px]">Settings</p>
              <p className="font-bold text-[16px] text-gray-500">
                Usman Zafar,{" "}
                <span className="font-normal">usmanzafar089@gmail.com</span>
              </p>
            </div>

            <div className="grid md:grid-cols-3 py-5 gap-5">
              <Card
                imgSrc="/assets/PersonalInfo.svg"
                title="Personal Info"
                description="Provide personal details and how we can reach you"
              />
              <Card
                imgSrc="/assets/safety.svg"
                title="Privacy and sharing"
                description="Manage your personal data, connected services, and data sharing settings"
              />
              <Card
                imgSrc="/assets/security.svg"
                title="Login & Security"
                description="Update your password and secure your account"
              />
              <Card
                imgSrc="/assets/Billing.svg"
                title="Billing"
                description="Manage billing, view invoices, and change your plan."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopSeven;
