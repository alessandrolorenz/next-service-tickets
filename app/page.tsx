'use client'

import React from 'react'
import './homepage.css'
import AccordionBasicExample from '@/components/Accordions'

const Home = async () => {
    return (
        <div>
            <section
                className="section main-banner"
                id="top"
                data-section="section1"
            >
                <iframe
                    id="bg-video"
                    src="https://www.youtube.com/embed/5NlHDliKrmc?autoplay=1&loop=1&mute=1"
                    title="Portfolio Alessandro Lorenz"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>

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
