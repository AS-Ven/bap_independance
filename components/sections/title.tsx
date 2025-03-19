import { color } from "@/utils/type";
import DownloadBtn from "../buttons/download-btn";
import localFont from 'next/font/local'
 
const fontOlivier = localFont({ src: '../../assets/fonts/olivier_demo.ttf' })

interface TitleProps {
    title: string
    description: string
    color: color
}

const Title = ({ title, description, color }: TitleProps) => {
    return (
        <div className="bg-orange-100">
            <div className="py-20 md:px-12 gap-10 flex flex-col ">
                <p className="text-2xl md:w-2/3 font-bold text-gray-500">BIENVENUE À LA MAISON DES PART&apos;ÂGES</p>
                <h1 className={`${fontOlivier.className} text-7xl md:w-2/3`}>{title}</h1>
                <div className="md:w-1/2 flex flex-col items-center gap-20">
                    <p className="text-xl">{description}</p>
                    <DownloadBtn color={color}></DownloadBtn>
                </div>
            </div>
        </div>
    );
}
 
export default Title