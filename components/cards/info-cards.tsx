import { color } from "@/utils/type";
import localFont from "next/font/local";

interface InfoCardsProps {
    title: string
    subTitle: string
    listText: listText[]
    color: color
}

type listText = {
    title: string,
    description: string
}

const fontOlivier = localFont({ src: '../../assets/fonts/olivier_demo.ttf' })

const InfoCards = ({ title, subTitle, listText, color }: InfoCardsProps) => {
    return (
        <div className="bg-white p-20">
            <h2 className={`
                ${
                    color == "orange" ? "text-orange-500" :
                    color == "red" ? "text-rose-900" :
                    color == "green" ? "text-green-500" :
                    color == "purple" ? "text-violet-600" :
                    "text-blue-300"
                }
                ${fontOlivier.className}
                text-7xl`
            }>
                {title}
            </h2>
            <h3 className="text-3xl py-8">{subTitle}</h3>
            {
                listText.map((content, i) => (
                    <div key={i} className="text-xl px-6 flex flex-col py-4 gap-2">
                        <h4 className="list-item">{content.title}</h4>
                        <p>{content.description}</p>
                    </div>
                ))
            }
        </div>
    );
}
 
export default InfoCards;