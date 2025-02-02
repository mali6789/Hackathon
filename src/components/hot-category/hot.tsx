import Image from "next/image"

export default function HotCategory(){
    return(
        <><div className="absolute w-[400px] md:w-[500px] lg:w-[648px] h-[52px] top-[4700px] lg:top-[2914px] left-[0px] md:left-[0px] lg:left-[-52px] font-['Roboto'] sm:text-[25px] lg:text-[34px] font-normal leading-[39.84px] text-center lg:rotate-[-90deg]">
            EXPLORE NEW AND POPULAR STYLES
          </div>
        <div className="absolute w-[480px] md:w-[500px] lg:w-[1320px] h-[648px] top-[4800px] lg:top-[2604px] left-[0px] lg:left-[323px]">
            <Image src="/item-category 1.png"  alt="Product" width={648} height={648}/>
            <div className="absolute left-[40px] hidden md:hidden lg:block lg:left-[1008px] top-[450px] md:top-[550px] lg:top-0">
                <Image src="/item-category-hover 1.png" alt="Product" width={312} height={312}/>
            </div>

            <div className="absolute left-[80px] md:left-[90px] lg:left-[1008px] top-[500px] md:top-[550px] lg:top-[336px]">
                <Image src="/item-category-hover 1.png" alt="Product" width={312} height={312}/>
            </div>

            <div className="absolute left-[80px] md:left-[90px] lg:left-[672px] top-[850px] md:top-[920px] lg:top-[336px]">
                <Image src="/item-category-2.png" alt="Product" width={312} height={312}/>
            </div>


            <div className="absolute top-[1200px] md:top-[1290px] lg:top-0 left-[80px] md:left-[90px] lg:left-[672px]">
                <Image src="/01.png" alt="Product" width={312} height={312}/>
            </div>
        </div></>
    )
}