import Image from "next/image";
import FeatureCard from "../card";
const ProductData = [
    {
        id: 1,
        Imagesrc: "/Image (1).png",
        AddToCardsrc: "/Add Cart.png",
        position: "absolute top-[542px] left-[1008px]",
    },
    {
        id: 2,
        Imagesrc: "/Image.png",
        AddToCardsrc: "/Add Cart.png",
        position: "absolute top-[125px] left-[1008px]",
    },
    {
        id: 3,
        Imagesrc: "/Image (8).png",
        AddToCardsrc: "/Add Cart.png",
        position: "absolute top-[542px] left-[672px]",
    },
    {
        id: 4,
        Imagesrc: "/Image (3).png",
        AddToCardsrc: "/Add Cart.png",
        position: "absolute top-[125px] left-[672px]",
    },
    {
        id: 5,
        Imagesrc: "/Image (9).png",
        tag: "Sales",
        tagColor: "bg-[#F5813F]",
        AddToCardsrc: "/Add Cart.png",
        position: "absolute top-[542px] left-[336px]",
    },
    {
        id: 6,
        Imagesrc: "/Image (2).png",
        tag: "Sales",
        tagColor: "bg-[#F5813F]",
        AddToCardsrc: "/Add Cart.png",
        position: "absolute top-[125px] left-[336px]",
    },
    {
        id: 7,
        Imagesrc: "/Image (4).png",
        tag: "New",
        tagColor: "bg-[#01AD5A]",
        AddToCardsrc: "/Add Cart.png",
        position: "absolute top-[542px] left-[0px]",
    },
    {
        id: 8,
        Imagesrc: "/Image (1).png",
        tag: "New",
        tagColor: "bg-[#01AD5A]",
        AddToCardsrc: "/Add Cart (1).png",
        position: "absolute top-[125px]",
    }
]
export default function OurProduct() {
    return (
        <div>
            <div className="h-[919px] absolute top-[3425px] left-[307px]">
                <div className="w-[204px] absolute top-[16px] left-[557px] font-['inter'] text-[32px] leading-[35.2px]">
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
