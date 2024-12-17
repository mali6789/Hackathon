import Link from "next/link"

export default function NavbarMiddle() {
    return (
      <div className="w-full h-[84px] py-[20px] px-[300px] bg-[#F0F2F3] flex justify-between">
        <div className="w-[166px] h-[40px]"><img src="/Logo.png" alt="" /></div>
        <Link href={"/chart"}><img src="/User Links.png" alt="" /></Link>
      </div>
    );
  }