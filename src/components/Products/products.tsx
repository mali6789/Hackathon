import FeatureCard from "../card";

const ProductData = [
  {
    id: 1,
    Imagesrc: "/Image (1).png",
    tag: "New",
    tagColor: "bg-[#01AD5A]",
    AddToCardsrc: "/Add Cart (1).png",
    position: "absolute top-[180px] lg:top-[84px] left-[85px] md:left-[100px] lg:left-[300px]",
  },
  {
    id: 2,
    Imagesrc: "/Image (2).png",
    tag: "Sales",
    tagColor: "bg-[#F5813F]",
    AddToCardsrc: "/Add Cart.png",
    position: "absolute top-[600px] lg:top-[84px] left-[85px] md:left-[100px] lg:left-[636px]",
  },
  {
    id: 3,
    Imagesrc: "/Image (3).png",
    AddToCardsrc: "/Add Cart.png",
    position: "absolute top-[1000px] lg:top-[84px] left-[85px] md:left-[100px] lg:left-[972px]",
  },
  {
    id: 4,
    Imagesrc: "/Image.png",
    AddToCardsrc: "/Add Cart.png",
    position: "absolute top-[1400px] lg:top-[84px] left-[85px] md:left-[100px] lg:left-[1308px]",
  }
]
export default function FeatureProduct() {
    return (
      //Main container for Featured Products section
    <div className="absolute h-[461px] top-[1270px]">

          {/* Title for Featured Products */}
         <div className="py-[110px] lg:py-0 pl-[100px] md:pl-[140px] lg:px-[300px] pr-0 md:pr-0 lg:pr-0 font-inter text-[32px] leading-[35.2px] lg:text-left text-[#272343]">
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
  