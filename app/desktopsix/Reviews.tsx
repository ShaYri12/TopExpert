import React from 'react';
import { Card, Text, Title, Avatar, Group, Badge, Box, Flex } from '@mantine/core';

const reviews = [
  {
    text: "Just finished my coaching session with Matt, and it was transformative for my data analyst journey. He introduced me to tools to showcase my portfolio and enhance the presentation of my SQL code. Both tools will dramatically improve the professionalism and appeal of my work. Matt's expertise and tailored advice were invaluable. I highly recommend his sessions for anyone in the data field.",
    user: "Asfandyar",
    rating: "5",
    score: "5.0",
    avatar: "/assets/reviewimg.svg",
  },
  {
    text: "Just finished my coaching session with Matt, and it was transformative for my data analyst journey. He introduced me to tools to showcase my portfolio and enhance the presentation of my SQL code. Both tools will dramatically improve the professionalism and appeal of my work. Matt's expertise and tailored advice were invaluable. I highly recommend his sessions for anyone in the data field.",
    user: "Sara",
    rating: "5",
    score: "5.0",
    avatar: "/assets/reviewimg.svg",
  },
  {
    text: "Just finished my coaching session with Matt, and it was transformative for my data analyst journey. He introduced me to tools to showcase my portfolio and enhance the presentation of my SQL code. Both tools will dramatically improve the professionalism and appeal of my work. Matt's expertise and tailored advice were invaluable. I highly recommend his sessions for anyone in the data field.",
    user: "John",
    rating: "5",
    score: "5.0",
    avatar: "/assets/reviewimg.svg",
  },
  {
    text: "Just finished my coaching session with Matt, and it was transformative for my data analyst journey. He introduced me to tools to showcase my portfolio and enhance the presentation of my SQL code. Both tools will dramatically improve the professionalism and appeal of my work. Matt's expertise and tailored advice were invaluable. I highly recommend his sessions for anyone in the data field.",
    user: "Emily",
    rating: "5",
    score: "5.0",
    avatar: "/assets/reviewimg.svg",
  },
  {
    text: "Just finished my coaching session with Matt, and it was transformative for my data analyst journey. He introduced me to tools to showcase my portfolio and enhance the presentation of my SQL code. Both tools will dramatically improve the professionalism and appeal of my work. Matt's expertise and tailored advice were invaluable. I highly recommend his sessions for anyone in the data field.",
    user: "Michael",
    rating: "5",
    score: "5.0",
    avatar: "/assets/reviewimg.svg",
  },
  {
    text: "Just finished my coaching session with Matt, and it was transformative for my data analyst journey. He introduced me to tools to showcase my portfolio and enhance the presentation of my SQL code. Both tools will dramatically improve the professionalism and appeal of my work. Matt's expertise and tailored advice were invaluable. I highly recommend his sessions for anyone in the data field.",
    user: "Linda",
    rating: "5",
    score: "5.0",
    avatar: "/assets/reviewimg.svg",
  },
];

const Reviews = () => {
  return (
    <Box mt={40}>
  <Flex direction="column" mb={20} gap={10}>
    <h3 className='md:text-[20px] text-[16px] font-[700] leading-[25.5px]'>
      Rating & Feedback
    </h3>
    <Flex gap={15} wrap="wrap">
      <div className="bg-[#FDF6EA] text-[14px] leading-[17.85px] border border-[#28231A] rounded-[30px] px-[13px] py-[10px]">
        <Group gap={4}>
          <Text color="black" fz={"14px"} fw={700}>5.0</Text>
          <Text color="black" fz={"14px"} fw={400}>(234 reviews)</Text>
        </Group>
      </div>
      <div className="bg-[#FDF6EA] text-[14px] leading-[17.85px] border border-[#28231A] rounded-[30px] px-[13px] py-[10px]">
        <Group gap={4}>
          <Text color="black" fz={"14px"} fw={700}>18</Text>
          <Text color="black" fz={"14px"} fw={400}>Testimonials</Text>
        </Group>
      </div>
    </Flex>
  </Flex>
  <Flex wrap="wrap" flex={1} gap="20px">
    {reviews.map((review, index) => (
      <Card
        key={index}
        shadow="sm"
        p={15}
        radius="md"
        withBorder
        className="flex flex-col flex-grow w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
      >
        <Text fw={400} mb={19} className='md:text-[14px] text-[12px] md:leading-[21px] leading-[18px]'>
          {review.text}
        </Text>
        <Flex justify="space-between" align="center">
          <Group gap={9} align="center">
            <Avatar src={review.avatar} alt="User avatar" radius="xl" />
            <div className='flex flex-col gap-[6px]'>
              <Text fw={700} className='md:text-[16px] text-[14px] md:leading-[20.4px] leading-[17.85px]'>{review.user}</Text>
              <div className='flex gap-[6px]'>
              <Group gap={4}>
                {[...Array(parseInt(review.rating))].map((_, starIndex) => (
                  <img
                    key={starIndex}
                    height="12px"
                    width="12px"
                    src="/assets/star2.svg"
                    alt="Star"
                  />
                ))}
              </Group>
              <Text className='md:text-[14px] text-[12px] md:leading-[17.85px] leading-[15.3px]'>{review.score}</Text>
              </div>
            </div>
          </Group>
          <img src="/assets/quote.svg" height="29px" width="29px" />
        </Flex>
      </Card>
    ))}
  </Flex>
</Box>

  );
};

export default Reviews;
