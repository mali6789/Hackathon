import Image from "next/image"

export default function HotCategory(){
    return(
        <><div className="absolute w-[648px] h-[52px] top-[2914px] left-[-52px] font-['Roboto'] text-[34px] font-normal leading-[39.84px] text-center rotate-[-90deg]">
            EXPLORE NEW AND POPULAR STYLES
          </div>
        <div className="absolute w-[1320px] h-[648px] top-[2604px] left-[323px]">
            <Image src="/item-category 1.png"  alt="" width={648} height={648} className="absolute"/>
            <div className="absolute left-[1008px]">
                <img src="/item-category-hover 1.png" />
            </div>

            <div className="absolute left-[1008px] top-[336px]">
                <Image src="/item-category-hover 1.png" alt="" width={312} height={312}/>
            </div>

            <div className="absolute left-[672px] top-[336px]">
                <Image src="/item-category-2.png" alt="" width={312} height={312}/>
            </div>


            <div className="absolute left-[672px]">
                <Image src="/01.png" alt="" width={312} height={312}/>
            </div>
        </div></>
    )
}