import Image from "next/image"

export default function PopularProducts(){
    return(
        <div className="">
            {/*Popular Product 3*/}
            <div className="absolute w-[630px] h-[462px] sm:top-[3450px] lg:top-[1449px] sm:left-[180px] lg:left-[1295px] grid gap-[24px]">
                <Image src="/Photo.png" alt=""
                width={305}
                height={375}
                />
                <div className="w-[212px] h-[63px] grid gap-[8px] text-[#2A254B]">
                    <p className="font-inter font-normal text-[20px] leading-[28px]">The Dandy chair</p>
                    <p className="font-inter font-normal text-[18px] leading-[27px]">$99.00</p>
                </div>
            </div>
            {/*Popular Product 2*/}
            <div className="absolute w-[630px] h-[462px] sm:top-[2900px] lg:top-[1449px] sm:left-[180px] lg:left-[970px] grid gap-[24px]">
                <Image src="/Photo (1).png" alt="" 
                 width={305}
                 height={375}
                />
                <div className="w-[212px] h-[63px] grid gap-[8px] text-[#2A254B]">
                    <p className="font-inter font-normal text-[20px] leading-[28px]">The Dandy chair</p>
                    <p className="font-inter font-normal text-[18px] leading-[27px]">$99.00</p>
                </div>
            </div>
            {/*Popular Product 1*/}
            <div className="absolute w-[630px] h-[462px] sm:top-[2400px] lg:top-[1449px] lg:left-[320px] grid gap-[24px]">
                <Image src="/Large.png" alt="" 
                 width={630}
                 height={375}/>
                <div className="w-[212px] h-[63px] grid gap-[8px] text-[#2A254B]">
                    <p className="font-inter font-normal text-[20px] leading-[28px]">The Poplar suede sofa</p>
                    <p className="font-inter font-normal text-[18px] leading-[27px]">$99.00</p>
                </div>
            </div>
        </div>
    )
}