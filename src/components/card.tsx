import React from 'react'
import Image from 'next/image';
interface FeaturedProductProps {
    Imagesrc : string;
    tag?: string;
    tagColor?: string;
    AddToCardsrc: string;
    position?: string;
    top?: string;
    left?: string;
}

const FeatureCard = (props: FeaturedProductProps) => {
    const {Imagesrc, tag, tagColor, AddToCardsrc, position} = props;
    return(
        <div className={`w-[312px] h-[377px] absolute ${position}`}>
           {/* Product Image and Tag */}
           <div>
             <Image src={Imagesrc} alt="" width={312} height={312}/>
             <div className={`w-[49px] h-[26px] absolute top-[20px] left-[20px] rounded-[4px] px-[10px] py-[6px] gap-[10px] ${tagColor}`}>
                <div className="font-inter text-[13px] font-medium leading-[14.3px] text-left text-white">{tag}</div>
             </div>
           </div>
           <div className="absolute top-[329px] left-[268px]">
             <Image src={AddToCardsrc} alt="" width={100} height={100}/>
           </div>
            {/* Product Name and Price */}
           <div className="w-[256px] h-[51px] absolute top-[326px] grid gap-[10px]">
             <div className="font-inter text-[16px] font-normal leading-[20.8px] text-left">Library Stool Chair</div>
              <div className="gap-[4px] font-inter text-[18px] leading-[19.8px]">$20</div>
           </div>
        </div>
    )
}

export default FeatureCard;