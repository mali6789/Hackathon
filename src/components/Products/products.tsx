import Link from "next/link";

export default function FeatureProduct() {
    return (
      //Main container for Featured Products section
    <div className="absolute h-[461px] top-[1270px]">

          {/* Title for Featured Products */}
         <div className="h-[44px] px-[300px] font-inter text-[32px] leading-[35.2px] text-left text-[#272343]">
         Featured Products
         </div>
         {/* Product Card 1 */}
         <div className="w-[312px] h-[377px] absolute top-[84px] left-[300px]">
           {/* Product Image and Tag */}
           <div>
             <img src="/Image (1).png"/>
             <div className="w-[49px] h-[26px] absolute top-[20px] left-[20px] rounded-[4px] px-[10px] py-[6px] gap-[10px] bg-[#01AD5A]">
                <div className="font-inter text-[13px] font-medium leading-[14.3px] text-left text-white">New</div>
             </div>
           </div>
           <div className="absolute top-[329px] left-[268px]">
             <img src="Add Cart (1).png"/>
           </div>
            {/* Product Name and Price */}
           <div className="w-[256px] h-[51px] absolute top-[326px] grid gap-[10px]">
             <div className="font-inter text-[16px] font-normal leading-[20.8px] text-left">Library Stool Chair</div>
              <div className="gap-[4px] font-inter text-[18px] leading-[19.8px]">$20</div>
           </div>
         </div>

         <div className="w-[312px] h-[377px] absolute top-[84px] left-[636px]">
           <div>
             <Link href={"/single"}><img src="/Image (2).png"/></Link>
             <div className="w-[49px] h-[26px] absolute top-[20px] left-[20px] rounded-[4px] px-[10px] py-[6px] gap-[10px] bg-[#F5813F]">
                <div className="font-inter text-[13px] font-medium leading-[14.3px] text-left text-white">Sales</div>
             </div>
           </div>
           <div className="absolute top-[329px] left-[268px]">
             <img src="Add Cart.png"/>
           </div>
           <div className="w-[256px] h-[51px] absolute top-[326px] grid gap-[10px]">
             <div className="font-inter text-[16px] font-normal leading-[20.8px] text-left">Library Stool Chair</div>
              <div className="gap-[4px] font-inter text-[18px] leading-[19.8px]">$20</div>
           </div>
         </div>

         <div className="w-[312px] h-[377px] absolute top-[84px] left-[972px]">
           <div>
             <img src="/Image (3).png"/>
           </div>
           <div className="absolute top-[329px] left-[268px]">
             <img src="Add Cart.png"/>
           </div>
           <div className="w-[256px] h-[51px] absolute top-[326px] grid gap-[10px]">
             <div className="font-inter text-[16px] font-normal leading-[20.8px] text-left">Library Stool Chair</div>
              <div className="gap-[4px] font-inter text-[18px] leading-[19.8px]">$20</div>
           </div>
         </div>
         
         <div className="w-[312px] h-[377px] absolute top-[84px] left-[1308px]">
           <div>
             <img src="/Image.png"/>
           </div>
           <div className="absolute top-[329px] left-[268px]">
             <img src="Add Cart.png"/>
           </div>
           <div className="w-[256px] h-[51px] absolute top-[326px] grid gap-[10px]">
             <div className="font-inter text-[16px] font-normal leading-[20.8px] text-left">Library Stool Chair</div>
              <div className="gap-[4px] font-inter text-[18px] leading-[19.8px]">$20</div>
           </div>
         </div>
    </div>
    );
  }
  