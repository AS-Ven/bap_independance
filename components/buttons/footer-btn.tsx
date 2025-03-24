import { color } from "@/utils/type";
import Link from "next/link";

interface FooterBtnProps {
    color: color
}

const FooterBtn = ({ color }: FooterBtnProps) => {
    return (
        <Link href="/contact">
            <button className={`
                ${
                    color == "orange" ? "bg-orange-500" :
                    color == "red" ? "bg-rose-900" :
                    color == "purple" ? "bg-purple-500" :
                    "bg-blue-300"
                }
                text-white text-3xl py-5 px-8 rounded-2xl
            `}>
                Contactez-nous
            </button>
        </Link>
    );
}
 
export default FooterBtn;