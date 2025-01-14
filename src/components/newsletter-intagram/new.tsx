export default function Newsletter() {
    return (
      <div className="absolute h-[754px] w-[1924px] top-[1813px] grid gap-[70px] py-[100px] px-[300px]">
        <div className="absolute w-[760px] h-[165px] top-[100px] left-[582px]">
          <div className="absolute top-[100px] font-roboto font-medium text-[50px] leading-[58.59px] text-center">
          <h2>Or Subscribe to Our Newsletter</h2>
          </div>
          <div className="w-[91px] h-[32px] absolute top-[233px] left-[650px] px-[16px] gap-[10px]">
          <button className="">
            SUBMIT
            <div className="w-[91px] border-[2px] border-solid border-black"></div>
          </button>
          </div>
          <div className="w-[643px] h-[32px] absolute top-[233px]">
           <input type="text" 
           placeholder="Email Address..."
           className=""/>
           <div className="w-[643px] top-[32px] border-[2px] border-solid border-black"></div>
          </div>
        </div>
        <div className="w-[1324px] h-[319px]">
          <div className="absolute top-[400px] left-[451px]">
            <h2 className="font-roboto font-medium text-[50px] leading-[58.59px] text-center">Follow products and discounts on Instagram</h2>
          </div>
          <div className="w-[1324px] h-[200px] absolute top-[500px] left-[300px] flex justify center gap-[24px]">
            <img src="/Image (5).png"/>
            <img src="/Image (4).png"/>
            <img src="/Image (2).png"/>
            <img src="/Image (1).png"/>
            <img src="/Image (3).png"/>
            <img src="/Image (7).png"/>
          </div>
        </div>
      </div>
    );
  }
  