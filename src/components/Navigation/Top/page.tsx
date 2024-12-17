import Link from "next/link";
export default function NavbarTop() {
    return (
    <div className="bg-[#272347] w-full h-[45px] flex justify-between px-[300px] py-[14px]">
       <div className="w-[255px] h-[16px] flex gap-2">
          <div>
            <img src="/Group.png" alt="" />
          </div>
          <div className="text-[#FFFFFF] w-[231px] h-[14px] font-normal text-[13px] leading-[14.3px]">
             Free shipping on all orders over $50
          </div>
       </div>
       <div className="w-[202px] h-[17px] flex gap-[24px] opacity-[0.7] text-[#FFFFFF]">
          <div className="flex gap-[6px] items-center w-[37px] h-[17px]">
             <div className="w-[24px] h-[17px] font-inter text-[13px] font-normal leading-[16.9px] text-center">Eng</div>
             <div className="w-[7px] h-[3.5px]"><img src="/Vector.png"/></div>
          </div>
          <Link href={"/faqs"} className="w-[30px] h-[17px] font-inter text-[13px] font-normal leading-[16.9px] text-center">Faqs</Link>
          <div className="flex gap-[6px] w-[87px] h[17px]  text-white">
             <div className="w-[16px] h-[16px] opacity-[70%]">
                <img src="/alert-circle 1.png" alt="" />
             </div>
              <div className="w-[65px] h-[17px] font-inter text-[13px] font-normal leading-[16.9px] text-center">Need Help</div>
          </div>
       </div>
    </div>
    );
  }