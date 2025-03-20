import Logo from "../../assets/logo-paysage.svg"
import Image from 'next/image'
import PageLink from "./link/page-link";
import BurgerLink from "./link/burger-link";
import social_icon from "@/assets/social_icon.png"
import school_icon from "@/assets/school_icon.png"
import auto_icon from "@/assets/auto_icon.png"

const Header = () => {

    const pagesUrls = [
        {
            url:  "/reseaux",
            text: "Réseaux Sociaux",
            image: social_icon
        },
        {
            url:  "/education",
            text: "Education",
            image: school_icon
        },
        {
            url:  "/autonomie",
            text: "Autonomie",
            image: auto_icon
        }
    ]

    return (
        <header className="flex justify-evenly items-center py-6 z-10 bg-white">
            <Image
                src={Logo}
                alt="logo"
                className="hidden md:flex"
            />
            <PageLink
                url="/"
                text="Home"
            ></PageLink>
            <BurgerLink
                title="Pages"
                urls={pagesUrls}
            ></BurgerLink>
            <PageLink
                url="/contact"
                text="Contact"
            ></PageLink>
        </header>
    );
}
 
export default Header;