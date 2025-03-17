import { color } from "@/utils/type";
import FooterBtn from "../buttons/footer-btn";
import localFont from 'next/font/local'
 
const fontOlivier = localFont({ src: '../../assets/fonts/olivier_demo.ttf' })

interface FooterProps {
    color: color
}

const Footer = ({color}: FooterProps) => {
    return (
        <footer className="flex justify-end">
            <div className="w-2/3 flex items-start flex-col">
                <div className="flex flex-col justify-center items-center">
                    <h2 className={`${fontOlivier.className} text-7xl py-12`}>N&apos;hésitez pas à nous contacter pour avoir plus d&apos;information !</h2>
                    <p className="text-2xl font-bold text-gray-500">Pour plus d&apos;informations ou pour participer aux activités, il est recommandé de contacter directement la Maison des Part&apos;Âges au 01 46 01 51 74.</p>
                </div>
                <div className="py-28">
                    <FooterBtn
                        color={color}
                    ></FooterBtn>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;