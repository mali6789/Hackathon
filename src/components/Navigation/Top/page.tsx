import Link from "next/link";
import Image from "next/image";
export default function NavbarTop() {
    return (
   <div>
    <div className="bg-[#272347] max-w-[1920px] h-[45px] flex justify-between px-[300px] py-[14px]">
       <div className="flex gap-2">
            <Image
            src="/Group.png" 
            alt=""
            width={16}
            height={16}
            />
          <div className="text-[#FFFFFF] w-[231px] h-[14px] font-normal text-[13px] leading-[14.3px]">
             Free shipping on all orders over $50
          </div>
       </div>
       <div className="h-[17px] flex gap-[24px] opacity-[0.7] text-[#FFFFFF]">
          <div className="flex gap-[6px] items-center w-[37px] h-[17px]">
             <div className="w-[24px] h-[17px] font-inter text-[13px] font-normal leading-[16.9px] text-center">Eng</div>
               <Image
               src="/Vector.png"
               alt=""
               width={7}
               height={4}
               />
          </div>
          <Link href={"/faqs"} className="w-[30px] h-[17px] font-inter text-[13px] font-normal leading-[16.9px] text-center">Faqs</Link>
          <div className="flex gap-[6px] w-[87px] h[17px]  text-white">
                <Image
                src={"/alert-circle 1.png"}
                alt=""
                width={16}
                height={16}/>
              <div className="w-[65px] h-[17px] font-inter text-[13px] font-normal leading-[16.9px] text-center">Need Help</div>
          </div>
       </div>
    </div>
   </div>
    );
  }