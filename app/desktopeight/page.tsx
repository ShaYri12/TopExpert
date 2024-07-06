'use client'
import React, { useState } from "react";
import {
  Box,
  Card,
  Button,
  Group,
  Text,
  Title,
  Avatar,
  Checkbox,
  Flex,
  Image,
} from "@mantine/core";
import classes from "./DesktopEight.module.css";
import { IconArrowLeft} from "@tabler/icons-react";
import { IoIosArrowDown } from "react-icons/io";

const DesktopEight = () => {
    const [selectedCountry, setSelectedCountry] = useState('+92'); // Default country code
    const [dropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown visibility
    
    const handleCountryChange = (countryCode: any) => {
      setSelectedCountry(countryCode);
      setDropdownOpen(false); // Close dropdown after selection
    };
  
    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen); // Toggle dropdown visibility
    };
    
  return (
    <Box mb="100px" mt="30px">
      <div className="shadow-custom-black max-w-lg mx-auto">
        <Card
          padding="0px"
          bg={"#FFFCF8"}
          radius={0}
          bd={"1px solid black"}
          className="shadow-custom-black max-w-lg mx-auto"
        >
          <Flex
            justify="space-between"
            p={20}
            pb={23}
            align="center"
            mb={4}
            className="border-b-[1px] border-[#E4E4E7]"
          >
            <Button variant="default" radius="40px" className={classes.button}>
              <IconArrowLeft width="13px" stroke="3px" />
              Back
            </Button>
            <Group gap={8}>
              <Avatar src="/assets/jamesbond.svg" alt="User Avatar" />
              <Text fw={700} size="14px" lh="17.85px">
                James Bond
              </Text>
            </Group>
          </Flex>
          <Card
            p={20}
            pb={37}
            className="border-b-[1px] flex flex-col gap-[23px] border-[#E4E4E7]"
          >
            <div className="flex flex-col gap-[23px]">
                <Flex justify={"space-between"} gap={7}>
                <Box className="flex flex-col gap-[7px]">
                    <Title size="20px" fw={800} lh="25.5px">
                    Career Guidance (30 Mins)
                    </Title>
                    <Text color="#71717A" size="14px" fw={400} lh={"17.85px"}>Video Meeting • 30 Mins</Text>
                </Box>
                <Flex justify="space-between" align="center" bg={"#FDF6EA"} gap={4} px={13} py={10} bd={"1px solid #28231A"} className="rounded-[30px]">
                    <Text size="16px" fw={700}>
                    $55
                    </Text>
                </Flex>
              </Flex>
            
              <Card
                px={15}
                py={14}
                radius="4px"
                bg={"#FED7AA"}
                className="border border-[#000000] border-b-[4px]"
              >
                <Flex justify="space-between" align="center">
                  <Group gap={9}>
                    <img width={"21px"} height={"21px"} src="/assets/calendar2.svg" />
                    <Text size="14px" fw={600} lh={"17.85px"}>Fri, 2 Feb • 1:30 AM - 2:00 AM <span className="font-[400]">(GMT +05:00)</span></Text>
                  </Group>
                  <img width={"19px"} height={"19px"} src="/assets/edit.svg" />
                </Flex>
              </Card>
              </div>
            <div className="flex flex-col gap-[19px]">
              <Box className="flex flex-col gap-[14px]">
                <Text fw={600} size="14px" lh="17.85px">Your Name</Text>
                <input type="text" placeholder="Type here" className={classes.input}/>
              </Box>
              <Box className="flex flex-col gap-[14px]">
                <Text fw={600} size="14px" lh="17.85px">Email</Text>
                <input type="email" placeholder="Type here" className={classes.input}/>
              </Box>
              <Box className="flex flex-col gap-[14px]">
                <Text fw={600} size="14px" lh="17.85px">What is the call about?</Text>
                <input type="text" placeholder="Type here" className={classes.input}/>
              </Box>
              <Box className="flex flex-col gap-[14px]">
                <Text fw={600} size="14px" lh="17.85px">Phone Number</Text>
                <Flex align="center" gap="xs">
                    <div className="relative">
                    {/* Clickable flag image to toggle dropdown */}
                    <div className="flex items-center rounded-[6px] border border-[#D4D4D8] bg-[#FFFFFF] h-[56px] px-[7px] cursor-pointer" onClick={toggleDropdown}>
                        <Image src="/assets/pakflag.svg" alt="Pakistan Flag" className="w-4 h-4 mr-8" />
                        <IoIosArrowDown size={"14px"} className={`ml-2 z-50 absolute right-[7px] transition-transform transform ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
                    </div>
                    {/* Dropdown menu */}
                    {dropdownOpen && (
                        <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 mt-1 rounded-md shadow-lg z-10">
                        <div className="py-1">
                            <div
                            className="flex items-center px-3 py-2 cursor-pointer hover:bg-gray-100"
                            onClick={() => handleCountryChange('+92')}
                            >
                            <Image src="/assets/pakflag.svg" alt="Pakistan Flag" className="w-4 h-4 mr-2" />
                            </div>
                            {/* Add more dropdown items for other countries */}
                            <div
                            className="flex items-center px-3 py-2 cursor-pointer hover:bg-gray-100"
                            onClick={() => handleCountryChange('+1')}
                            >
                            <Image src="/assets/usflag.svg" alt="US Flag" className="w-4 h-4 mr-2" />
                            </div>
                            {/* Add more dropdown items for other countries */}
                        </div>
                        </div>
                    )}
                    </div>
                    {/* Input with dynamic placeholder */}
                    <input
                    type="tel" // Use type="tel" for phone numbers
                    placeholder={selectedCountry}
                    className={classes.input} // Adjust as per your styling
                    />
                </Flex>
                <Checkbox fw={400} size="14px" lh="17.85px" mt={2} mb={5} label="Receive booking details on phone" />
                </Box>
              <Box className="flex flex-col gap-[14px] font-[600] text-[14px] lh-[17.85px]">
                <Text fw={600} size="14px" lh="17.85px">Discount Code</Text>
                <Flex gap="xs">
                  <input type="text" placeholder="Type here" className={classes.input}/>
                  <button type="button" className="bg-[#FDBA74] text-[#1E1E1E] text-[16px] lh-[20.4px] font-[700] rounded-[6px] h-full px-[30px] py-[20px]">Apply</button>
                </Flex>
              </Box>
              <Card
                radius="6px"
                px={22}
                py={23}
                bg={"#F4E2C3"}
                className="border border-[#000000] border-b-[3px]"
              >
                <Flex justify="space-between" align="center" >
                  <Box className="flex  flex-col gap-[10px]">
                    <Text fw={700} size="16px" lh={"20.4px"}>Get Session recording</Text>
                    <Text fw={400} size="14px" lh={"17.85px"}>
                      $10 | Session recording to help you retain your learnings
                    </Text>
                  </Box>
                  <Button variant="filled" color="#000000" bd={"1px solid #000000"} bg={"#FFFFFF"} p={0} radius={"50px"} className={classes.buttonAdd}><img src="/assets/add-square.svg"/> Add</Button>
                </Flex>
              </Card>
            </div>
          </Card>
          <Flex justify="space-between" gap={9} p={20} align="center">
            <Text px={14} py={19} color="#1E1E1E" size="16px" fw={700} lh={"20.4px"} className="border border-[#000000] rounded-[50px]">
              $37/mo
            </Text>
            <Button variant="filled" px={14} py={19} bg={"#FB923C"} size="16px" fw={700} lh={"20.4px"} color="#FFFFFF" w={"100%"} h={"100%"} bd={"1px solid #000000"} radius={50}>Confirm & Pay</Button>
          </Flex>
        </Card>
      </div>
    </Box>
  );
};

export default DesktopEight;
