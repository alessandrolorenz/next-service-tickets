import React, { ReactNode } from "react"

import { Typography, Button } from "@material-tailwind/react"

interface slidecardProps {
    title: string
    description: string
    image: string
    children?: ReactNode
    textCenter?: boolean
}

export function Slidecard(props: slidecardProps) {
    return (
        <div className="relative h-full w-full">
            <img
                src={props.image}
                alt="image 2"
                className="h-screen w-full object-cover"
            />
            <div className={`absolute inset-0 grid h-full w-full items-center ${props.textCenter ? 'text-center' : ''} bg-black/75`}>
                <div className={`w-3/4   ${props.textCenter ? 'm-auto' : 'pl-12 md:w-2/4 md:pl-20 lg:pl-32'}`}>
                    <Typography
                        variant="h1"
                        color="white"
                        className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                    >
                        {props.title}
                    </Typography>
                    <Typography
                        variant="lead"
                        color="white"
                        className="mb-12 opacity-80"
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                    >
                        {props.description}
                    </Typography>
                   {props.children}
                </div>
            </div>
        </div>
    )
}

export default Slidecard
