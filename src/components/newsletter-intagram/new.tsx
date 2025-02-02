import Image from "next/image";
export default function Newsletter() {
    return (
      <div className="absolute lg:h-[754px] lg:w-[1924px] top-[4600px] lg:top-[1813px] flex flex-col gap-[70px] py-[100px] px-[300px]">
        <div className="absolute w-[640px] lg:w-[760px] h-[165px] top-[500px] lg:top-[100px] left-[50px] lg:left-[582px]">
          <div className="absolute top-[100px] font-roboto font-medium text-[29px] lg:text-[50px] leading-[58.59px] text-center">
          <h2>Or Subscribe to Our Newsletter</h2>
          </div>
          <div className="w-[91px] h-[32px] absolute top-[233px] left-[325px] lg:left-[650px] px-[16px] gap-[10px]">
          <button className="">
            SUBMIT
            <div className="w-[91px] border-[2px] border-solid border-black"></div>
          </button>
          </div>
          <div className="w-[643px] h-[32px] absolute top-[233px]">
           <input type="text" 
           placeholder="Email Address..."
           className=""/>
           <div className="w-[321px] lg:w-[643px] top-[32px] border-[2px] border-solid border-black"></div>
          </div>
        </div>
        <div className="w-[1324px] h-[319px]">
          <div className="absolute top-[800px] lg:top-[400px] left-1 lg:left-[451px]">
            <h2 className="font-roboto font-medium text-[23px] lg:text-[50px] leading-[58.59px] text-center">Follow products and discounts on Instagram</h2>
          </div>
          <div className="w-[1324px] h-[200px] absolute top-[900px] lg:top-[500px] left-[150px] lg:left-[300px] flex flex-row gap-[35px] lg:flex lg:gap-[24px]">
            <Image 
            src="/Image (5).png"
            alt=""
            width={200}
            height={200}
            />
            <Image 
            src="/Image (4).png"
            alt=""
            width={200}
            height={200}
            />
            <Image src="/Image (2).png"
            alt=""
            width={200}
            height={200}
            />
            <Image src="/Image (1).png"
            alt=""
            width={200}
            height={200}
            />
            <Image src="/Image (3).png"
            alt=""
            width={200}
            height={200}
            />
            <Image src="/Image (7).png"
            alt=""
            width={200}
            height={200}
            />
          </div>
        </div>
      </div>
    );
  }
  