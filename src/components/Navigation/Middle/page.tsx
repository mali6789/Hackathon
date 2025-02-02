import Link from "next/link"
import Image from "next/image";

export default function NavbarMiddle() {
    return (
      <div className="bg-white lg:h-[84px] w-[440px] lg:w-full py-[20px] px-[40px] lg:px-[300px] flex justify-between">
        <div><Image src="/Logo.png" alt="Product"  width={166} height={40}/></div>
        <Link href={"/chart"}> <Image src="/User Links.png" alt="Product" width={120} height={44} /></Link>
      </div>
    );
  }