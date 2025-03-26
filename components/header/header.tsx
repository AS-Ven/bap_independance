'use client'

import Logo from "../../assets/logo-paysage.svg"
import Image from 'next/image'
import PageLink from "./link/page-link";
import BurgerLink from "./link/burger-link";
import social_icon from "@/assets/social_icon.png"
import school_icon from "@/assets/school_icon.png"
import auto_icon from "@/assets/auto_icon.png"
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {

    const [burger, setBurger] = useState(false)

    const showMenu = () => {
        setBurger(true)
    }

    const closeMenu = () => {
        setBurger(false)
    }

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
        <header>
            <nav className="md:flex justify-evenly items-center py-6 z-10 bg-white hidden">
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
                    url="http://localhost:3000/login"
                    text="Forum"
                    ></PageLink>
                <PageLink
                    url="/contact"
                    text="Contact"
                ></PageLink>
            </nav>
            <div className="md:hidden absolute z-10 top-4 left-4">
                <button onClick={showMenu}>
                    <Menu size={48}></Menu>
                </button>
                <div className={burger ? "flex bg-white absolute p-4 rounded-xl top-0 left-0 justify-between w-72 items-start" : "hidden"}>
                    <div className="flex flex-col gap-4">
                        <Image
                            src={Logo}
                            alt="logo"
                            className="hidden md:flex"
                            />
                        <PageLink
                            url="/"
                            text="Home"
                            ></PageLink>
                        {
                            pagesUrls.map((page, i) => (
                                <PageLink
                                key={i}
                                url={page.url}
                                text={page.text}
                                ></PageLink>
                            ))
                        }
                        <PageLink
                            url="http://localhost:3000/login"
                            text="Forum"
                            ></PageLink>
                        <PageLink
                        url="/contact"
                        text="Contact"
                        ></PageLink>
                    </div>
                    <button className="flex" onClick={closeMenu}>
                        <X size={28}></X>
                    </button>
                </div>
            </div>
        </header>
    );
}
 
export default Header;