'use client'

import Link from "next/link"
import { useState } from "react"

interface BurgerLinkProps {
    title: string
    urls: urls[]
}

type urls = {
    url: string
    text: string
}

const BurgerLink = ({ title, urls }: BurgerLinkProps) => {

    const [display, SetDisplay] = useState(false)

    return (
        <div>
            <div className="flex gap-2">
                <button onClick={() => SetDisplay(!display)} className="text-xl">{title}</button>
            </div>
            <ul
                className={`${display ? "flex" : "hidden"} flex-col absolute m-2`}
            >
                {
                    urls.map((props, index) =>
                        <li key={index}>
                            <Link href={props.url}>
                                <h3>
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