import { color } from "@/utils/type";
import localFont from "next/font/local";
import Image from "next/image";
import phone from "@/assets/phone.png"
import book from "@/assets/book.webp"
import cog from "@/assets/cog.png"

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
            md:border-8 rounded-tr-[150] rounded-bl-[150] md:w-1/4 md:gap-36 py-16 flex md:justify-between items-center flex-col md:bg-white`
        }>
            <Image
                src={
                    color == "orange" ? phone :
                    color == "blue" ? book :
                    cog
                }
                alt="img"
                className="p-2 h-64 w-auto hidden md:flex"
            ></Image>
            <h3 className={` ${fontLilitaOne.className}
                ${
                color == "orange" ? "bg-orange-500" :
                color == "red" ? "bg-rose-900" :
                color == "green" ? "bg-green-500" :
                color == "purple" ? "bg-violet-600" :
                "bg-blue-300"
                }
                text-white text-3xl md:mx-32 md:w-72 text-center p-2 rounded-2xl`
            }>{text}</h3>
        </div>
    );
}
 
export default RowMenuCards;