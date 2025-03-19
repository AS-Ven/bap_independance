import Logo from "../../assets/logo-paysage.svg"
import Image from 'next/image'
import PageLink from "./link/page-link";
import BurgerLink from "./link/burger-link";

const Header = () => {

    const pagesUrls = [
        {
            url:  "/reseaux",
            text: "Réseaux Sociaux"
        },
        {
            url:  "/education",
            text: "Education"
        },
        {
            url:  "/autonomie",
            text: "Autonomie"
        }
    ]

    return (
        <header className="flex justify-evenly items-center py-6">
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