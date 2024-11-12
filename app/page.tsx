"use client"

import React, { useEffect } from "react"
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
import CarouselTransition from "@/components/MyComponent"
import Link from "next/link"
import { useTheme } from "next-themes"
import AnimatedBanner from "@/components/AnimatedBanner"
import BannerTop from "@/components/BannerTop"

const Home = () => {
    const { theme } = useTheme() // Usa o hook useTheme para obter o tema ativo
    const [themeState, setThemeState] = React.useState("dark")

    useEffect(() => {
        if (theme) {
            setThemeState(theme)
        }
    }, [theme])

    return (
        <div>
            <BannerTop />

            <section>
                <Card className="m-4 mt-10 mb-10 lg:col-span-3 relative">
                    <CardHeader>
                        <CardTitle>Welcome</CardTitle>
                        <CardDescription>
                            <b> Alessandro Cunha Lorenz</b> - Front End
                            Developer
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="max-w-full prose dark:prose-invert">
                        I am a Front End Developer with a background in motion
                        graphics and video editing. Before transitioning into a
                        developer role, I gained valuable experience working as
                        a motion graphics and video editor on an educational TV
                        program. This background in motion graphics and video
                        editing has enhanced my understanding of visual elements
                        and user experience in my current role as a Front End
                        Developer.
                    </CardContent>
                </Card>

                <div className="relative">
                    <div
                        className={`${styles.cards} ${
                            styles[themeState === "light" ? "light" : "dark"]
                        } mb-4 mt-4`}
                    >
                        <div className={`${styles["box-tech"]} `} key="0">
                            <p>HTML5</p>
                            <img src="tech-logos/html.svg" alt="html" />
                        </div>

                        <div className={`${styles["box-tech"]} `} key="1">
                            <p>CSS3</p>
                            <img src="tech-logos/css.svg" alt="html" />
                        </div>

                        <div className={`${styles["box-tech"]} `} key="2">
                            <p>JavaScript</p>
                            <img src="tech-logos/javascript.svg" alt="html" />
                        </div>

                        <div className={`${styles["box-tech"]} `} key="3">
                            <p>TypeScript</p>
                            <img src="tech-logos/typescript.svg" alt="html" />
                        </div>

                        <div className={`${styles["box-tech"]} `} key="4">
                            <p>React.js</p>
                            <img src="tech-logos/react.svg" alt="html" />
                        </div>

                        <div className={`${styles["box-tech"]} `} key="5">
                            <p>Next.js</p>
                            <img src="tech-logos/nextjs.svg" alt="html" />
                        </div>

                        <div className={`${styles["box-tech"]} `} key="6">
                            <p>CSS-in-JS</p>
                            <img
                                src="tech-logos/styledcomponents.svg"
                                alt="html"
                            />
                        </div>

                        <div className={`${styles["box-tech"]} `} key="7">
                            <p>Material UI</p>
                            <img src="tech-logos/materialui.svg" alt="html" />
                        </div>

                        <div className={`${styles["box-tech"]} `} key="8">
                            <p>Tailwind CSS</p>
                            <img src="tech-logos/tailwindcss.svg" alt="html" />
                        </div>

                        <div className={`${styles["box-tech"]} `} key="11">
                            <p>Redux</p>
                            <img src="tech-logos/redux.svg" alt="html" />
                        </div>
                        <div className={`${styles["box-tech"]} `} key="15">
                            <p>Storybook</p>
                            <img src="tech-logos/storybook.svg" alt="html" />
                        </div>

                        <div className={`${styles["box-tech"]} `} key="16">
                            <p>SASS</p>
                            <img src="tech-logos/sass.svg" alt="html" />
                        </div>

                        <div className={`${styles["box-tech"]} `} key="17">
                            <p>Figma</p>
                            <img src="tech-logos/figma.svg" alt="html" />
                        </div>
                    </div>
                    <div
                        className={`${styles.cards} mb-8 mt-4 ${
                            styles[themeState === "light" ? "light" : "dark"]
                        } ${styles["video-logos"]}`}
                    >
                        <div className={`${styles["box-tech"]} `} key="video-0">
                            <p>Premiere</p>
                            <img src="video-logos/premiere.png" alt="html" />
                        </div>
                        <div className={`${styles["box-tech"]} `} key="video-1">
                            <p>AfterEffects</p>
                            <img
                                src="video-logos/aftereffects.png"
                                alt="html"
                            />
                        </div>
                        <div className={`${styles["box-tech"]} `} key="video-2">
                            <p>Illustrator</p>
                            <img src="video-logos/illustrator.png" alt="html" />
                        </div>
                        <div className={`${styles["box-tech"]} `} key="video-3">
                            <p>PhotoShop</p>
                            <img
                                src="video-logos/aftereffects.png"
                                alt="html"
                            />
                        </div>

                        <div className={`${styles["box-tech"]} `} key="video-4">
                            <p>FinalCut</p>
                            <img src="video-logos/finalcut.png" alt="html" />
                        </div>

                        <div className={`${styles["box-tech"]} `} key="video-5">
                            <p>DaVinci Resolve</p>
                            <img src="video-logos/davinci.png" alt="html" />
                        </div>

                        <div className={`${styles["box-tech"]} `} key="video-6">
                            <p>Blender</p>
                            <img src="video-logos/blender.png" alt="html" />
                        </div>
                    </div>
                    <AccordionBasicExample defaultOpenId={["2"]}>
                        <AccordionItem
                            id="2"
                            title="Description"
                            activeElement={"true"}
                            handleClick={function (id: string): void {}}
                            isFirstChild={true}
                            isLastChild={false}
                        >
                            <Card className="mx-0 lg:col-span-3 lg:mr-0 relative p-6">
                                <CardContent className="max-w-full prose dark:prose-invert  p-0 pt-2">
                                    This website showcases my portfolio of
                                    videos created using Adobe AfterEffects,
                                    Illustrator, PhotoShop, and Premiere.
                                </CardContent>
                                <CardContent className="max-w-full prose dark:prose-invert  p-0 pt-2">
                                    I used a stack comprising Typescript,
                                    ReactJs, NextJs, CSS modules, Tailwind,
                                    Prisma, and CI/CD with Vercel. The homepage,
                                    designed with CSS modules, employs a best
                                    practice to isolate styles effectively and
                                    Iused some https://ui.shadcn.com/ components
                                    to speed up the development process.
                                </CardContent>
                            </Card>
                            <AnimatedBanner />
                        </AccordionItem>
                    </AccordionBasicExample>

                    <div className="box">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>

                <div className="mt-8 mb-8">
                    <CarouselTransition />
                </div>

                <AccordionBasicExample>
                    <AccordionItem
                        id="3"
                        title="Video editing and motion graphics portfolio"
                        activeElement={null}
                        handleClick={function (id: string): void {}}
                        isFirstChild={false}
                        isLastChild={false}
                    >
                        <div className="prose dark:prose-invert w-full max-w-full grid grid-cols-1 sm:grid-cols-2  gap-4 m-auto ">
                            <Card className="cards-portfolio m-auto col-span-1 sm:col-span-2  w-full ">
                                <CardHeader className="cards-portfolio-header p-3 sm:p-6">
                                    <CardTitle className="portfolio-card-title text-lg">
                                        Portfolio
                                    </CardTitle>
                                    <CardDescription className="portfolio-card-description text-sm  p-3"></CardDescription>
                                </CardHeader>
                                <CardContent className="card-content prose dark:prose-invert flex m-auto w-full max-w-full  p-3 sm:p-6">
                                    <iframe
                                        className="iframe-video m-auto"
                                        src="https://www.youtube.com/embed/5NlHDliKrmc"
                                        title="Demo Reel"
                                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </CardContent>
                                <CardFooter className="portfolio-card-footer text-sm  p-3 sm:p-6">
                                    Demo Reel{" "}
                                    <small>
                                        Rock&apos; Roll - Led Zeppelin
                                    </small>
                                </CardFooter>
                            </Card>
                            <Card className="cards-portfolio m-auto w-full">
                                <CardHeader className="cards-portfolio-header">
                                    <CardTitle className="portfolio-card-title text-lg">
                                        Video Editing and Motion
                                    </CardTitle>
                                    <CardDescription className="portfolio-card-description text-sm"></CardDescription>
                                </CardHeader>
                                <CardContent className="card-content prose dark:prose-invert flex justify-center w-full max-w-full">
                                    <iframe
                                        className="iframe-video"
                                        src="https://www.youtube.com/embed/flZ2ZFfjgLw"
                                        title="Mundo da Leirura - Covil dos Mandriões"
                                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </CardContent>
                                <CardFooter className="portfolio-card-footer text-sm">
                                    {" "}
                                    Stinger Rádio UPF
                                </CardFooter>
                            </Card>

                            <Card className="cards-portfolio m-auto  w-full">
                                <CardHeader className="cards-portfolio-header">
                                    <CardTitle className="portfolio-card-title text-lg">
                                        Video Editing and Motion
                                    </CardTitle>
                                    <CardDescription className="portfolio-card-description text-sm"></CardDescription>
                                </CardHeader>
                                <CardContent className="card-content prose dark:prose-invert flex justify-center w-full max-w-full">
                                    <iframe
                                        className="iframe-video"
                                        src="https://www.youtube.com/embed/hKzpu5Or36I"
                                        title="VT UPF Idiomas"
                                        frameBorder="0"
                                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </CardContent>
                                <CardFooter className="portfolio-card-footer text-sm">
                                    Promo UPF Idiomas
                                </CardFooter>
                            </Card>
                            <Card className="cards-portfolio m-auto  w-full">
                                <CardHeader className="cards-portfolio-header">
                                    <CardTitle className="portfolio-card-title text-lg">
                                        Video Editing and Motion
                                    </CardTitle>
                                    <CardDescription className="portfolio-card-description text-sm"></CardDescription>
                                </CardHeader>
                                <CardContent className="card-content prose dark:prose-invert flex justify-center w-full max-w-full">
                                    <iframe
                                        className="iframe-video"
                                        src="https://www.youtube.com/embed/jNd45h2vcBs"
                                        title="Chamada Hora da Notícia"
                                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </CardContent>
                                <CardFooter className="portfolio-card-footer text-sm">
                                    Promo Hora da Notícia
                                </CardFooter>
                            </Card>

                            <Card className="cards-portfolio m-auto  w-full">
                                <CardHeader className="cards-portfolio-header">
                                    <CardTitle className="portfolio-card-title text-lg">
                                        Video Editing and Motion
                                    </CardTitle>
                                    <CardDescription className="portfolio-card-description text-sm"></CardDescription>
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
                                    Promo Facebook UPFTV
                                </CardFooter>
                            </Card>

                            <Card className="cards-portfolio m-auto col-span-1 sm:col-span-2  w-full">
                                <CardHeader className="cards-portfolio-header">
                                    <CardTitle className="portfolio-card-title text-lg">
                                        Video Editing and Motion
                                    </CardTitle>
                                    <CardDescription className="portfolio-card-description text-sm"></CardDescription>
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
                                    Institutional Alyaprime
                                </CardFooter>
                            </Card>
                        </div>
                    </AccordionItem>
                    <AccordionItem
                        id="4"
                        title="Dev Projects"
                        activeElement={"true"}
                        handleClick={function (id: string): void {}}
                        isFirstChild={false}
                        isLastChild={true}
                    >
                        <Card className="mx-0 mb-4 lg:col-span-3 lg:mr-0 relative ">
                            <CardContent className="max-w-full prose dark:prose-invert mt-4">
                                I have professional hands-on experience in Front
                                End Development, utilizing technologies such as
                                HTML/CSS, JavaScript, React, NextJs, Vue, SCSS,
                                Webpack, Node, and MongoDB. I started my
                                developer career as a Back End Developer but
                                shifted to the Front End due to my motion
                                graphics background.
                                <br></br>I enjoy being at the forefront of
                                innovation and I am fascinated by new
                                technologies and the endless possibilities they
                                offer to make the world a better place.
                            </CardContent>

                            <CardFooter>
                                In this project, I also included is a system I
                                developed while undertaking a Next.js course.
                                This system serves as a Ticket Services
                                platform, enabling the creation of tickets or
                                tasks related to ongoing project activities. A
                                user can create, edit, delete, and mark as
                                completed a ticket. It serves as my
                                comprehensive to-do list, guiding the evolution
                                of the system.
                            </CardFooter>
                            <div className="box">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </Card>

                        <Link
                            href="/ticket-app"
                            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5 px-7 rounded-lg bg-white text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none gap-3 m-auto w-full block"
                            key="Tickets App"
                        >
                            Tickets App
                        </Link>
                    </AccordionItem>
                </AccordionBasicExample>
            </section>
        </div>
    )
}

export default Home
