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
            <div className="w-2/3 px-9 flex flex-col justify-center items-center">
                <h2 className={`${fontOlivier.className} text-8xl py-12`}>N'hésitez pas à nous contacter pour avoir plus d'information !</h2>
                <p className="text-2xl">Pour plus d'informations ou pour participer aux activités, il est recommandé de contacter directement la Maison des Part'Âges au 01 46 01 51 74.</p>
                <div className="p-28">
                    <FooterBtn
                        color={color}
                    ></FooterBtn>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;