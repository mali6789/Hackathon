import FeatureCard from "../card";

const ProductData = [
  {
    id: 1,
    Imagesrc: "/Image (1).png",
    tag: "New",
    tagColor: "bg-[#01AD5A]",
    AddToCardsrc: "/Add Cart (1).png",
    position: "absolute sm:top-[1100px] lg:top-[84px] sm:left-[150px] lg:left-[300px]",
  },
  {
    id: 2,
    Imagesrc: "/Image (2).png",
    tag: "Sales",
    tagColor: "bg-[#F5813F]",
    AddToCardsrc: "/Add Cart.png",
    position: "absolute sm:top-[1600px] lg:top-[84px] sm:left-[150px] lg:left-[636px]",
  },
  {
    id: 3,
    Imagesrc: "/Image (3).png",
    AddToCardsrc: "/Add Cart.png",
    position: "absolute sm:top-[2100px] lg:top-[84px] sm:left-[150px] lg:left-[972px]",
  },
  {
    id: 4,
    Imagesrc: "/Image.png",
    AddToCardsrc: "/Add Cart.png",
    position: "absolute sm:top-[2600px] lg:top-[84px] sm:left-[150px] lg:left-[1308px]",
  }
]
export default function FeatureProduct() {
    return (
      //Main container for Featured Products section
    <div className="absolute h-[461px] top-[1270px]">

          {/* Title for Featured Products */}
         <div className="sm:py-[1000px] lg:py-0 sm:px-[180px] lg:px-[300px] font-inter text-[32px] leading-[35.2px] lg:text-left text-[#272343]">
         Featured Products
         </div>
        {ProductData.map((elem) =>{
          return (
            <FeatureCard
              key={elem.id}
              Imagesrc={elem.Imagesrc}
              tag={elem.tag}
              tagColor={elem.tagColor}
              AddToCardsrc={elem.AddToCardsrc}
              position={elem.position}
            />
          )
        })}
    </div>
    );
  }
  