"use client"

import React, { useState, ReactNode, useEffect } from "react"
import styles from "../app/homepage.module.css"
import { CardTitle } from "@/components/ui/card"
import { useTheme } from "next-themes"

const BannerTop = (): JSX.Element => {
    const { theme } = useTheme()

    return (
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
                className={`${styles["video-overlay"]} ${
                    styles["header-text"]
                } ${styles[theme === "light" ? "light" : "dark"]}`}
            >
                <div className={styles.caption}>
                    <CardTitle className="uppercase">
                        FRONT END - HTML/CSS JAVASCRIPT - Video Editing and
                        Motion Graphics
                    </CardTitle>
                    <h2>
                        <em>ALESSANDRO</em> LORENZ
                    </h2>
                    <div className={`${styles["main-button"]} `}>
                        <div className={`${styles["scroll-to-section"]} `}>
                            <a href="https://github.com/alessandrolorenz">
                                GITHUB PROFILE
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BannerTop
