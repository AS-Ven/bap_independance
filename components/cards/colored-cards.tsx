import { color } from "@/utils/type";

interface ColoredCardsProps {
    title: string
    description: string
    color: color
}

const ColoredCards = ({ title, description, color }: ColoredCardsProps) => {
    return (
        <div className={`
                ${
                    color == "orange" ? "border-orange-500" :
                    color == "red" ? "border-rose-900" :
                    color == "green" ? "border-green-500" :
                    color == "purple" ? "border-violet-600" :
                    "border-blue-300"
                }
            border-8 rounded-xl flex flex-col py-10 gap-10 h-80 w-1/3
            `}
        >
            <h3
                className={`
                    ${
                        color == "orange" ? "text-orange-500" :
                        color == "red" ? "text-rose-900" :
                        color == "green" ? "text-green-500" :
                        color == "purple" ? "text-violet-500" :
                        "text-blue-300"
                    }
                    text-4xl px-10 font-bold
                `}
            >{title}</h3>
            <p className="text-2xl px-10">{description}</p>
        </div>
    );
}
 
export default ColoredCards;