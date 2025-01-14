import Image from "next/image"

export default function ImageBlock(){
    return (
        <div className="absolute top-[303px] left-[1001px]">
            <Image 
            src="/Image Block.png"
            alt="Image Block"
            width={619}
            height={478}/>
        </div>
    )
}