"use client"
import React from "react"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const PresentationApp = () => {
    return (
        <div className=" w-full">
            <div className="grid gap-4 md:grid-cols-1 px-2 mt-8">
                <div>
                    <Card className="mx-0 mb-4 lg:col-span-3 lg:mr-0">
                        <CardHeader>
                            <CardTitle className="mb-6 leading-8">
                                This project was developed using a stack
                                comprising Typescript, ReactJs, NextJs, CSS
                                modules, Tailwind, Prisma, and CI/CD with
                                Vercel.
                               
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="max-w-full prose dark:prose-invert">
                        It includes a CRUD system, and I have added a
                            feature to allow the user to change the theme.The
                            system is also integrated with NextAuth for
                            authentication.
                            <br />
                            
                            This system serves as a Ticket Services platform,
                            enabling the creation of tickets or tasks related to
                            ongoing project activities.
                            <CardDescription className="">
                                 It serves
                                as my comprehensive to-do list, guiding the
                                evolution of the system.
                            </CardDescription>
                        </CardContent>
                        <CardFooter>
                            Within the logged-in section, there is a simple
                            system I developed while undertaking a Next.js
                            course. 
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default PresentationApp
