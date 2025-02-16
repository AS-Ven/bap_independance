import { color } from "@/utils/type";
import DownloadBtn from "../buttons/download-btn";
import localFont from 'next/font/local'
 
const fontOlivier = localFont({ src: '../../assets/fonts/olivier_demo.ttf' })

interface TitleProps {
    title: string
    description: string
    color: color
}

const Title = ({ title, description }: TitleProps) => {
    return (
        <div className="pl-20 py-44 gap-10 flex flex-col bg-orange-100">
            <p className="text-2xl w-2/3">BIENVENUE A LA MAISON DES PART'AGES</p>
            <h1 className={`${fontOlivier.className} text-8xl w-2/3`}>{title}</h1>
            <div className="w-1/2 flex flex-col items-center gap-20">
                <p className="text-3xl">{description}</p>
                <DownloadBtn color="red"></DownloadBtn>
            </div>
        </div>
    );
}
 
export default Title