import React from 'react'
import Image from 'next/image'; 
interface TopCardProps {
    Imagesrc: string;
    name: string;
    numberofproducts: number | string;
    position?: string;
    top?: string;
    left?: string;
}
export const TopCard = (prop: TopCardProps) => {
    const {Imagesrc, name, numberofproducts, position} = prop;
  return (
    <div className={`w-[424px] h-[424px] absolute ${position}`}>
        <Image src={Imagesrc} alt="Wooden Chair" width={424} height={424} />
        <div className="w-[424px] h-[85px] absolute top-[339px] rounded-br-[10px] rounded-bl-[10px] p-[20px] flex flex-col gap-[8px] bg-[#000000B2]">
         <div className="f-['inter'] text-[20px] leading-[22px] text-white">{name}</div>
         <div className="f-['inter'] text-[14px] font-[400] leading-[15.4px] opacity-[70%] text-white">{numberofproducts}</div>
        </div>
    </div>
  )
}
export default TopCard;