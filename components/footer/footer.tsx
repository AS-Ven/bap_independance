import { color } from "@/utils/type";
import FooterBtn from "../buttons/footer-btn";
import localFont from 'next/font/local'
import blason from '@/assets/blason.png'
import logo from '@/assets/logo-paysage.svg'
import Image from "next/image";
 
const fontOlivier = localFont({ src: '../../assets/fonts/olivier_demo.ttf' })

interface FooterProps {
    color: color
}

const Footer = ({color}: FooterProps) => {
    return (
        <footer className="flex justify-center items-center px-8 md:p-0">
            <div className="flex">
                <div className="flex-col justify-evenly items-center px-32 hidden md:flex">
                    <Image
                        src={blason}
                        alt="blason"
                        ></Image>
                    <Image
                        src={logo}
                        alt="blason"
                        ></Image>
                </div>
                <div className="flex items-start flex-col">
                    <div className="flex flex-col justify-center items-center">
                        <h2 className={`${fontOlivier.className} md:text-7xl text-5xl py-12`}>N&apos;hésitez pas à nous contacter pour avoir plus d&apos;information !</h2>
                        <p className="text-2xl font-bold text-gray-500">Pour plus d&apos;informations ou pour participer aux activités, il est recommandé de contacter directement la Maison des Part&apos;Âges au 01 46 01 51 74.</p>
                    </div>
                    <div className="py-28">
                        <FooterBtn
                            color={color}
                        ></FooterBtn>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;