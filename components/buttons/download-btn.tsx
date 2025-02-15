import Link from "next/link";

interface DownloadBtnProps {
    color: color
}

export type color = "orange" | "red" | "green" | "blue"

const DownloadBtn = ({ color }: DownloadBtnProps) => {
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
                text-white text-3xl py-3 px-8 rounded-2xl
            `}
        >
            Téléchargez le guide gratuit
        </Link>
    );
}
 
export default DownloadBtn;