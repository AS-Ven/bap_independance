import Link from "next/link";

interface ColorBtnProps {
    text: string
    url: string
    color: color
}

type color = "orange" | "red" | "green" | "blue"

const ColorBtn = ({ text, url, color }: ColorBtnProps) => {
    return (
        <Link
            href={url}
            className={`
                ${
                    color == "orange" ? "bg-orange-500" :
                    color == "red" ? "bg-rose-900" :
                    color == "green" ? "bg-green-500" :
                    "bg-blue-300"
                }
                text-white p-6 text-2xl rounded-2xl
            `}
        >
            <button>{text}</button>
        </Link>
    );
}
 
export default ColorBtn;