import Image from "next/image"

export default function HotCategory(){
    return(
        <><div className="absolute w-[648px] h-[52px] sm:top-[6000px] lg:top-[2914px] sm:left-[17px] lg:left-[-52px] font-['Roboto'] sm:text-[25px] lg:text-[34px] font-normal leading-[39.84px] text-center lg:rotate-[-90deg]">
            EXPLORE NEW AND POPULAR STYLES
          </div>
        <div className="absolute sm:w-[400px] lg:w-[1320px] h-[648px] sm:top-[6100px] lg:top-[2604px] sm:left-[120px] lg:left-[323px]">
            <Image src="/item-category 1.png"  alt="Product" width={648} height={648} className="absolute"/>
            <div className="absolute left-[1008px]">
                <Image src="/item-category-hover 1.png" alt="Product" width={312} height={312}/>
            </div>

            <div className="absolute sm:left-[60px] lg:left-[1008px] sm:top-[450px]  lg:top-[336px]">
                <Image src="/item-category-hover 1.png" alt="Product" width={312} height={312}/>
            </div>

            <div className="absolute sm:left-[60px] lg:left-[672px] sm:top-[850px]  lg:top-[336px]">
                <Image src="/item-category-2.png" alt="Product" width={312} height={312}/>
            </div>


            <div className="absolute sm:top-[1250px] lg:top-0 sm:left-[60px] lg:left-[672px]">
                <Image src="/01.png" alt="Product" width={312} height={312}/>
            </div>
        </div></>
    )
}