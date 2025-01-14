import Link from "next/link"

export default function NavbarLinks(){
    return(
        <div className="bg-white h-[74px] max-w-[1920px] flex justify-between items-center py-[14px] px-[300px]" style={{ boxShadow: '1px 1px 0px 0px #E1E3E5' }}>
             <div className="h-[15px] flex gap-[32px] font-inter text-[14px] font-medium leading-[15.4px] text-left">
                 <Link className="text-[#636270] hover:text-[#007580]" href={"/"}>Home</Link>
                 <Link className="text-[#636270]" href={"#"}>Shop</Link>
                 <Link className="text-[#636270] hover:text-[#007580]" href={"/product"}>Product</Link>
                 <Link className="text-[#636270]" href={"#"}>Pages</Link>
                 <Link className="text-[#636270] hover:text-[#007580]" href={"/about"}>About</Link>
             </div>
             <div className="flex gap-[8px] h-[15px] font-inter text-[14px] font-medium leading-[15.4px]">
                <div className="text-[#636270] font-[400]">Contact:</div>
                <div className="text-[#272343]">(808) 555-0111</div>
             </div>
        </div>
    )
}