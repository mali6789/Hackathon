import Image from "next/image"
import { title } from "process"
import Card3 from "../card3"

const Brand = [
    {
        id: 1,
        title: "Next day as standard",
        description: "Order before 3pm and get your order the next day as standard",
        Imagesrc: "/Delivery.png" 
    },
    {
        id: 2,
        title: "Made by true artisans",
        description: "Handmade crafted goods made with real passion and craftmanship",
        Imagesrc: "/Checkmark--outline.png",
    },
    {
        id: 3,
        title: "Unbeatable prices",
        description: "For our materials and quality you won’t find better prices anywhere",
        Imagesrc: "/Purchase.png",
    },
    {
        id: 4,
        title: "Recycled packaging",
        description: "We use 100% recycled to ensure our footprint is more manageable",
        Imagesrc: "/Sprout.png",
    }
]
export default function Group(){
    return (
        <div>
            <div className="absolute w-[1320px] h-[244px] sm:top-[1250px] lg:top-[996px] sm:left-[150px] lg:left-[300px] lg:flex justify-center">
                {Brand.map ((elem) => {
                    return (
                        <Card3
                        key={elem.id} 
                        title={elem.title} 
                        description={elem.description} 
                        Imagesrc={elem.Imagesrc}
                        />
                    )
                })}              
            </div>
        </div>
    )
}