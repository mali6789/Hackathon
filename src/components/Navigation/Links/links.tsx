import Link from "next/link"

export default function NavbarLinks(){
    return(
        <div className="bg-white lg:h-[74px] w-[440px] lg:w-full flex justify-between lg:items-center py-[14px] px-[20px] md:px-[50px] lg:px-[300px]" style={{ boxShadow: '1px 1px 0px 0px #E1E3E5' }}>
             <div className="h-[15px] flex gap-[20px] lg:gap-[32px] font-inter text-[14px] font-medium leading-[15.4px] text-left">
                 <Link className="text-[#636270] hover:text-[#007580]" href={"/"}>Home</Link>
                 <Link className="text-[#636270]" href={"#"}>Shop</Link>
                 <Link className="text-[#636270] hover:text-[#007580]" href={"/product"}>Product</Link>
                 <Link className="text-[#636270]" href={"#"}>Pages</Link>
                 <Link className="text-[#636270] hover:text-[#007580]" href={"/about"}>About</Link>
                 <Link href={"/contact-us"} className="text-[#636270] hover:text-[#007580] lg:hidden">Contact</Link>
                 <Link href={"/faqs"} className="text-[#636270] hover:text-[#007580] lg:hidden">Faqs</Link>
             </div>
             <div className="hidden lg:flex gap-[8px] h-[15px] font-inter text-[14px] font-medium leading-[15.4px]">
                <Link className="text-[#636270] font-[400]" href={"/contact-us"}>Contact:</Link>
                <Link className="text-[#272343]" href={"/contact-us"}>(808) 555-0111</Link>
             </div>
        </div>
    )
}