import React, { ReactNode } from "react"

import { Typography, Button } from "@material-tailwind/react"
import styles from "../app/homepage.module.css"
import { useTheme } from "next-themes"
import { CardTitle } from "./ui/card"

interface slidecardProps {
    title: string
    description: string
    image: string
    children?: ReactNode
    textCenter?: boolean
}

export function Slidecard(props: slidecardProps) {
    const { theme } = useTheme()
    return (
        <div className="relative h-full w-full">
            <img
                src={props.image}
                alt="image 2"
                className="h-screen w-full object-cover"
            />
            <div
                className={` absolute inset-0 grid h-full w-full items-center ${
                    props.textCenter ? "text-center" : ""
                } bg-black/75 ${
                    styles[theme === "light" ? "light-slide" : "dark-slide"]
                }`}
            >
                <div
                    className={`w-3/4   ${
                        props.textCenter
                            ? "m-auto"
                            : "pl-12 md:w-2/4 md:pl-20 lg:pl-32"
                    }`}
                >
                    <CardTitle className="uppercase text-3xl md:text-4xl lg:text-5xl mb-6">
                        {" "}
                        {props.title}
                    </CardTitle>
                    <CardTitle className="mb-12 opacity-80">
                        {" "}
                        {props.description}
                    </CardTitle>

                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Slidecard
