import FeatureCard from "../card";

const data = [
   {
      id: 1,
      Imagesrc: "/Image (1).png",
      tag: "New",
      tagColor: "bg-[#01AD5A]",
      AddToCardsrc: "/Add Cart (1).png",
      position: "absolute top-[140px] lg:top-[84px] left-[100px] lg:left-[300px]",
   },
   {
      id: 2,
      Imagesrc: "/Image (2).png",
      tag: "Sales",
      tagColor: "bg-[#F5813F]",
      AddToCardsrc: "/Add Cart.png",
      position: "absolute top-[550px] lg:top-[84px] left-[100px] lg:left-[636px]",
   },
   {
      id: 3,
      Imagesrc: "/Image (3).png",
      AddToCardsrc: "/Add Cart.png",
      position: "absolute top-[950px] lg:top-[84px] left-[100px] lg:left-[972px]",
   },
   {
      id: 4,
      Imagesrc: "/Image.png",
      AddToCardsrc: "/Add Cart.png",
      position: "absolute top-[1350px] lg:top-[84px] left-[100px] lg:left-[1308px]",
   },
   {
      id: 5,
      Imagesrc: "/Image (5).png",
      tag: "New",
      tagColor: "bg-[#01AD5A]",
      AddToCardsrc: "/Add Cart (1).png",
      position: "absolute top-[1750px] lg:top-[599px] left-[100px] lg:left-[300px]",
   },
   {
      id: 6,
      Imagesrc: "/Image (9).png",
      tag: "Sales",
      tagColor: "bg-[#F5813F]",
      AddToCardsrc: "/Add Cart.png",
      position: "absolute top-[2150px] lg:top-[599px] left-[100px] lg:left-[636px]",
   },
   {
      id: 7,
      Imagesrc: "/Image (8).png",
      AddToCardsrc: "/Add Cart.png",
      position: "absolute top-[2550px] lg:top-[599px] left-[100px] lg:left-[972px]",
   },
   {
      id: 8,
      Imagesrc: "/Image (1).png",
      AddToCardsrc: "/Add Cart.png",
      position: "absolute top-[3050px] lg:top-[599px] left-[100px] lg:left-[1308px]",
   },
   {
      id: 9,
      Imagesrc: "/Image (4).png",
      tag: "New",
      tagColor: "bg-[#01AD5A]",
      AddToCardsrc: "/Add Cart (1).png",
      position: "absolute top-[3450px] lg:top-[1060px] left-[100px] lg:left-[300px]",
   },
   {
      id: 10,
      Imagesrc: "/Image (2).png",
      tag: "Sales",
      tagColor: "bg-[#F5813F]",
      AddToCardsrc: "/Add Cart.png",
      position: "absolute top-[3850px] lg:top-[1060px] left-[100px] lg:left-[636px]",
   },
   {
      id: 11,
      Imagesrc: "/Image (3).png",
      AddToCardsrc: "/Add Cart.png",
      position: "absolute top-[4250px] lg:top-[1060px] left-[100px] lg:left-[972px]",
   },
   {
      id: 12,
      Imagesrc: "/Image (7).png",
      AddToCardsrc: "/Add Cart.png",
      position: "absolute top-[4650px] lg:top-[1060px] left-[100px] lg:left-[1308px]",
   },
];
export default function AllProduct() {
    return (
      //Main container for Section
    <div>
      <div className="absolute w-full h-[461px] lg:top-[260px]">
       <div className="h-[44px] pl-[145px] lg:px-[300px] py-[50px] lg:py-0 font-['Inter'] text-[32px] leading-[35.2px] text-left text-[#272343]">
        All Products
       </div>
       {data.map((items) =>{
         return(
            <FeatureCard 
            key={items.id}
            Imagesrc={items.Imagesrc} 
            tag={items.tag} 
            tagColor={items.tagColor} 
            AddToCardsrc={items.AddToCardsrc} 
            position={items.position}            
            />
         )
       })}
         </div>
    </div>
    );
  }
  