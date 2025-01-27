import Image from "next/image"

export default function ImageBlock(){
    return (
        <div className="absolute sm:top-[700px] lg:top-[303px] sm:left-[2px] lg:left-[1001px]">
            <Image 
            src="/Image Block.png"
            alt="Image Block"
            width={619}
            height={478}/>
        </div>
    )
}