import FeatureCard from "../card";
const ProductData = [
    {
        id: 1,
        Imagesrc: "/Image (1).png",
        AddToCardsrc: "/Add Cart.png",
        position: "absolute sm:top-[8000px] lg:top-[542px] sm:left-[180px] lg:left-[1008px]",
    },
    {
        id: 2,
        Imagesrc: "/Image.png",
        AddToCardsrc: "/Add Cart.png",
        position: "absolute sm:top-[7500px] lg:top-[125px] sm:left-[180px] lg:left-[1008px]",
    },
    {
        id: 3,
        Imagesrc: "/Image (8).png",
        AddToCardsrc: "/Add Cart.png",
        position: "absolute sm:top-[7000px] lg:top-[542px] sm:left-[180px] lg:left-[672px]",
    },
    {
        id: 4,
        Imagesrc: "/Image (3).png",
        AddToCardsrc: "/Add Cart.png",
        position: "absolute sm:top-[6500px] lg:top-[125px] sm:left-[180px] lg:left-[672px]",
    },
    {
        id: 5,
        Imagesrc: "/Image (9).png",
        tag: "Sales",
        tagColor: "bg-[#F5813F]",
        AddToCardsrc: "/Add Cart.png",
        position: "absolute sm:top-[6000px] lg:top-[542px] sm:left-[180px] lg:left-[336px]",
    },
    {
        id: 6,
        Imagesrc: "/Image (2).png",
        tag: "Sales",
        tagColor: "bg-[#F5813F]",
        AddToCardsrc: "/Add Cart.png",
        position: "absolute sm:top-[5500px] lg:top-[125px]  sm:left-[180px] lg:left-[336px]",
    },
    {
        id: 7,
        Imagesrc: "/Image (4).png",
        tag: "New",
        tagColor: "bg-[#01AD5A]",
        AddToCardsrc: "/Add Cart.png",
        position: "absolute sm:top-[5000px] lg:top-[542px] sm:left-[180px] lg:left-0",
    },
    {
        id: 8,
        Imagesrc: "/Image (1).png",
        tag: "New",
        tagColor: "bg-[#01AD5A]",
        AddToCardsrc: "/Add Cart (1).png",
        position: "absolute sm:top-[4500px] lg:top-[125px] sm:left-[180px] lg:left-0",
    }
]
export default function OurProduct() {
    return (
        <div>
            <div className="h-[919px] absolute top-[3425px] lg:left-[307px]">
                <div className="w-[204px] absolute sm:top-[4350px] lg:top-[16px] sm:left-[250px] lg:left-[557px] font-['inter'] text-[32px] leading-[35.2px]">
                    Our Product
                </div>
                {ProductData.map((product) => {
                    return (
                        <FeatureCard 
                        key={product.id}
                        Imagesrc={product.Imagesrc}
                        tag={product.tag}
                        tagColor={product.tagColor}
                        AddToCardsrc={product.AddToCardsrc}
                        position={product.position}
                        />
                    )
                })}
            </div>
        </div>
    )
}
