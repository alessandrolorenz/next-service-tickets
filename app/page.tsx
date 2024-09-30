"use client"

import React from "react"
import styles from "./homepage.module.css"
import AccordionBasicExample from "@/components/Accordions"
import AccordionItem from "@/components/AccordionItem"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

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
                        isFirstChild={true}
                        isLastChild={false}
                    >
                        <Card className="mx-0 mb-4 lg:col-span-3 lg:mr-0">
                            <CardHeader>
                                <CardTitle>Welcome </CardTitle>
                                <CardDescription>
                                    Before transitioning into a developer role,
                                    I gained valuable experience working as a
                                    motion graphics and video editor on an
                                    educational TV program. This background in
                                    motion graphics and video editing has
                                    enhanced my understanding of visual elements
                                    and user experience in my current role as a
                                    Front End Developer.
                                    <br></br>I have professional hands-on
                                    experience in Front End Development,
                                    utilizing technologies such as HTML/CSS,
                                    JavaScript, React, Vue, SCSS, Webpack, Node,
                                    and MongoDB. I started my career as a Back
                                    End Developer but shifted to the Front End
                                    due to my motion graphics background.
                                    <br></br>I enjoy being at the forefront of
                                    innovation and I am fascinated by new
                                    technologies and the endless possibilities
                                    they offer to make the world a better place.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="max-w-full prose dark:prose-invert">
                                This project was developed using a stack
                                comprising Typescript, ReactJs, NextJs, CSS
                                modules, Tailwind, Prisma, and CI/CD with
                                Vercel. The homepage, designed with CSS modules,
                                employs a best practice to isolate styles
                                effectively and Iused some
                                https://ui.shadcn.com/ components to speed up
                                the development process. It showcases my
                                portfolio of motion graphics created using Adobe
                                AfterEffects, Illustrator, PhotoShop, and
                                Premiere.
                                <br></br>
                                This system serves as a Ticket Services
                                platform, enabling the creation of tickets or
                                tasks related to ongoing project activities. It
                                serves as my comprehensive to-do list, guiding
                                the evolution of the system.
                            </CardContent>
                            <CardFooter>
                                Within the logged-in section, there is a simple
                                system I developed while undertaking a Next.js
                                course. You can login as a guest user to view:
                                name = visitor, password = 123456.
                            </CardFooter>
                        </Card>
                    </AccordionItem>
                    <AccordionItem
                        id="2"
                        title="Video editing and motion graphics portfolio"
                        activeElement={null}
                        handleClick={function (id: string): void {}}
                        isFirstChild={false}
                        isLastChild={true}
                    >
                        <div className="prose dark:prose-invert w-full max-w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-auto ">
                            <Card className="cards-portfolio m-auto">
                                <CardHeader className="cards-portfolio-header">
                                    <CardTitle className="portfolio-card-title text-lg">
                                        Programa Mundo da Leirura na TV
                                    </CardTitle>
                                    <CardDescription className="portfolio-card-description text-sm">
                                        Covil dos Mandriões / UPFTV-Canal Futura
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="card-content prose dark:prose-invert flex justify-center">
                                    <iframe
                                        className="iframe-video"
                                        src="https://www.youtube.com/embed/zu4f-hAqvVg"
                                        title="Mundo da Leirura - Covil dos Mandriões"
                                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </CardContent>
                                <CardFooter className="portfolio-card-footer text-sm">
                                    Programa Infantil Mundo da Leitura na TV
                                    produzido pela UPFTV e Canal Futura. Projeto
                                    que tive a honra de fazer parte por 10 anos.
                                </CardFooter>
                            </Card>

                            <Card className="cards-portfolio m-auto">
                                <CardHeader className="cards-portfolio-header">
                                    {/* <div className="flex justify-between mb-3">
                                        <TicketStatusBadge status="OPEN" />
                                    <TicketPriority priority="HIGH" />
                                    </div> */}
                                    <CardTitle className="portfolio-card-title text-lg">
                                        Contação de História
                                    </CardTitle>
                                    <CardDescription className="portfolio-card-description text-sm">
                                        História do Homem do Cairo
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="card-content prose dark:prose-invert flex justify-center">
                                    <iframe
                                        className="iframe-video"
                                        src="https://www.youtube.com/embed/ZoNVUIQghdc"
                                        title="HISTORIA HOMEM DO CAIRO 01"
                                        frameBorder="0"
                                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </CardContent>
                                <CardFooter className="portfolio-card-footer text-sm">
                                    Quadro do programa no qual eram produzidas
                                    diversas histórias em diversos formatos.
                                </CardFooter>
                            </Card>
                            <Card className="cards-portfolio m-auto">
                                <CardHeader className="cards-portfolio-header">
                                    {/* <div className="flex justify-between mb-3">
                                        <TicketStatusBadge status="OPEN" />
                                    <TicketPriority priority="HIGH" />
                                    </div> */}
                                    <CardTitle className="portfolio-card-title text-lg">
                                        Programa Mundo da Leituta na TV
                                    </CardTitle>
                                    <CardDescription className="portfolio-card-description text-sm">
                                        Quadro Oficina: Fantoche - UPFTV / Canal
                                        Futura
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="card-content prose dark:prose-invert flex justify-center">
                                    <iframe
                                        className="iframe-video"
                                        src="https://www.youtube.com/embed/LTZ2ZztZ2oU"
                                        title="OFICINA 285 FANTOCHE"
                                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </CardContent>
                                <CardFooter className="portfolio-card-footer text-sm">
                                    Quadro do programa no qual o personagem
                                    Mil-Faces.
                                </CardFooter>
                            </Card>

                            <Card className="cards-portfolio m-auto">
                                <CardHeader className="cards-portfolio-header">
                                    {/* <div className="flex justify-between mb-3">
                                        <TicketStatusBadge status="OPEN" />
                                    <TicketPriority priority="HIGH" />
                                    </div> */}
                                    <CardTitle className="portfolio-card-title text-lg">
                                        Videos Adobe AfterEffects
                                    </CardTitle>
                                    <CardDescription className="portfolio-card-description text-sm">
                                        Videos criados
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="card-content prose dark:prose-invert flex justify-center w-full max-w-full">
                                    <iframe
                                        className="iframe-video"
                                        src="https://www.youtube.com/embed/f-JBNirfbNQ"
                                        title="Chamada Facebook"
                                        frameBorder="0"
                                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </CardContent>
                                <CardFooter className="portfolio-card-footer text-sm">
                                    Updated:{" "}
                                </CardFooter>
                            </Card>

                            <Card className="cards-portfolio m-auto">
                                <CardHeader className="cards-portfolio-header">
                                    {/* <div className="flex justify-between mb-3">
                                        <TicketStatusBadge status="OPEN" />
                                    <TicketPriority priority="HIGH" />
                                    </div> */}
                                    <CardTitle className="portfolio-card-title text-lg">
                                        Videos Adobe AfterEffects
                                    </CardTitle>
                                    <CardDescription className="portfolio-card-description text-sm">
                                        Videos criados
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="card-content prose dark:prose-invert flex justify-center w-full max-w-full">
                                    <iframe
                                        className="iframe-video"
                                        src="https://www.youtube.com/embed/kNSwVQU8hd8"
                                        title="Institucional Alyaprime - Alyaprev"
                                        frameBorder="0"
                                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </CardContent>
                                <CardFooter className="portfolio-card-footer text-sm">
                                    Updated:{" "}
                                </CardFooter>
                            </Card>
                        </div>
                    </AccordionItem>
                </AccordionBasicExample>
            </section>
        </div>
    )
}

export default Home
