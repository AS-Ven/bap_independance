import localFont from "next/font/local";
import Link from "next/link";

const fontLilitaOne = localFont({ src: '../../../assets/fonts/LilitaOne-Regular.ttf' })

const AutonomyBtn = () => {
    return (
        <Link
            href="/"
            className={`${fontLilitaOne.className} bg-violet-500 text-white text-4xl p-5 rounded-2xl`}
        >
            Autonomie
        </Link>
    );
}

export default AutonomyBtn;