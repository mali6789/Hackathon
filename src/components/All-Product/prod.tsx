import Image from "next/image";

export default function AllProduct() {
    return (
      //Main container for Section
    <div>
       {/* Section #A */}
      <div className="absolute w-full h-[461px] top-[260px]">
       <div className="h-[44px] px-[300px] font-['Inter'] text-[32px] leading-[35.2px] text-left text-[#272343]">
        All Products
       </div>
       {/* Product Card 1 */}
       <div className="w-[312px] h-[377px] absolute top-[84px] left-[300px]">
         <div>
           <Image
           src="/Image (1).png"
           alt="Product Image 1"
           width={312}
           height={312}
           />
           <div className="w-[49px] h-[26px] absolute top-[20px] left-[20px] rounded-[4px] px-[10px] py-[6px] gap-[10px] bg-[#01AD5A]">
             <div className="font-['Inter'] text-[13px] font-medium leading-[14.3px] text-left text-white">New</div>
           </div>
         </div>
        <div className="absolute top-[329px] left-[268px]">
          <img src="/Add Cart (1).png"/>
        </div>
        <div className="w-[256px] h-[51px] absolute top-[326px] grid gap-[10px]">
          <div className="font-inter text-[16px] font-normal leading-[20.8px] text-left">Library Stool Chair</div>
          <div className="gap-[4px] font-inter text-[18px] leading-[19.8px]">$20</div>
        </div>
      </div>
      {/* Product Card 2 */}
         <div className="w-[312px] h-[377px] absolute top-[84px] left-[636px]">
           <div>
           <Image
           src={"/Image (2).png"}
           alt="Product Image 2"
           width={312}
           height={312}
           />
             <div className="w-[49px] h-[26px] absolute top-[20px] left-[20px] rounded-[4px] px-[10px] py-[6px] gap-[10px] bg-[#F5813F]">
                <div className="font-inter text-[13px] font-medium leading-[14.3px] text-left text-white">Sales</div>
             </div>
           </div>
           <div className="absolute top-[329px] left-[268px]">
             <img src="/Add Cart.png"/>
           </div>
           <div className="w-[256px] h-[51px] absolute top-[326px] grid gap-[10px]">
             <div className="font-inter text-[16px] font-normal leading-[20.8px] text-left">Library Stool Chair</div>
              <div className="gap-[4px] font-inter text-[18px] leading-[19.8px]">$20</div>
           </div>
         </div>
      {/* Product Card 3 */}
         <div className="w-[312px] h-[377px] absolute top-[84px] left-[972px]">
           <div>
           <Image
           src={"/Image (3).png"}
           alt="Product Image 1"
           width={312}
           height={312}
           />
           </div>
           <div className="absolute top-[329px] left-[268px]">
             <img src="/Add Cart.png"/>
           </div>
           <div className="w-[256px] h-[51px] absolute top-[326px] grid gap-[10px]">
             <div className="font-inter text-[16px] font-normal leading-[20.8px] text-left">Library Stool Chair</div>
              <div className="gap-[4px] font-inter text-[18px] leading-[19.8px]">$20</div>
           </div>
         </div>
      {/* Product Card 4 */}
         <div className="w-[312px] h-[377px] absolute top-[84px] left-[1308px]">
           <div>
             <Image
           src={"/Image.png"}
           alt="Product Image 1"
           width={312}
           height={312}
           />
           </div>
           <div className="absolute top-[329px] left-[268px]">
             <img src="/Add Cart.png"/>
           </div>
           <div className="w-[256px] h-[51px] absolute top-[326px] grid gap-[10px]">
             <div className="font-inter text-[16px] font-normal leading-[20.8px] text-left">Library Stool Chair</div>
              <div className="gap-[4px] font-inter text-[18px] leading-[19.8px]">$20</div>
           </div>
         </div>
         </div>
      {/* Section B */}
      <div className="absolute w-full h-[461px] top-[718px]">
            {/* Product Card 1 */}
         <div className="w-[312px] h-[377px] absolute top-[84px] left-[300px]">
           {/* Product Image and Tag */}
           <div>
           <Image
           src={"/Image (5).png"}
           alt="Product Image 1"
           width={312}
           height={312}
           />
             <div className="w-[49px] h-[26px] absolute top-[20px] left-[20px] rounded-[4px] px-[10px] py-[6px] gap-[10px] bg-[#01AD5A]">
                <div className="font-inter text-[13px] font-medium leading-[14.3px] text-left text-white">New</div>
             </div>
           </div>
           <div className="absolute top-[329px] left-[268px]">
             <img src="/Add Cart (1).png"/>
           </div>
            {/* Product Name and Price */}
           <div className="w-[256px] h-[51px] absolute top-[326px] grid gap-[10px]">
             <div className="font-inter text-[16px] font-normal leading-[20.8px] text-left">Library Stool Chair</div>
              <div className="gap-[4px] font-inter text-[18px] leading-[19.8px]">$20</div>
           </div>
         </div>
          {/* Product Card 2 */}
         <div className="w-[312px] h-[377px] absolute top-[84px] left-[636px]">
           <div>
           <Image
           src={"/Image (9).png"}
           alt="Product Image 1"
           width={312}
           height={312}
           />
             <div className="w-[49px] h-[26px] absolute top-[20px] left-[20px] rounded-[4px] px-[10px] py-[6px] gap-[10px] bg-[#F5813F]">
                <div className="font-inter text-[13px] font-medium leading-[14.3px] text-left text-white">Sales</div>
             </div>
           </div>
           <div className="absolute top-[329px] left-[268px]">
             <img src="/Add Cart.png"/>
           </div>
           <div className="w-[256px] h-[51px] absolute top-[326px] grid gap-[10px]">
             <div className="font-inter text-[16px] font-normal leading-[20.8px] text-left">Library Stool Chair</div>
              <div className="gap-[4px] font-inter text-[18px] leading-[19.8px]">$20</div>
           </div>
         </div>
          {/* Product Card 3 */}
         <div className="w-[312px] h-[377px] absolute top-[84px] left-[972px]">
           <div>
             <Image
           src={"/Image (8).png"}
           alt="Product Image 1"
           width={312}
           height={312}
           />
           </div>
           <div className="absolute top-[329px] left-[268px]">
             <img src="/Add Cart.png"/>
           </div>
           <div className="w-[256px] h-[51px] absolute top-[326px] grid gap-[10px]">
             <div className="text-[16px] font-normal leading-[20.8px] text-left">Library Stool Chair</div>
              <div className="gap-[4px] font-inter text-[18px] leading-[19.8px]">$20</div>
           </div>
         </div>
          {/* Product Card 4 */}
         <div className="w-[312px] h-[377px] absolute top-[84px] left-[1308px]">
           <div>
           <Image
           src={"/Image (1).png"}
           alt="Product Image 1"
           width={312}
           height={312}
           />
           </div>
           <div className="absolute top-[329px] left-[268px]">
             <img src="/Add Cart.png"/>
           </div>
           <div className="w-[256px] h-[51px] absolute top-[326px] grid gap-[10px]">
             <div className="font-inter text-[16px] font-normal leading-[20.8px] text-left">Library Stool Chair</div>
              <div className="gap-[4px] font-inter text-[18px] leading-[19.8px]">$20</div>
           </div>
         </div>
         </div>
         
         {/* Section #3 */}
         <div className="absolute w-full h-[461px] top-[1179px]">
            {/* Product Card 1 */}
         <div className="w-[312px] h-[377px] absolute top-[84px] left-[300px]">
           {/* Product Image and Tag */}
           <div>
           <Image
           src={"/Image (4).png"}
           alt="Product Image 1"
           width={312}
           height={312}
           />
             <div className="w-[49px] h-[26px] absolute top-[20px] left-[20px] rounded-[4px] px-[10px] py-[6px] gap-[10px] bg-[#01AD5A]">
                <div className="font-inter text-[13px] font-medium leading-[14.3px] text-left text-white">New</div>
             </div>
           </div>
           <div className="absolute top-[329px] left-[268px]">
             <img src="/Add Cart (1).png"/>
           </div>
            {/* Product Name and Price */}
           <div className="w-[256px] h-[51px] absolute top-[326px] grid gap-[10px]">
             <div className="font-inter text-[16px] font-normal leading-[20.8px] text-left">Library Stool Chair</div>
              <div className="gap-[4px] font-inter text-[18px] leading-[19.8px]">$20</div>
           </div>
         </div>

         <div className="w-[312px] h-[377px] absolute top-[84px] left-[636px]">
           <div>
           <Image
           src={"/Image (2).png"}
           alt="Product Image 1"
           width={312}
           height={312}
           />
             <div className="w-[49px] h-[26px] absolute top-[20px] left-[20px] rounded-[4px] px-[10px] py-[6px] gap-[10px] bg-[#F5813F]">
                <div className="font-inter text-[13px] font-medium leading-[14.3px] text-left text-white">Sales</div>
             </div>
           </div>
           <div className="absolute top-[329px] left-[268px]">
             <img src="/Add Cart.png"/>
           </div>
           <div className="w-[256px] h-[51px] absolute top-[326px] grid gap-[10px]">
             <div className="font-inter text-[16px] font-normal leading-[20.8px] text-left">Library Stool Chair</div>
              <div className="gap-[4px] font-inter text-[18px] leading-[19.8px]">$20</div>
           </div>
         </div>

         <div className="w-[312px] h-[377px] absolute top-[84px] left-[972px]">
           <div>
             <Image
           src={"/Image (3).png"}
           alt="Product Image 1"
           width={312}
           height={312}
           />
           </div>
           <div className="absolute top-[329px] left-[268px]">
             <img src="/Add Cart.png"/>
           </div>
           <div className="w-[256px] h-[51px] absolute top-[326px] grid gap-[10px]">
             <div className="font-inter text-[16px] font-normal leading-[20.8px] text-left">Library Stool Chair</div>
              <div className="gap-[4px] font-inter text-[18px] leading-[19.8px]">$20</div>
           </div>
         </div>
         
         <div className="w-[312px] h-[377px] absolute top-[84px] left-[1308px]">
           <div>
           <Image
           src={"/Image (7).png"}
           alt="Product Image 1"
           width={312}
           height={312}
           />
           </div>
           <div className="absolute top-[329px] left-[268px]">
             <img src="/Add Cart.png"/>
           </div>
           <div className="w-[256px] h-[51px] absolute top-[326px] grid gap-[10px]">
             <div className="font-inter text-[16px] font-normal leading-[20.8px] text-left">Library Stool Chair</div>
              <div className="gap-[4px] font-inter text-[18px] leading-[19.8px]">$20</div>
           </div>
         </div>
         </div>
    </div>
    );
  }
  