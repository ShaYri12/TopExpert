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
    <div className='w-full border-b border-black pb-[23px] mb-[23px]'>
      <div className='flex items-center justify-between' onClick={onClick}>
        <h2 className='text-[16px] md:text-[18px] leading-[26px] font-bold text-[#1E1E1E]'>{question}</h2>
        <div className='flex items-center'>
          <Image src={isOpen ? '/assets/Minus.svg' : '/assets/add.svg'} alt={isOpen ? 'Close' : 'Open'} width={39} height={39} />
        </div>
      </div>
      {isOpen && <p className='pt-[15px] text-[14px] md:text-[16px] leading-[24px] font-normal'>{answer}</p>}
    </div>
  );
};

const EarnMoreOnLogoName: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = [
    {
      question: 'Offer 1:1 sessions',
      answer: 'Mentorship sessions, consultations, discovery calls - do what you do best. We take care of everything else'
    },
    {
      question: 'Setup Priority DM in seconds',
      answer: 'Mentorship sessions, consultations, discovery calls - do what you do best. We take care of everything else'
    },
    {
      question: 'Host a webinar',
      answer: 'Mentorship sessions, consultations, discovery calls - do what you do best. We take care of everything else'
    },
    {
      question: 'Bundle your services',
      answer: 'Mentorship sessions, consultations, discovery calls - do what you do best. We take care of everything else'
    }
  ];

  return (
    <div className='w-full max-w-[1440px] mx-auto py-[100px] px-2 2xl:px-[100px] flex md:flex-row flex-col justify-between gap-[30px] items-center'>
      <div>
        <Image src='/assets/CreatorsEarnMoreOnLogoName.svg' alt='Image' width={525} height={477} />
      </div>
      <div>
        <h1 className='capitalize max-w-[425px] text-[28px] md:text-[45px] leading-[38px] md:leading-[57px] font-bold pb-[22px]'>Creators earn more on Logo name</h1>
        {/* FAQ */}
        <div className='max-w-[612px] w-full'>
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
    </div>
  );
};

export default EarnMoreOnLogoName;
