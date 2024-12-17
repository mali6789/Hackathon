export default function HeroSection(){
    return(
        <div className="w-full h-[850px] absolute top-[204px] left-[300px] bg-[#F0F2F3]">
           <div className="w-[557px] h-[337px] rounded-lg">
               <div className="text-[#272343] absolute top-[229px] left-[70px] font-inter text-[14px] font-normal leading-[14px] tracking-[0.12em] text-left"
               >WELCOME TO CHAIRY</div>
               <div className="w-[557px] h-[198px]  absolute top-[267px] left-[70px] text-[#272343] font-inter text-[60px] font-bold leading-[66px]"
               >Best Furniture
               Collection for your
               interior.</div>
               <button className="flex items-center absolute top-[514px] left-[70px] w-[171px] h-[52px] rounded-[8px] px-[24px] py-[14px] gap-[20px] bg-[#029FAE]">
                  <div className="w-[79px] h-[18px] text-white font-inter text-[16px] leading-[17.6px] text-center">Shop Now</div>
                  <div><img src="/Right 24px.svg" alt="" /></div>
               </button>
               <div className="absolute top-[115px] left-[777px]">
                  <img src="/Product Image.png" alt="" />
              </div>
           </div>
      </div>
    )
}