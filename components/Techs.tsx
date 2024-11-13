import React, { useEffect } from "react"
import { useTheme } from "next-themes"

import styles from "../app/homepage.module.css"

export function Techs() {
    const { theme } = useTheme() // Usa o hook useTheme para obter o tema ativo
    const [themeState, setThemeState] = React.useState("dark")

    useEffect(() => {
        if (theme) {
            setThemeState(theme)
        }
    }, [theme])

    return (
        <>
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
                    <img src="tech-logos/styledcomponents.svg" alt="html" />
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
                    <img src="video-logos/aftereffects.png" alt="html" />
                </div>
                <div className={`${styles["box-tech"]} `} key="video-2">
                    <p>Illustrator</p>
                    <img src="video-logos/illustrator.png" alt="html" />
                </div>
                <div className={`${styles["box-tech"]} `} key="video-3">
                    <p>PhotoShop</p>
                    <img src="video-logos/aftereffects.png" alt="html" />
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
        </>
    )
}

export default Techs
