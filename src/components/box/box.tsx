import Card2 from "../card2"

const Box = [
    {
        id: 1,
        question: "How do I clean and maintain my Comforty chair?",
        position: "absolute top-[388px] left-[672px]",
    },
    {
        id: 2,
        question: "What will be delivered? And When?",
        position: "absolute top-[217px] left-[672px]",
    },
    {
        id: 3,
        question: "How can we get in touch with you?",
        position: "absolute top-[45px] left-[672px]",
    },
    {
        id: 4,
        question: "Can I try a chair before purchasing?",
        position: "absolute top-[388px] left-[0px]",
    },
    {
        id: 5,
        question: "Do your chairs come with a warranty?",
        position: "absolute top-[217px] left-[0px]",
    },
    {
        id: 6,
        question: "What types of chairs do you offer?",
        position: "absolute top-[45px] left-[0px]",
    }
]

export default function FaqsBox() {
    return (
        <div>
            <div className="w-full h-[731px] absolute top-[286px] left-[300px]">
                <div className="w-full h-[558px] absolute top-[173px]">
                    {Box.map((elem) =>{
                        return(
                            <Card2
                            key={elem.id}
                            question={elem.question}
                            position={elem.position}
                            />
                        )
                    })}
                </div>
                <div className="absolute w-[771px] h-[101px] top-[60px] left-[274px]">
                    <div className="absolute bottom-[21px] left-[130px]">
                        <p className="font-helvetica text-[48px] font-bold leading-[56px]">Questions Looks Here</p>
                    </div>
                    <div className="absolute top-[95px]">
                        <p className="font-inter text-[16px] font-normal leading-[24px] text-center text-[#4F4F4F]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
                    </div>
                </div>
            </div>
        </div>
    )
}