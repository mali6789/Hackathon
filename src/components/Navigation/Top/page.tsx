import Link from "next/link";
import Image from "next/image";
export default function NavbarTop() {
    return (
   <div>
    <div className="hidden bg-[#272347]  lg:w-full h-[45px] lg:h-[45px] lg:flex justify-between lg:px-[300px] py-[14px]">
       <div className="flex gap-2">
            <Image
            src="/Group.png" 
            alt=""
            width={16}
            height={16}
            className="w-[12px] h-[12px] lg:w-[16px] lg:h-[16px]"
            />
          <div className="text-[#FFFFFF] lg:w-[231px] lg:h-[14px] lg:font-normal text-[10px] lg:text-[13px] leading-[14.3px]">
             Free shipping on all orders over $50
          </div>
       </div>
       <div className="flex gap-[12px] lg:gap-[24px] text-white">
          <div className="flex gap-[6px] items-center w-[37px] h-[17px]">
             <div className="font-inter text-[13px] font-normal leading-[16.9px]">Eng</div>
               <Image src="/Vector.png" alt="" width={7} height={4} />
          </div>
          <Link href={"/faqs"} className="font-inter lg:text-[13px] font-normal leading-[16.9px]">Faqs</Link>
          <div className="flex gap-[6px] w-[87px] h[17px]  text-white">
               <Image src={"/alert-circle 1.png"} alt="" width={16} height={16}/>
              <div className="font-inter text-[13px] font-normal leading-[16.9px]">Need Help</div>
          </div>      
       </div>
    </div>
    </div>
    );
  }