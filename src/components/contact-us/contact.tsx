import Image from "next/image"
export default function Contact(){
    return (
        <section>
         <div className="absolute top-[301px] left-[733px] font-'Poppins' font-semibold text-[#000000] text-[36px] leading-[54px]">
            Get In Touch With Us
         </div>
         <div className="w-[644px] h-[48px] absolute top-[362px] left-[638px] font-'Poppins' font-normal text-[#9F9F9F] text-[16px] leading-[24px] text-center">
             For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
         </div>
         <div className="w-[393px] h-[537px] absolute top-[492px] left-[431px]">
            <Image src="/Vector (3).png" width={22} height={27} alt="contact-us" className="absolute top-[46px] left-[54px]"/>
            <div className="absolute top-[58px] left-[106px] font-'Poppins' font-[500] text-[#000000] text-[24px] leading-[36px]">Address</div>
            <div className="absolute top-[96px] left-[106px] w-[212px] h-[57px] font-'Inter' font-normal text-[#000000] text-[16px] leading-[19px]">
                236 5th SE Avenue, New York NY10000, United States
            </div>
            <Image src="/bxs_phone.png" width={30} height={30} alt="contact-us" className="absolute top-[211px] left-[54px]"/>
            <div className="absolute top-[208px] left-[106px] font-'Poppins' font-[500] text-[#000000] text-[24px] leading-[36px]">Phone</div>
            <div className="absolute top-[244px] left-[106px] w-[212px] h-[57px] font-'Inter' font-normal text-[#000000] text-[16px] leading-[19px]">
             Mobile: +(84) 546-6789 Hotline: +(84) 456-6789
            </div>
            <Image src="/bi_clock-fill.png" width={23} height={23} alt="contact-us" className="absolute top-[340px] left-[54px]"/>
            <div className="absolute top-[334px] left-[106px] font-'Poppins' font-[500] text-[#000000] text-[24px] leading-[36px]">Working Time</div>
            <div className="absolute top-[370px] left-[106px] w-[212px] h-[57px] font-'Inter' font-normal text-[#000000] text-[16px] leading-[19px]">
            Monday-Friday: 9:00 - 22:00
            Saturday-Sunday: 9:00 - 21:00
            </div>
         </div>

         <div className="w-[623px] h-[923px] absolute top-[424px] left-[854px]">
            <div className="w-[530px] h-[121px] absolute top-[119px] left-[53px]">
                <div className="font-'Poppins' font-[500] text-[#000000] text-[16px] leading-[24px]">Your name</div>
                <input placeholder="Abc" className="absolute top-[35px] w-[528px] h-[75px] rounded-[10px] border border-[#9F9F9F]"></input>
            </div>
            <div className="w-[530px] h-[121px] absolute top-[276px] left-[53px]">
                <div className="font-'Poppins' font-[500] text-[#000000] text-[16px] leading-[24px]">Email address</div>
                <input placeholder="Abc@def.com" className="absolute top-[35px] w-[528px] h-[75px] rounded-[10px] border border-[#9F9F9F]"></input>
            </div>
            <div className="w-[530px] h-[121px] absolute top-[433px] left-[53px]">
                <div className="font-'Poppins' font-[500] text-[#000000] text-[16px] leading-[24px]">Subject</div>
                <input placeholder="This is an optional" className="absolute top-[35px] w-[528px] h-[75px] rounded-[10px] border border-[#9F9F9F]"></input>
            </div>
            <div className="w-[530px] h-[121px] absolute top-[590px] left-[53px]">
                <div className="font-'Poppins' font-[500] text-[#000000] text-[16px] leading-[24px]">Message</div>
                <input placeholder="Hi! i’d like to ask about" className="absolute top-[35px] w-[528px] h-[120px] rounded-[10px] border border-[#9F9F9F]"></input>
            </div>
            <button className="w-[237px] h-[55px] absolute top-[805px] left-[59px] rounded-[5px] bg-[#029FAE]">
                <div className="font-'Poppins' font-normal text-white text-[16px] leading-[24px]">Submit</div>
            </button>
         </div>
         <div className="w-[1320px] h-[270px] top-[1347px] left-[300px] flex justify-between pt-[100px] pb-[100px] absolute">
            <div className="w-[337px] h-[70px] flex gap-[10px] bg-white">
                <Image src="/trophy 1.png" width={60} height={60} alt="contact-us"/>
                <div className="flex flex-col gap-[2px]">
                 <div className="font-'Poppins' font-semibold text-[#242424] text-[25px] leading-[37.7px]">High Quality</div>
                 <div className="font-'Poppins' font-[500] text-[#898989] text-[20px] leading-[30px]">crafted from top materials</div>
                </div>
            </div>

            <div className="w-[337px] h-[70px] flex gap-[10px] bg-white">
                <Image src="/guarantee.png" width={60} height={60} alt="contact-us"/>
                <div className="flex flex-col gap-[2px]">
                 <div className="font-'Poppins' font-semibold text-[#242424] text-[25px] leading-[37.7px]">Warranty Protection</div>
                 <div className="font-'Poppins' font-[500] text-[#898989] text-[20px] leading-[30px]">Over 2 years</div>
                </div>
            </div>

            <div className="w-[337px] h-[70px] flex gap-[10px] bg-white">
                <Image src="/customer.png" width={60} height={60} alt="contact-us"/>
                <div className="flex flex-col gap-[2px]">
                 <div className="font-'Poppins' font-semibold text-[#242424] text-[25px] leading-[37.7px]">24 / 7 Support</div>
                 <div className="font-'Poppins' font-[500] text-[#898989] text-[20px] leading-[30px]">Dedicated support</div>
                </div>
            </div>
         </div>
         </section>
    )
}