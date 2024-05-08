"use client"

import React from "react"
import styles from "./homepage.module.css"
import AccordionBasicExample from "@/components/Accordions"

const Home = async () => {
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
                <AccordionBasicExample />
            </section>
        </div>
    )
}

export default Home
