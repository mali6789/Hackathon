import Link from "next/link"
import Image from "next/image";

export default function NavbarMiddle() {
    return (
      <div className="bg-white lg:h-[84px] lg:w-[1920px] py-[20px] sm:px-[50px] lg:px-[300px] flex justify-between">
        <div className="h-[40px]"><Image src="/Logo.png" alt="Product"  width={166} height={40}/></div>
        <Link href={"/chart"}> <Image src="/User Links.png" alt="Product" width={120} height={44} /></Link>
      </div>
    );
  }