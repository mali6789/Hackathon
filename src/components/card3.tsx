import React from 'react'
import Image from 'next/image'

interface Card3Props {
    title: string;
    description: string;
    Imagesrc: string;
}
const Card3 = (props: Card3Props) => {
    const  {title, description, Imagesrc} = props
  return (
    <div className="absolute= w-[309.45px] h-[244px] top-[996px] left-[973px] p-[48px] grid gap-[10px]">
        <div className="w-[213.45px] h-[148px] grid gap-[12px] text-[#007580]">
            <Image 
            src={Imagesrc}
            alt="" 
            width={24}
            height={24}
            />
         <h4 className="font-clash-display font-normal text-[20px] leading-[28px]">{title}</h4>
          <p className="font-satoshi font-normal text-[16px] leading-[24px]">{description}</p>
        </div>
    </div>
  )
}

export default Card3