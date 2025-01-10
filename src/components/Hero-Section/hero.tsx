import Image from "next/image"
export default function HeroSection(){
    return(
        <section className="h-[850px] relative">
            <div className="m-w-[557px]">
             <div className="absolute top-[229px] left-[370px] text-[#272343] font-inter text-[14px] font-normal leading-[14px] tracking-[0.12em]">
                WELCOME TO CHAIRY
             </div>
             <div className="w-[557px] h-[198px] absolute top-[267px] left-[370px] text-[#272343] font-inter text-[60px] font-bold leading-[66px]">
               Best Furniture
               Collection for your
               interior.
             </div>
             <button className="flex items-center absolute top-[514px] left-[370px] w-[171px] h-[52px] rounded-[8px] px-[24px] py-[14px] gap-[20px] bg-[#029FAE]">
                  <div className="w-[79px] h-[18px] text-white font-inter text-[16px] leading-[17.6px] text-center">Shop Now</div>
                  <Image src="/Right 24px.svg" 
                  alt="" 
                  width={24}
                  height={24}/>
             </button>
            </div>
            <div className="absolute top-[115px] left-[1077px]">
                  <Image 
                  src="/Product Image.png" 
                  alt="" 
                  width={434}
                  height={584}/>
             </div>
        </section>
    )
}