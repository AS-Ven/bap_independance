import { color } from "@/utils/type";
import Link from "next/link";

interface DownloadBtnProps {
    color: color
}

const DownloadBtn = ({ color }: DownloadBtnProps) => {
    return (
        <Link
            href="/"
            className={`
                ${
                    color == "orange" ? "bg-orange-500" :
                    color == "red" ? "bg-rose-900" :
                    color == "purple" ? "bg-purple-500" :
                    "bg-blue-300"
                }
                text-white text-2xl py-3 px-8 rounded-2xl
            `}
        >
            Téléchargez le guide gratuit
        </Link>
    );
}
 
export default DownloadBtn;