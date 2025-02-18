import { color } from "@/utils/type";
import localFont from "next/font/local";

const fontLilitaOne = localFont({ src: '../../assets/fonts/LilitaOne-Regular.ttf' })


interface RowMenuCardsProps {
    color: color
    text: string
}

const RowMenuCards = ({ color, text }: RowMenuCardsProps) => {
    return (
        <div className={`
            ${
            color == "orange" ? "border-orange-500" :
            color == "red" ? "border-rose-900" :
            color == "green" ? "border-green-500" :
            color == "purple" ? "border-violet-600" :
            "border-blue-300"
            }
            border-8 rounded-tr-[190] rounded-bl-[190] flex justify-around flex-col bg-white`
        }>
            <div className="h-96"></div>
            <h3 className={` ${fontLilitaOne.className}
                ${
                color == "orange" ? "bg-orange-500" :
                color == "red" ? "bg-rose-900" :
                color == "green" ? "bg-green-500" :
                color == "purple" ? "bg-violet-600" :
                "bg-blue-300"
                }
                text-white text-4xl mx-32 my-20 w-72 text-center p-2 rounded-2xl`
            }>{text}</h3>
        </div>
    );
}
 
export default RowMenuCards;