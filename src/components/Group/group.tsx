import Image from "next/image"

export default function Group(){
    return (
        <div>
            <div className="absolute w-[1320px] h-[244px] top-[996px] left-[300px] flex justify-center">
                {/* Group Card 3 */}
                <div className="absolute= w-[309.45px] h-[244px] top-[996px] left-[973px] p-[48px] grid gap-[10px]">
                    <div className="w-[213.45px] h-[148px] grid gap-[12px] text-[#007580]">
                        <Image 
                        src="/Delivery.png" 
                        alt="" 
                        width={24}
                        height={24}
                        />
                        <h4 className="font-clash-display font-normal text-[20px] leading-[28px]">Next day as standard</h4>
                        <p className="font-satoshi font-normal text-[16px] leading-[24px]">Order before 3pm and get your order the next day as standard</p>
                    </div>
                </div>
                {/* Group Card 3 */}
                <div className="absolute= w-[309.45px] h-[244px] top-[996px] left-[973px] p-[48px] grid gap-[10px]">
                    <div className="w-[213.45px] h-[148px] grid gap-[12px] text-[#007580]">
                        <Image src="/Checkmark--outline.png" alt="" 
                        width={24}
                        height={24}
                        />
                        <h4 className="font-clash-display font-normal text-[20px] leading-[28px]">Made by true artisans</h4>
                        <p className="font-satoshi font-normal text-[16px] leading-[24px]">Handmade crafted goods made with real passion and craftmanship</p>
                    </div>
                </div>
                {/* Group Card 2 */}
                <div className="absolute= w-[309.45px] h-[244px] top-[996px] left-[973px] p-[48px] grid gap-[10px]">
                    <div className="w-[213.45px] h-[148px] grid gap-[12px] text-[#007580]">
                        <Image src="/Purchase.png" alt="" 
                        width={24}
                        height={24}
                        />
                        <h4 className="font-clash-display font-normal text-[20px] leading-[28px]">Unbeatable prices</h4>
                        <p className="font-satoshi font-normal text-[16px] leading-[24px]">For our materials and quality you won’t find better prices anywhere</p>
                    </div>
                </div>
                {/* Group Card 1 */}
                <div className="absolute= w-[309.45px] h-[244px] top-[996px] left-[1310px] p-[48px] grid gap-[10px]">
                    <div className="w-[213.45px] h-[148px] grid gap-[12px] text-[#007580]">
                        <Image src="/Sprout.png" alt="" 
                        width={24}
                        height={24}/>
                        <h4 className="font-clash-display font-normal text-[20px] leading-[28px]">Recycled packaging</h4>
                        <p className="font-satoshi font-normal text-[16px] leading-[24px]">We use 100% recycled to ensure our footprint is more manageable</p>
                    </div>
                </div>
            </div>
        </div>
    )
}