import TopCard from "../card1"
const ProductData = [
    {
        id: 1,
        Imagesrc: "/Image (4).png",
        name: "Wing Chair",
        numberofproducts: "3,584 products",
        position: "absolute sm:top-[2600px] lg:top-[84px] sm:left-[250px] lg:left-[448px]",
    },
    {
        id: 2,
        Imagesrc: "/Image (5).png",
        name: "Wooden Chair",
        numberofproducts: "157 products",
        position: "absolute sm:top-[3100px] lg:top-[84px] sm:left-[250px] lg:left-[896px]",

    },
    {
        id: 3,
        Imagesrc: "/Image (7).png",
        name: "Desk Chair",
        numberofproducts: "154 products",
        position: "absolute sm:top-[3600px] lg:top-[84px] sm:left-[250px] lg:left-[1344px]",
    }
]
export default function TopCategories() {
    return (
        <div className="h-[508px] absolute top-[1867px] left-[-148px]">
            <div className="min-w-[1920px] h-[44px] absolute left-[148px] sm:py-[2450px] lg:py-0 sm:px-[180px] lg:px-[300px] text-[32px] leading-[35.5px] text-left text-[#272343]">
                Top Categories
            </div>
                {ProductData.map((elem) =>{
                    return(
                        <TopCard 
                        key={elem.id}
                        Imagesrc={elem.Imagesrc} 
                        name={elem.name} 
                        numberofproducts={elem.numberofproducts} 
                        position={elem.position} 
                        />
                    )
                })}
        </div>
    )
}
