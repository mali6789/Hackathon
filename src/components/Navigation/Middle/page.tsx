import Link from "next/link"

export default function NavbarMiddle() {
    return (
      <div className="bg-white h-[84px] max-w-[1920px] py-[20px] px-[300px] flex justify-between">
        <div className="h-[40px]"><img src="/Logo.png" alt="" /></div>
        <Link href={"/chart"}> <img src="/User Links.png" alt="" /></Link>
      </div>
    );
  }