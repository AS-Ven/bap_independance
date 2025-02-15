import localFont from "next/font/local";
import Link from "next/link";

const fontLilitaOne = localFont({ src: '../../../assets/fonts/LilitaOne-Regular.ttf' })

const ScolarityBtn = () => {
    return (
        <Link
            href="/"
            className={`${fontLilitaOne.className} bg-blue-300 text-white text-4xl p-5 rounded-2xl`}
        >
            Scolarité
        </Link>
    );
}
 
export default ScolarityBtn;