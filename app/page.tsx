"use client"

import React from "react"
import "./homepage.css"
import AccordionBasicExample from "@/components/Accordions"

const Home = async () => {
    return (
        <div>
            <section
                className="section main-banner"
                id="top"
                data-section="section1"
            >
                <video
                    id="bg-video"
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

                <div className="video-overlay header-text">
                    <div className="caption">
                        <h6>
                            Portfolio website with Typescript, ReactJs, NextJs,
                            Tailwind, Prisma, CI/CD
                        </h6>
                        <h2>
                            <em>ALESSANDRO</em> LORENZ
                        </h2>
                        <div className="main-button">
                            <div className="scroll-to-section">
                                <a href="https://github.com/alessandrolorenz/next-service-tickets">
                                    GITHUB REPOSITORY
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <AccordionBasicExample />
            </section>
        </div>
    )
}

export default Home
