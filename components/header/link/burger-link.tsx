'use client'

import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { useState } from "react"

interface BurgerLinkProps {
    title: string
    urls: urls[]
}

type urls = {
    url: string
    text: string
    image: string | StaticImageData
}

const BurgerLink = ({ title, urls }: BurgerLinkProps) => {

    const [display, SetDisplay] = useState(false)

    return (
        <div className="relative">
            <button onClick={() => SetDisplay(!display)} className="text-xl px-20">{title}</button>
            <ul
                className={`${display ? "flex" : "hidden"} z-20 bg-white flex-col absolute left-6 top-12 w-full gap-2`}
            >
                {
                    urls.map((props, index) =>
                        <li key={index} className="w-full">
                            <Link href={props.url} className="flex items-center gap-2">
                                <Image
                                    src={props.image}
                                    alt={props.text}
                                    className="w-12 h-auto"
                                ></Image>
                                <h3 className="text-xl">
                                    {props.text}
                                </h3>
                            </Link>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}
 
export default BurgerLink;