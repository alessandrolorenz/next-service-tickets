import React, { ReactNode, useEffect } from "react"

import styles from "../app/homepage.module.css"
import { useTheme } from "next-themes"
import { CardTitle } from "./ui/card"
import { Button, Typography } from "@material-tailwind/react"

interface slidecard1Props {
    title: string
    description: string
    image: string
    children?: ReactNode
    textCenter?: boolean
}

export function Slidecard1(props: slidecard1Props) {
    const { theme } = useTheme()
    const [themeState, setThemeState] = React.useState("dark")

    useEffect(() => {
        if (theme) {
            setThemeState(theme)
        }
    }, [theme])
    
    return (
        <>
      
        
        <div className="relative h-full w-full">
                <img
                    src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                    alt="image 3"
                    className="h-screen w-full object-cover"
                />
                <div className={`absolute inset-0 grid h-full w-full items-end bg-black/75 ${styles[themeState === "light" ? "light-slide" : "dark-slide"]}`}>
                    <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                            placeholder={undefined}
                        >
                            {props.title}
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 opacity-80"
                            placeholder={undefined}
                        >
                            
                            {props.description}
                        </Typography>
                        {props.children}
                        <div className="flex gap-2">
                            {/* <Button
                                size="lg"
                                color={"white"}
                                placeholder={undefined}
                            >
                                Explore
                            </Button>
                            <Button
                                size="lg"
                                color="white"
                                variant="text"
                                placeholder={undefined}
                            >
                                Gallery
                            </Button> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default Slidecard1
