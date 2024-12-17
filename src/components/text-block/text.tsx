export default function TextBlock(){
    return(
        
        <div className="w-[672px] h-[478px] absolute top-[303px] left-[300px] bg-[#007580]">
            {/* Button*/}
            <button className="absolute w-[179px] h-[56px] top-[368px] left-[64px] py-[16px] px-[32px] gap-[10px] bg-[rgba(249,249,249,0.15)]">
                <p className="font-inter font-normal text-[16px] leading-[24px] text-white">View collection</p>
            </button>
            {/* Top Content */}
            <div className="w-[495px] h-[161px] top-[64px] left-[64px] grid gap-[12px] absolute text-white">
                <div className="font-inter font-bold text-[32px] leading-[38.73px]">About Us - Comforty</div>
                <div className="font-inter font-normal text-[18px] leading-[21.78px]">
                    At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality. 
                </div>
            </div>
        </div>
    )
}