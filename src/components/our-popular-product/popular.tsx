export default function PopularProducts(){
    return(
        <div>
            {/*Popular Product 3*/}
            <div className="absolute w-[630px] h-[462px] top-[1449px] left-[1295px] grid gap-[24px]">
                <img src="/Photo.png" alt="" />
                <div className="w-[212px] h-[63px] grid gap-[8px] text-[#2A254B]">
                    <p className="font-inter font-normal text-[20px] leading-[28px]">The Dandy chair</p>
                    <p className="font-inter font-normal text-[18px] leading-[27px]">$99.00</p>
                </div>
            </div>
            {/*Popular Product 2*/}
            <div className="absolute w-[630px] h-[462px] top-[1449px] left-[970px] grid gap-[24px]">
                <img src="/Photo (1).png" alt="" />
                <div className="w-[212px] h-[63px] grid gap-[8px] text-[#2A254B]">
                    <p className="font-inter font-normal text-[20px] leading-[28px]">The Dandy chair</p>
                    <p className="font-inter font-normal text-[18px] leading-[27px]">$99.00</p>
                </div>
            </div>
            {/*Popular Product 1*/}
            <div className="absolute w-[630px] h-[462px] top-[1449px] left-[320px] grid gap-[24px]">
                <img src="/Large.png" alt="" />
                <div className="w-[212px] h-[63px] grid gap-[8px] text-[#2A254B]">
                    <p className="font-inter font-normal text-[20px] leading-[28px]">The Poplar suede sofa</p>
                    <p className="font-inter font-normal text-[18px] leading-[27px]">$99.00</p>
                </div>
            </div>
        </div>
    )
}