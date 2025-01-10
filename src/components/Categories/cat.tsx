import Image from "next/image"

export default function TopCategories() {
    return (
        <div className="h-[508px] absolute top-[1867px] left-[-148px]">
            <div className="min-w-[1920px] h-[44px] absolute left-[148px] px-[300px] text-[32px] leading-[35.5px] text-left text-[#272343]">
                Top Categories
            </div>
            <div className="w-[424px] h-[424px] absolute top-[84px] opacity-[20%]"></div>
            <div className="w-[424px] h-[424px] absolute top-[84px] left-[448px]">
                <div>
                    <Image src={"/image-4.png"} alt="Wing Chair" width={424} height={424} />
                    <div className="w-[424px] h-[85px] absolute top-[339px] rounded-br-[10px] rounded-bl-[10px] p-[20px] flex flex-col gap-[8px] bg-[#000000B2]">
                        <div className="f-['inter'] text-[20px] leading-[22px] text-white">Wing Chair</div>
                        <div className="f-['inter'] text-[14px] font-[400] leading-[15.4px] opacity-[70%] text-white">3,584 Products</div>
                    </div>
                </div>
            </div>

            <div className="w-[424px] h-[424px] absolute top-[84px] left-[896px]">
                <div>
                    <Image src="/image-5.png" alt="Wooden Chair" width={424} height={424} />
                    <div className="w-[424px] h-[85px] absolute top-[339px] rounded-br-[10px] rounded-bl-[10px] p-[20px] flex flex-col gap-[8px] bg-[#000000B2]">
                        <div className="f-['inter'] text-[20px] leading-[22px] text-white">Wooden Chair</div>
                        <div className="f-['inter'] text-[14px] font-[400] leading-[15.4px] opacity-[70%] text-white">157 Products</div>
                    </div>
                </div>
            </div>

            <div className="w-[424px] h-[424px] absolute top-[84px] left-[1344px]">
                <div>
                    <Image src="/image-7.png" alt="Desk Chair" width={424} height={424} />
                    <div className="w-[424px] h-[85px] absolute top-[339px] rounded-br-[10px] rounded-bl-[10px] p-[20px] flex flex-col gap-[8px] bg-[#000000B2]">
                        <div className="f-['inter'] text-[20px] leading-[22px] text-white">Desk Chair</div>
                        <div className="f-['inter'] text-[14px] font-[400] leading-[15.4px] opacity-[70%] text-white">154 Products</div>
                    </div>
                </div>
            </div>
            <div className="w-[424px] h-[424px] absolute top-[84px] left-[1792px] opacity-[20%]"></div>
        </div>
    )
}
