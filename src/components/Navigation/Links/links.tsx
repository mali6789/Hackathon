import Link from "next/link"

export default function NavbarLinks(){
    return(
        <div className="bg-white h-[40px] lg:h-[74px] lg:w-full lg:flex justify-between items-center lg:py-[14px] lg:px-[300px]" style={{ boxShadow: '1px 1px 0px 0px #E1E3E5' }}>
             <div className="h-[15px] flex gap-[32px] font-inter text-[14px] font-medium leading-[15.4px] text-left">
                 <Link className="text-[#636270] hover:text-[#007580]" href={"/"}>Home</Link>
                 <Link className="text-[#636270]" href={"#"}>Shop</Link>
                 <Link className="text-[#636270] hover:text-[#007580]" href={"/product"}>Product</Link>
                 <Link className="text-[#636270]" href={"#"}>Pages</Link>
                 <Link className="text-[#636270] hover:text-[#007580]" href={"/about"}>About</Link>
             </div>
             <div className="flex gap-[8px] h-[15px] font-inter text-[14px] font-medium leading-[15.4px]">
                <Link className="text-[#636270] font-[400]" href={"/contact-us"}>Contact:</Link>
                <Link className="text-[#272343]" href={"/contact-us"}>(808) 555-0111</Link>
             </div>
        </div>
    )
}