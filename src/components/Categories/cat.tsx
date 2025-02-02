import TopCard from "../card1"
const ProductData = [
    {
        id: 1,
        Imagesrc: "/Image (4).png",
        name: "Wing Chair",
        numberofproducts: "3,584 products",
        position: "absolute top-[1350px] lg:top-[84px] left-[180px] md:left-[180px] lg:left-[448px]",
    },
    {
        id: 2,
        Imagesrc: "/Image (5).png",
        name: "Wooden Chair",
        numberofproducts: "157 products",
        position: "absolute top-[1850px] lg:top-[84px] left-[180px] md:left-[180px] lg:left-[896px]",

    },
    {
        id: 3,
        Imagesrc: "/Image (7).png",
        name: "Desk Chair",
        numberofproducts: "154 products",
        position: "absolute top-[2350px] lg:top-[84px] left-[180px] md:left-[180px] lg:left-[1344px]",
    }
]
export default function TopCategories() {
    return (
        <div className="h-[508px] absolute top-[1867px] left-[-148px]">
            <div className="h-[44px] absolute left-[148px] pt-[1250px] lg:py-0 px-[180px] pl-[100px] md:pl-[140px] lg:px-[300px] text-[32px] leading-[35.5px] text-left text-[#272343]">
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
