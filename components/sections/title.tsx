import { color } from "@/utils/type";
import DownloadBtn from "../buttons/download-btn";
import localFont from 'next/font/local'
import Image, { StaticImageData } from "next/image";
import titleImg from "@/assets/title.webp"

const fontOlivier = localFont({ src: '../../assets/fonts/olivier_demo.ttf' })

interface TitleProps {
    title: string
    description: string
    color: color
    image?: StaticImageData
}

const Title = ({ title, description, color, image }: TitleProps) => {

    if (!image)
        image = titleImg

    return (
        <div className="bg-orange-100 py-20 relative flex justify-evenly items-center">
            <div className="px-12 gap-10 flex flex-col">
                <p className="text-2xl md:w-2/3 font-bold text-gray-500">BIENVENUE À LA MAISON DES PART&apos;ÂGES</p>
                <h1 className={`${fontOlivier.className} ${image != titleImg ? "" : "md:w-2/3"} text-7xl`}>{title}</h1>
                <div className="md:w-1/2 flex flex-col items-center gap-20">
                    <p className="text-xl">{description}</p>
                    <DownloadBtn color={color}></DownloadBtn>
                </div>
            </div>
            <Image
                src={image}
                alt="img"
                className={`${image != titleImg ? "h-96 w-auto" : "absolute right-4 h-[600] w-auto -bottom-4"} hidden md:flex`}
            ></Image>
        </div>
    );
}
 
export default Title