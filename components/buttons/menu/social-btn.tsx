import localFont from "next/font/local";
import Link from "next/link";

const fontLilitaOne = localFont({ src: '../../../assets/fonts/LilitaOne-Regular.ttf' })

const SocialBtn = () => {
    return (
        <Link
            href="/"
            className={`${fontLilitaOne.className} bg-orange-500 text-white text-4xl p-5 rounded-2xl`}
        >
            Réseaux Sociaux
        </Link>
    );
}
 
export default SocialBtn;