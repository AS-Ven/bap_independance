import { color } from "@/utils/type";
import localFont from "next/font/local";
import RowMenuCards from "../cards/row-menu-cards";

const fontOlivier = localFont({ src: '../../assets/fonts/olivier_demo.ttf' })

interface RowMenuProps {
    color: color
}

const RowMenu = ({ color }: RowMenuProps) => {

    const RowMenuList: { text: string; color: color }[] = [
        {
            text: "Réseaux Sociaux",
            color: "orange"
        },
        {
            text: "Scolarité",
            color: "blue"
        },
        {
            text: "Autonomie",
            color: "purple"
        }
    ]
    return (
        <div className="flex flex-col justify-center items-center py-24">
            <h2 className={`${fontOlivier.className} text-7xl w-2/3 px-10 text-center`}>
                    Accompagner votre
                    <span className={`
                        ${
                            color == "orange" ? "text-orange-500" :
                            color == "red" ? "text-rose-900" :
                            color == "green" ? "text-green-500" :
                            color == "purple" ? "text-violet-600" :
                            "text-blue-300"
                        }
                        `
                    }> enfant</span> au quotidien !</h2>
            <div className={`
                ${
                    color == "orange" ? "bg-orange-500" :
                    color == "red" ? "bg-rose-900" :
                    color == "green" ? "bg-green-500" :
                    color == "purple" ? "bg-violet-600" :
                    "bg-blue-300"
                }
                py-24 mt-24 flex flex-wrap justify-around w-screen`
            }>
                {
                    RowMenuList.map((section, index) =>
                        <RowMenuCards
                            text={section.text}
                            color={section.color}
                            key={index}
                        ></RowMenuCards>
                    )
                }
            </div>
        </div>
    );
}
 
export default RowMenu;