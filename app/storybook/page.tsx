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

import Link from "next/link"
import Image from "next/image"

import { Box } from "@alessandrolorenz/learnstorybook-design-system/dist/components/Box"
import { Chat } from "@alessandrolorenz/learnstorybook-design-system/dist/components/Chat"

const Storybook = () => {
    return (
        <div className=" w-full">
            <Link
                href="/"
                className="navbar-link 
                            cursor-default  hover:text-primary/60"
                key="navbar-link"
            >
                Back to Home
            </Link>
            <Card className="cards-portfolio techs m-auto w-full">
                <CardHeader className="cards-portfolio-header">
                    <CardTitle className="portfolio-card-title text-lg">
                        Storybook - Design System Components
                    </CardTitle>
                    <CardDescription className="portfolio-card-description text-sm">
                        Learning exercise to understand the importance of
                        creating a design system to maintain consistency in
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
                    In this project, I developed a simple design system using
                    Storybook to demonstrates the creation of components and
                    their documentation. The Box component is a flex container
                    that wraps its children and allows the user to set the
                    layout direction, margins, paddings, and much more.
                    <br></br> <br></br>
                    The Chat component is an AI-powered chatbot built with
                    Node.js and Express, integrated with Cohere&apos;s API for
                    intelligent responses. Designed for seamless interaction, it
                    supports real-time conversations and can be deployed on
                    Vercel for global accessibility. The chatbot ensures smooth
                    communication while maintaining context-aware replies for an
                    improved user experience. If you want to use it, send me the
                    origin so that I can add it to the allowed origins.
                    <br></br> <br></br> This project is published on Chromatic
                    and npm.
                    <br></br> <br></br>
                    You can install it in any project using :
                </CardFooter>
                <Link
                    href="https://62b20f775e4ea3f8320af670-gymtzahzst.chromatic.com/?path=/story/layout-box--red"
                    className="hover:text-primary/60  align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5 px-7 rounded-lg bg-white text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none gap-3 m-4 mt-auto block"
                    key="Tickets App"
                >
                    Go to Chromatic Storybook View Page
                </Link>
                <CardFooter>
                    <code
                        style={{
                            background: "blueviolet",
                            padding: "10px",
                            margin: "auto",
                        }}
                    >
                        npm i @alessandrolorenz/learnstorybook-design-system
                    </code>
                </CardFooter>
                <CardFooter>
                    Additionally, the Box and Chat components from this design
                    system can be used to create flexible layouts and chat
                    interfaces. Here is an example of how to use them:
                </CardFooter>
                <CardFooter>
                    <code
                        style={{
                            background: "blueviolet",
                            padding: "10px",
                            margin: "auto",
                        }}
                    >
                        import &#123; Box &#125; from
                        &quot;@alessandrolorenz/learnstorybook-design-system/dist/components/Box&quot;
                        <br />
                        import &#123; Chat &#125; from
                        &quot;@alessandrolorenz/learnstorybook-design-system/dist/components/Chat&quot;
                        <br />
                        &emsp;const Home = () =&gt; &#123; <br />
                        &emsp;&emsp;&emsp;&emsp;return ( <br />
                        &emsp;&emsp;&emsp;&emsp;&emsp;&lt;Box
                        <br />
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;jContent=&quot;center&quot;
                        <br />
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;aItem=&quot;center&quot;
                        <br />
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bgColor=&quot;white&quot;
                        <br />
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;bRadius=&quot;10px&quot;
                        border=&quot;1px
                        <br />
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;solid
                        gray&quot; m=&quot;auto&quot;
                        <br />
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;p=&quot;10px&quot;
                        w=&quot;50%&quot; &gt;
                        <br />
                        <br />
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;Chat
                        /&gt;
                        <br />
                        &emsp;&emsp;&emsp;&emsp;&emsp;&lt;/Box&gt;
                        <br />
                        &emsp;&emsp;&emsp;&emsp;); <br />
                        &emsp;&emsp;&emsp;&emsp;&#125; <br />
                    </code>
                </CardFooter>
                <Box
                    jContent="center"
                    aItem="center"
                    bgColor="white"
                    bRadius="10px"
                    border="1px solid gray"
                    m="50px auto"
                    p="10px"
                    w="50%"
                >
                    <Chat></Chat>
                </Box>
   
            </Card>
        </div>
    )
}

export default Storybook
