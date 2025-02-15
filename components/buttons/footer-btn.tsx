import Link from "next/link";

interface FooterBtnProps {
    color: color
}

export type color = "orange" | "red" | "green" | "blue"

const FooterBtn = ({ color }: FooterBtnProps) => {
    return (
        <Link
            href="/"
            className={`
                ${
                    color == "orange" ? "bg-orange-500" :
                    color == "red" ? "bg-rose-900" :
                    color == "green" ? "bg-green-500" :
                    "bg-blue-300"
                }
                text-white text-3xl py-5 px-8 rounded-2xl
            `}
        >
            Contactez-nous
        </Link>
    );
}
 
export default FooterBtn;