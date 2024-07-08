"use client"
import Image from 'next/image';
import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className='w-full border-b border-[#D4D4D4] pb-[23px] mb-[23px]'>
      <div className='flex justify-between' onClick={onClick }>
        <h2 className='text-[18px] leading-[26px] font-bold text-[#1E1E1E]'>{question}</h2>
        <div className='mt-0.5'>
          <Image src={isOpen ? '/assets/Minus.svg' : '/assets/add.svg'} alt={isOpen ? 'Close' : 'Open'} width={39} height={39} />
        </div>
      </div>
      {isOpen && <p className='pt-[15px] text-[16px] leading-[24px] font-normal'>{answer}</p>}
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = [
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare venenatis semper. Quisque facilisis nisi ac viverra lobortis.'
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare venenatis semper. Quisque facilisis nisi ac viverra lobortis.'
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare venenatis semper. Quisque facilisis nisi ac viverra lobortis.'
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare venenatis semper. Quisque facilisis nisi ac viverra lobortis.'
    }
  ];

  return (
    <div className='pt-[85px] w-full max-w-[1440px] mx-auto flex md:flex-row flex-col md:gap-2 gap-10 justify-between'>
      <div className='max-w-[533px] mx-3'>
        <h4 className='text-[14px] leading-[17.85px] font-semibold'>Frequently asked Question</h4>
        <h1 className='text-[28px] leading-[38px] md:text-[45px] md:leading-[57px] font-normal py-[16px]'>Got <span className='font-black'>Questions?</span> We've Got <span className='font-black'>Answers!</span></h1>
        <p className='text-[14px] md:text-[16px] leading-[21px] md:leading-[24px] font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare venenatis semper. Quisque facilisis nisi ac viverra lobortis. </p>
      </div>
      <div className='max-w-[620px] w-full px-3'>
        {faqItems.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;