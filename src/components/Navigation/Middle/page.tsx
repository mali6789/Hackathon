import Link from "next/link"

export default function NavbarMiddle() {
    return (
      <div className="bg-white lg:h-[84px] lg:w-[1920px] lg:py-[20px] lg:px-[300px] lg:flex justify-between">
        <div className="h-[40px]"><img src="/Logo.png" alt="" /></div>
        <Link href={"/chart"}> <img src="/User Links.png" alt="" /></Link>
      </div>
    );
  }