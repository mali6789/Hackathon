import Image from "next/image";
export default function CompanyLogo() {
    return (
        <div className="hidden absolute w-[1321px] h-[139px] top-[1107px] left-[300px] lg:flex justify-between">
            <Image 
            src="/Logo (1).png" 
            alt="Company Logo"
            width={85}
            height={87}
            />

            <Image 
            src="/Logo (2).png" 
            alt="Company Logo"
            width={107}
            height={109}/>

            <Image 
            src="/Logo (3).png" 
            alt="Company Logo"
            width={135}
            height={139}/>

            <Image 
            src="/Logo (4).png" 
            alt="Company Logo"
            width={63}
            height={65}/>

            <Image 
            src="/Logo (5).png" 
            alt="Company Logo"
            width={98}
            height={101}/>

            <Image 
            src="/Logo (7).png" 
            alt="Company Logo"
            width={113}
            height={115}/>

            <Image 
            src="/Logo (8).png" 
            alt="Company Logo"
            width={84}
            height={87}/>
        </div>
    );
  }
  