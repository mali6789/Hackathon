import React from 'react'
import Image from 'next/image';

interface FaqsBoxProps {
    question: string;
    position?: string;
    top?: string;
    left?: string;
}
const card2 = (props:FaqsBoxProps) => {
    const {question, position} = props
  return (
    <div>
        <div className={`w-[648px] h-[170px] ${position}`}>
         <Image src="/Plus.png"  alt="" width={20} height={20} className="absolute top-[25px] lg:top-1 left-[440px] lg:left-[600px]" />
            <div className="w-[424px] h-[26px] top-[24px] left-[24px] absolute">
             <p className="font-inter font-bold text-[18px] leading-[26px] paragraph-[25.2px]">{question}</p>
            </div>
            <div className="w-[450px] lg:w-[600px] h-[72px] top-[74px] left-[24px] absolute">
             <p className="font-inter font-normal text-[16px] leading-[24px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
            </div>
        </div>
    </div>
  )
}

export default card2