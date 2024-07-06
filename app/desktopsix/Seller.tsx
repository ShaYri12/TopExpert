import React from 'react'
import { Card, Text, ActionIcon, Group, } from '@mantine/core'
import { IconMail, IconBrandFacebook, IconBrandInstagram, IconBrandTiktok, IconStarFilled } from '@tabler/icons-react'

const links = [
  { link: '#', label: '📧', icon: IconMail },
  { link: '#', label: '📘', icon: IconBrandFacebook },
  { link: '#', label: '📸', icon: IconBrandInstagram },
  { link: '#', label: '🎵', icon: IconBrandTiktok },
];

const Seller = () => {
  return (
    <div className="mt-[22px] flex lg:flex-row flex-col  bg-[#FED7AA] p-[10px] shadow-custom-black">
        <Card
          px="16px"
          py="20px"
          bg="#FDF6EA"
          className="w-[40%] lg:w-1/3 w-full flex flex-col gap-[10px] md:flex-row items-center"
        >
          <div className="flex w-[100%] items-start justify-between">
            <img
              width={"137px"}
              src="/assets/jamesbond.svg"
              alt="Profile picture of James Bond"
              className="rounded-full"
            />
            <div
              className="text=[12px] text-[#FFFFFF] border border-[#1E1E1E] font-[700] leading-[15.3px] flex gap-[5px] px-[10px] py-[6px] bg-[#10B981] rounded-[40px]"
              style={{ boxShadow: "-1px 2px 0px 0px #000000" }}
            >
              Verified <img src="/assets/verify.svg" alt="verify" />
            </div>
          </div>
          <div className="flex flex-col items-start space-y-2">
            <Text fw={700} fz="20px" lh={"25.5px"}>
              James Bond
            </Text>
            <Text color="#1E1E1E" fw={400} fz="16px" lh={"20.4px"}>
              I Broke Into Data With A Non-Technical Background. Let Me Help You
              Do The Same.
            </Text>
            <Group gap="10px" justify="flex-end" wrap="nowrap">
              <ActionIcon
                h="50px"
                w="50px"
                bg="#FFFFFF"
                color="#1E1E1E"
                radius="xl"
              >
                <IconMail style={{ height: "23px", color: "#000000" }} />
              </ActionIcon>
              <ActionIcon
                h="50px"
                w="50px"
                bg="#FFFFFF"
                color="#1E1E1E"
                radius="xl"
              >
                <svg
                  className="h-[18px] text-[#000000]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"></path>
                </svg>
              </ActionIcon>
              <ActionIcon
                h="50px"
                w="50px"
                bg="#FFFFFF"
                color="#1E1E1E"
                radius="xl"
              >
                <IconBrandInstagram
                  style={{ height: "22px", color: "#000000" }}
                />
              </ActionIcon>
              <ActionIcon
                h="50px"
                w="50px"
                bg="#FFFFFF"
                color="#1E1E1E"
                radius="xl"
              >
                <svg
                  className="h-[20px] text-[#000000]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M16 8.24537V15.5C16 19.0899 13.0899 22 9.5 22C5.91015 22 3 19.0899 3 15.5C3 11.9101 5.91015 9 9.5 9C10.0163 9 10.5185 9.06019 11 9.17393V12.3368C10.5454 12.1208 10.0368 12 9.5 12C7.567 12 6 13.567 6 15.5C6 17.433 7.567 19 9.5 19C11.433 19 13 17.433 13 15.5V2H16C16 4.76142 18.2386 7 21 7V10C19.1081 10 17.3696 9.34328 16 8.24537Z"></path>
                </svg>
              </ActionIcon>
            </Group>
          </div>
        </Card>

        <Card bg="transparent" padding="lg" className="flex flex-col gap-[30px] w-[60%] lg:w-2/3 w-full">
          <div className="flex flex-wrap gap-[10px] justify-between items-start">
            <div className="flex gap-[18px] flex-wrap">
              <div className="space-y-[6px] rounded-[3px] px-[26px] py-[11px] bg-[#FFF0DB] border border-[#B78F61] border-b-[2px] border-l-[2px]">
                <Text fw={400} fz="12px" lh={"15.3px"}>
                  TOP
                </Text>
                <Text fz="25px" fw={700} lh={"31.87px"}>
                  10%
                </Text>
              </div>
              <div className="space-y-[6px] rounded-[3px] px-[26px] py-[11px] bg-[#FFF0DB] border border-[#B78F61] border-b-[2px] border-l-[2px]">
                <Text fw={400} fz="12px" lh={"15.3px"}>
                  BOOKING
                </Text>
                <Text fz="25px" fw={700} lh={"31.87px"}>
                  93
                </Text>
              </div>
              <div className="flex items-center bg-white p-[2px]">
                <Text
                  className="h-[100%] w-[220px] flex items-center bg-[#EEB4A2]"
                >
                  <img
                    className="bg-[#FEE9E2] p-[15px] h-full object-contain"
                    src="/assets/star.svg"
                    alt="star"
                  />{" "}
                  <span className="flex flex-col p-[15px] fw-[700] text-[20px] leading-[25.5px]">
                    TOP RATED
                    <span className="fw-[400] text-[12px] leading-[15.3px]">
                      DATA
                    </span>
                  </span>
                </Text>
              </div>
            </div>
            <div className="flex items-center bg-[#FDF6EA] p-[10px] border border-[#000000] rounded-[36px] ">
                <Text display={"Flex"} className='items-center justify-center gap-[6px]' fz="14px" fw={600} lh={"17.85px"}>
                  <img height={"15px"} src="/assets/star2.svg" /> 5/5 <span className='font-[400]'>(5) </span>
                </Text>
              </div>
          </div>

          <div className='flex flex-col gap-[10px]'>
            <Text fw={700} fz="18px" lh={"22.95px"}>
              About Seller
            </Text>
            <Text fw={400} fz='16px' lh={"24px"}>
              From education, to sales, to operations, and eventually to data.
              Through my career highs and lows I've learned how to frame
              non-conventional backgrounds and identify transferable skills
              necessary to make the pivot.
            </Text>
            <Text fw={400} fz='16px' lh={"24px"}>
              I've worked as both a Business Analyst and a Data Analyst and love
              the work that I do. Let's work together to get you to the next stage
              in your career!
            </Text>
          </div>
        </Card>
      </div>
  )
}

export default Seller