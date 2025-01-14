import Image from "next/image"
export default function SingleProductPage(){
    return (
        <div className="w-full h-auto">
            <div className="absolute top-[335px] left-[260px]">
                <Image 
                src="/Image (10).png" 
                alt="" 
                width={675}
                height={607}
                />
            </div>
            <div className="w-[541px] h-[132px] top-[335px] left-[1044px] absolute">
                <p className="font-inter font-bold text-[60px] leading-[66px] text-[#272343]">Library Stool 
                    Chair</p>
            </div>
            <div>
             <button className="w-[144px] h-[44px] top-[499px] left-[1044px] absolute bg-[#029FAE] rounded-full">
                <p className="font-inter font-semibold text-[20px] leading-[22px] text-white">$20.00 USD</p>
             </button>
            </div>
            <div className="w-[521px] h-[1px] top-[581px] left-[1046px] absolute bg-[#D9D9D9]"></div>
            <div className="absolute top-[618px] left-[1046px] w-[543px] h-[101px] text-[#272343] opacity-[0.6]">
                <p className="font-inter font-normal text-[22px] leading-[33px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing
                </p>
            </div>
            <div>
                <button className="w-[212px] h-[63px] top-[751px] left-[1046px] rounded-[8px] py-[14px] px-[24px] flex gap-[9px] absolute bg-[#029FAE]">
                        <Image src="/Buy 2.png"
                        alt=""
                        width={29}
                        height={29}
                        />
                        <p className="font-inter font-semibold text-[20px] leading-[22px] text-white">Add To cart</p>
                </button>
            </div>
        </div>
    )
}