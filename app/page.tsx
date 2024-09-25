"use client"

import React from "react"
import styles from "./homepage.module.css"
import AccordionBasicExample from "@/components/Accordions"
import AccordionItem from "@/components/AccordionItem"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import TicketStatusBadge from "@/components/TicketStatusBadge"
import TicketPriority from "@/components/TicketPriority"
import ReactMarkDown from 'react-markdown'


const Home = () => {
    return (
        <div>
            <section
                className={`${styles.section} ${styles["main-banner"]}`}
                id={styles.top}
                data-section="section1"
            >
                <video
                    id={`${styles["bg-video"]}`}
                    width="320"
                    height="240"
                    controls
                    preload="none"
                    autoPlay
                    muted
                >
                    <source src="portfolio.mp4" type="video/mp4" />
                    <track
                        src="/path/to/captions.vtt"
                        kind="subtitles"
                        srcLang="en"
                        label="English"
                    />
                    Your browser does not support the video tag.
                </video>

                <div
                    className={`${styles["video-overlay"]} ${styles["header-text"]}`}
                >
                    <div className={styles.caption}>
                        <h6>
                            Video Editing and Motion Graphics Portfolio Website
                        </h6>
                        <h2>
                            <em>ALESSANDRO</em> LORENZ
                        </h2>
                        <div className={`${styles["main-button"]} `}>
                            <div className={`${styles["scroll-to-section"]} `}>
                                <a href="https://github.com/alessandrolorenz/next-service-tickets">
                                    GITHUB REPOSITORY
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <AccordionBasicExample>
                    <AccordionItem
                        id="1"
                        title="Project description"
                        activeElement={null}
                        handleClick={function (id: string): void {}}
                    >
                        <strong>
                            This project was developed using a stack comprising
                            Typescript, ReactJs, NextJs, CSS modules, Tailwind,
                            Prisma, and CI/CD with Vercel.
                        </strong>
                        <br />
                        {``}
                        The homepage, designed with CSS modules, employs a best
                        practice to isolate styles effectively. It showcases my
                        portfolio of motion graphics created using Adobe
                        AfterEffects, Illustrator, PhotoShop, and Premiere.
                        <br />
                        Within the logged-in section, there is a simple system I
                        developed while undertaking a Next.js course. This
                        system serves as a Ticket Services platform, enabling
                        the creation of tickets or tasks related to ongoing
                        project activities. It serves as my comprehensive to-do
                        list, guiding the evolution of the system.
                    </AccordionItem>
                    <AccordionItem
                        id="2"
                        title="Another section"
                        activeElement={null}
                        handleClick={function (id: string): void {}}
                    >
                        <div className="prose dark:prose-invert w-full max-w-full flex ">
                            <Card className="w-2/4">
                                <CardHeader>
                                    <div className="flex justify-between mb-3">
                                        {/* <TicketStatusBadge status="OPEN" />
                                    <TicketPriority priority="HIGH" /> */}
                                    </div>
                                    <CardTitle>
                                        Contação de História Programa Infantil Mundo da Leitura
                                    </CardTitle>
                                    <CardDescription>
                                        História do Homem do Cairo (creditos ao autor)
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="prose dark:prose-invert flex justify-between">
                                    <iframe
                                        className="w-full"
                                        src="https://www.youtube.com/embed/ZoNVUIQghdc"
                                        title="HISTORIA HOMEM DO CAIRO 01"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </CardContent>
                                <CardFooter>Updated: </CardFooter>
                            </Card>
                            <Card className="w-2/4">
                                <CardHeader>
                                    <div className="flex justify-between mb-3">
                                        {/* <TicketStatusBadge status="OPEN" />
                                    <TicketPriority priority="HIGH" /> */}
                                    </div>
                                    <CardTitle>
                                        Videos Adobe AfterEffects
                                    </CardTitle>
                                    <CardDescription>
                                        Videos criados
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="prose dark:prose-invert flex justify-between w-full max-w-full">
                                    <iframe
                                        className="w-full"
                                        src="https://www.youtube.com/embed/f-JBNirfbNQ"
                                        title="Chamada Facebook"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </CardContent>
                                <CardFooter>Updated: </CardFooter>
                            </Card>
                            <Card className="w-2/4">
                                <CardHeader>
                                    <div className="flex justify-between mb-3">
                                        {/* <TicketStatusBadge status="OPEN" />
                                    <TicketPriority priority="HIGH" /> */}
                                    </div>
                                    <CardTitle>
                                        Videos Adobe AfterEffects
                                    </CardTitle>
                                    <CardDescription>
                                        Videos criados
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="prose dark:prose-invert flex justify-between w-full max-w-full">
                                    <iframe
                                        className="w-full"
                                        src="https://www.youtube.com/embed/kNSwVQU8hd8"
                                        title="Institucional Alyaprime - Alyaprev"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </CardContent>
                                <CardFooter>Updated: </CardFooter>
                            </Card>
                        </div>
                    </AccordionItem>
                    <AccordionItem
                        id="3"
                        title="More info"
                        content="This is the content of more info."
                        activeElement={null}
                        handleClick={function (id: string): void {}}
                    />
                </AccordionBasicExample>
            </section>
        </div>
    )
}

export default Home
