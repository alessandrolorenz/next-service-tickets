"use client"

import React from "react"
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
import Image from "next/image"
import AnimatedBanner from "@/components/AnimatedBanner"
import BannerTop from "@/components/BannerTop"
import Techs from "@/components/Techs"
import { MonitorCheck } from "lucide-react"

const Home = () => {
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
                </Card>

                <div className="relative">
                    <Techs />
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
                                    For this website I used a stack comprising Typescript,
                                    ReactJs, NextJs, CSS modules, Tailwind,
                                    Prisma, and CI/CD with Vercel. The homepage,
                                    designed with CSS modules, employs a best
                                    practice to isolate styles effectively and
                                    Iused some shadcn components
                                    to speed up the development process.
                                </CardContent>
                            </Card>
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

                {/* <div className="mt-8 mb-8">
                    <CarouselTransition />
                </div> */}

<div className="relative">
                            <div className="relative prose dark:prose-invert w-full max-w-full grid grid-cols-1 sm:grid-cols-2  gap-4 m-auto ">
                                <Card className="cards-portfolio techs m-auto w-full">
                                    <CardHeader className="cards-portfolio-header">
                                        <CardTitle className="portfolio-card-title text-lg">
                                            Service Tickets App
                                        </CardTitle>
                                        <CardDescription className="portfolio-card-description text-sm"></CardDescription>
                                    </CardHeader>
                                    <MonitorCheck className="hover:cursor-pointer hover:text-primary m-auto w-52 h-52" />

                                    <CardFooter>
                                        This project I developed while
                                        undertaking a Next.js course is a system
                                        that serves as a Ticket Services
                                        platform, enabling the creation of
                                        tickets or tasks related to ongoing
                                        project activities. A user can create,
                                        edit, delete, and mark as completed a
                                        ticket.
                                    </CardFooter>

                                    <Link
                                        href="/ticket-app"
                                        className=" align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5 px-7 rounded-lg bg-white text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none gap-3 m-4 mt-auto block"
                                        key="Tickets App"
                                    >
                                        Tickets App
                                    </Link>
                                </Card>

                                <Card className="cards-portfolio techs m-auto w-full">
                                    <CardHeader className="cards-portfolio-header">
                                        <CardTitle className="portfolio-card-title text-lg">
                                            Storybook - Design System Components
                                        </CardTitle>
                                        <CardDescription className="portfolio-card-description text-sm">
                                            Learning exercise to understand the
                                            importance of creating a design
                                            system to maintain consistency in
                                            design and development.
                                        </CardDescription>
                                    </CardHeader>
                                    <Image
                                        className="m-auto mt-4 mb-4"
                                        src="/tech-logos/storybook.svg"
                                        alt="Next.js"
                                        width={150}
                                        height={150}
                                    />
                                    <CardFooter>
                                        In this project, I developed a simple
                                        design system using Storybook to
                                        demonstrates the creation of components
                                        and their documentation. The
                                        ControlContainer component is a flex
                                        container that wraps its children and
                                        allows the user to set the layout
                                        direction, margins, paddings, and much
                                        more. This project is published on
                                        Chromatic and npm.
                                        <br></br>
                                        You can install it in any project using
                                        :
                                    </CardFooter>
                                    <CardFooter>
                                        <code
                                            style={{
                                                background: "blueviolet",
                                                padding: "10px",
                                            }}
                                        >
                                            npm i
                                            @alessandrolorenz/learnstorybook-design-system
                                        </code>
                                    </CardFooter>

                                    <CardFooter>
                                        <code
                                            style={{
                                                background: "blueviolet",
                                                padding: "10px",
                                            }}
                                        >
                                            import &#123; ControlContainer
                                            &#125; from
                                            &quot;alessandrolorenz/learnstorybook-design-system&quot;
                                            <br />
                                            &emsp;const Home = () =&gt; &#123;{" "}
                                            <br />
                                            &emsp;&emsp;&emsp;&emsp;return ({" "}
                                            <br />
                                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;ControlContainer
                                            bgColor=&quot;white&quot;
                                            bRadius=&quot;10px&quot;
                                            border=&quot;1px solid gray&quot;
                                            m=&quot;5px&quot; p=&quot;10px&quot;
                                            w=&quot;50%&quot; &gt;
                                            <br />
                                            &emsp;&emsp;&emsp;&emsp;&emsp;){" "}
                                            <br></br>
                                            &emsp;&emsp;&emsp;&emsp;&#125;{" "}
                                            <br />
                                        </code>
                                    </CardFooter>

                                    <Link
                                        href="https://62b20f775e4ea3f8320af670-kmbfxegayg.chromatic.com/?path=/story/layout-controlcontainer--control-box"
                                        className=" align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5 px-7 rounded-lg bg-white text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none gap-3 m-4 mt-auto block"
                                        key="Tickets App"
                                    >
                                        Learn Storybook
                                    </Link>
                                </Card>
                            </div>
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
          
                {/* <code
                    style={{
                        background: "midnightblue",
                        padding: "10px",
                        margin: "auto",
                        display: "block",
                        fontSize: "0.6rem",
                    }}
                >
                    Swap Component - React: swipe or click to change the image
                </code>
                <AnimatedBanner /> */}
            </section>
        </div>
    )
}

export default Home
