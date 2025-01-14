import Image from "next/image"
export default function SingleProductCard(){
    return(
        <div>
            <div className="absolute top-[1065px] left-[238px] w-[1447px] h-[409px]">
                <div className="flex gap-[948px]">
                    <p className="font-[Inter] font-bold text-[28px] leading-[33.89px] tracking-[20%] text-black">Featured Products</p>
                    <button className="w-[75px] h-[31px]">
                        <p className="font-[Inter] font-bold text-[18px] leading-[21.78px]">Veiw all</p>
                        <div className="w-[75px] h-[2px] absolute border-2 border-black"></div>
                    </button>
                </div>
                <div className="w-[270px] h-[306px] absolute top-[69px]">
                    <Image src="/Image (8).png"
                    alt=""
                    width={263}
                    height={263}
                    />
                    <div className="w-[141px] h-[21px] flex">
                        <p className="font-inter text-[16px] font-normal leading-[20.8px] text-left absolute top-[280px] text-[#272343]">Library Stool Chair</p>
                        <p className="font-inter text-[16px] font-normal leading-[20.8px] absolute left-[235px] top-[280px]">$99</p>
                    </div>
                </div>

                <div className="w-[270px] h-[306px] absolute top-[69px] left-[300px]">
                    <Image src="/Image (1).png"
                    alt=""
                    width={263}
                    height={263}
                    />
                    <div className="w-[141px] h-[21px] flex">
                        <p className="font-inter text-[16px] font-normal leading-[20.8px] text-left absolute top-[280px] text-[#272343]">Library Stool Chair</p>
                        <p className="font-inter text-[16px] font-normal leading-[20.8px] absolute left-[235px] top-[280px]">$99</p>
                    </div>
                </div>

                <div className="w-[270px] h-[306px] absolute top-[69px] left-[600px]">
                    <Image src="/Image (7).png"
                    alt=""
                    width={263}
                    height={263}
                    />
                    <div className="w-[141px] h-[21px] flex">
                        <p className="font-inter text-[16px] font-normal leading-[20.8px] text-left absolute top-[280px] text-[#272343]">Library Stool Chair</p>
                        <p className="font-inter text-[16px] font-normal leading-[20.8px] absolute left-[235px] top-[280px]">$99</p>
                    </div>
                </div>

                <div className="w-[270px] h-[306px] absolute top-[69px] left-[900px]">
                    <Image 
                    src="/Image (3).png"
                    alt=""
                    width={263}
                    height={263}/>
                    <div className="w-[141px] h-[21px] flex">
                        <p className="font-inter text-[16px] font-normal leading-[20.8px] text-left absolute top-[280px] text-[#272343]">Library Stool Chair</p>
                        <p className="font-inter text-[16px] font-normal leading-[20.8px] absolute left-[235px] top-[280px]">$99</p>
                    </div>
                </div>

                <div className="w-[270px] h-[306px] absolute top-[69px] left-[1200px]">
                    <Image src="/Image (4).png"
                    alt=""
                    width={263}
                    height={263}
                    />
                    <div className="w-[141px] h-[21px] flex">
                        <p className="font-inter text-[16px] font-normal leading-[20.8px] text-left absolute top-[280px] text-[#272343]">Library Stool Chair</p>
                        <p className="font-inter text-[16px] font-normal leading-[20.8px] absolute left-[235px] top-[280px]">$99</p>
                    </div>
                </div>
            </div>
        </div>
    )
}