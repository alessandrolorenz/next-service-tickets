import React, { ReactNode, useEffect } from "react"
import { useTheme } from "next-themes"
import Link from "next/link"

import { Carousel, Typography, Button } from "@material-tailwind/react"
import CustomDialog from "./CustomDialog"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Slidecard } from "./SlideCard"
import styles from "../app/carousel.module.css"
import Slidecard1 from "./SlideCard1"
import Image from "next/image"

export function CarouselWithContent() {
    const { theme } = useTheme() // Usa o hook useTheme para obter o tema ativo
    const [themeState, setThemeState] = React.useState("dark")

    useEffect(() => {
        if (theme) {
            setThemeState(theme)
        }
    }, [theme])

    return (
        <Carousel
            className={`${styles.carousel} ${
                themeState === "light" ? `${styles.light}` : ""
            } rounded-xl`}
            placeholder={undefined}
        >
            <Slidecard
                textCenter={true}
                title={"MUNDO DA LEITURA - Canal Futura"}
                description={
                    "Programa Infantil Mundo da Leitura na TV produzido pela UPFTV e Canal Futura. Premiado projeto que tive a honra de fazer parte por 10 anos."
                }
                image={`mundo-da-leitura.png`}
            >
                <CustomDialog
                    title="Video Editing"
                    buttonTitle={"explore"}
                    content="Examples of some of my videos"
                >
                    <div className="prose dark:prose-invert w-full max-w-full grid grid-cols-1 sm:grid-cols-2 gap-4 m-auto ">
                        <Card className="cards-portfolio m-auto col-span-1 sm:col-span-2  w-full ">
                            <CardHeader className="cards-portfolio-header p-3 sm:p-6">
                                <CardTitle className="portfolio-card-title text-lg">
                                    Programa Mundo da Leitura / UPFTV - Canal Futura
                                </CardTitle>
                                <CardDescription className="portfolio-card-description text-sm  p-3"></CardDescription>
                            </CardHeader>
                            <CardContent className="card-content prose dark:prose-invert flex m-auto w-full max-w-full  p-3 sm:p-6">
                                <iframe
                                    className="iframe-video m-auto"
                                    src="https://www.youtube.com/embed/zu4f-hAqvVg"
                                    title="Mundo da Leitura - Covil dos Mandriões"
                                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </CardContent>
                            <CardFooter className="portfolio-card-footer text-sm  p-3 sm:p-6">
                                Covil dos Mandriões / UPFTV-Canal Futura
                            </CardFooter>
                        </Card>
                        <Card className="cards-portfolio m-auto col-span-1 sm:col-span-2  w-full ">
                            <CardHeader className="cards-portfolio-header p-3 sm:p-6">
                                <CardTitle className="portfolio-card-title text-lg">
                                    Programa Mundo da Leitura / UPFTV - Canal
                                    Futura
                                </CardTitle>
                                <CardDescription className="portfolio-card-description text-sm  p-3"></CardDescription>
                            </CardHeader>
                            <CardContent className="card-content prose dark:prose-invert flex m-auto w-full max-w-full  p-3 sm:p-6">
                                <iframe
                                    className="iframe-video m-auto"
                                    src="https://www.youtube.com/embed/jJCa3hq5dds"
                                    title="MUNDO DA LEITURA ESPECIAL DE NATAL SD"
                                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </CardContent>
                            <CardFooter className="portfolio-card-footer text-sm  p-3 sm:p-6">
                                Episódio 01 - UPFTV-Canal Futura
                            </CardFooter>
                        </Card>
                        <Card className="cards-portfolio m-auto col-span-1 sm:col-span-2  w-full ">
                            <CardHeader className="cards-portfolio-header p-3 sm:p-6">
                                <CardTitle className="portfolio-card-title text-lg">
                                    Programa Mundo da Leitura / UPFTV - Canal
                                    Futura
                                </CardTitle>
                                <CardDescription className="portfolio-card-description text-sm  p-3"></CardDescription>
                            </CardHeader>
                            <CardContent className="card-content prose dark:prose-invert flex m-auto w-full max-w-full  p-3 sm:p-6">
                                <iframe
                                    className="iframe-video m-auto"
                                    src="https://www.youtube.com/embed/i5bmV70blKU"
                                    title="Dramaturgia"
                                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </CardContent>
                            <CardFooter className="portfolio-card-footer text-sm  p-3 sm:p-6">
                                Dramaturgia
                            </CardFooter>
                        </Card>

                        <Card className="cards-portfolio m-auto w-full">
                            <CardHeader className="cards-portfolio-header  p-3 sm:p-6">
                                <CardTitle className="portfolio-card-title text-lg">
                                    Contação de História
                                </CardTitle>
                                <CardDescription className="portfolio-card-description text-sm"></CardDescription>
                            </CardHeader>
                            <CardContent className="card-content prose dark:prose-invert flex justify-center w-full max-w-full">
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
                            <CardFooter className="portfolio-card-footer text-sm  p-3 sm:p-6">
                                História do Homem do Cairo - Quadro do programa
                                no qual eram produzidas diversas histórias em
                                diversos formatos.
                            </CardFooter>
                        </Card>
                        <Card className="cards-portfolio m-auto w-full">
                            <CardHeader className="cards-portfolio-header  p-3 sm:p-6">
                                <CardTitle className="portfolio-card-title text-lg">
                                    Programa Mundo da Leitura na TV
                                </CardTitle>
                                <CardDescription className="portfolio-card-description text-sm"></CardDescription>
                            </CardHeader>
                            <CardContent className="card-content prose dark:prose-invert flex justify-center w-full max-w-full">
                                <iframe
                                    className="iframe-video"
                                    src="https://www.youtube.com/embed/LTZ2ZztZ2oU"
                                    title="OFICINA 285 FANTOCHE"
                                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </CardContent>
                            <CardFooter className="portfolio-card-footer text-sm p-3 sm:p-6">
                                Quadro Oficina: Fantoche - UPFTV / Canal Futura
                            </CardFooter>
                        </Card>
                    </div>
                </CustomDialog>
            </Slidecard>
            <Slidecard
                textCenter={true}
                title={"Video Editing"}
                description={"Portfolio com alguns dos meus trabalhos"}
                image={`https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80`}
            >
                <CustomDialog
                    title="Video Editing"
                    buttonTitle={"explore"}
                    content="Examples of some of my videos"
                >
                    <div className="prose dark:prose-invert w-full max-w-full grid grid-cols-1 sm:grid-cols-2 gap-4 m-auto">
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
                                <small>Rock&apos; Roll - Led Zeppelin</small>
                            </CardFooter>
                        </Card>
                        <Card className="cards-portfolio m-auto col-span-1 sm:col-span-2  w-full ">
                            <CardHeader className="cards-portfolio-header p-3 sm:p-6">
                                <CardTitle className="portfolio-card-title text-lg">
                                    Videoclip Roudini e os Impostores
                                </CardTitle>
                                <CardDescription className="portfolio-card-description text-sm  p-3">
                                    Video Editing and Motion
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="card-content prose dark:prose-invert flex m-auto w-full max-w-full  p-3 sm:p-6">
                                <iframe
                                    className="iframe-video m-auto"
                                    src="https://www.youtube.com/embed/NGIbxr7JvAQ"
                                    title="Roudinis"
                                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </CardContent>
                            <CardFooter className="portfolio-card-footer text-sm  p-3 sm:p-6">
                                Roudini e os Impostores - A Chuva
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
                                    title="Mundo da Leitura - Covil dos Mandriões"
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

                        <Card className="cards-portfolio m-auto col-span-1 sm:col-span-2  w-full ">
                            <CardHeader className="cards-portfolio-header p-3 sm:p-6">
                                <CardTitle className="portfolio-card-title text-lg">
                                    Video Editing and Motion
                                </CardTitle>
                                <CardDescription className="portfolio-card-description text-sm  p-3"></CardDescription>
                            </CardHeader>
                            <CardContent className="card-content prose dark:prose-invert flex m-auto w-full max-w-full  p-3 sm:p-6">
                                <iframe
                                    className="iframe-video"
                                    src="https://www.youtube.com/embed/_NQjDoY1Xnk"
                                    title="CLIP UPFTV INSTITUCIONAL 2017"
                                    frameBorder="0"
                                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </CardContent>
                            <CardFooter className="portfolio-card-footer text-sm  p-3 sm:p-6">
                                Institucional UPFTV
                            </CardFooter>
                        </Card>

                        <Card className="cards-portfolio m-auto w-full">
                            <CardHeader className="cards-portfolio-header  p-3 sm:p-6">
                                <CardTitle className="portfolio-card-title text-lg">
                                    Video Editing and Motion
                                </CardTitle>
                                <CardDescription className="portfolio-card-description text-sm"></CardDescription>
                            </CardHeader>
                            <CardContent className="card-content prose dark:prose-invert flex justify-center w-full max-w-full  p-3 sm:p-6">
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
                            <CardFooter className="portfolio-card-footer text-sm  p-3 sm:p-6">
                                Promo Facebook UPFTV
                            </CardFooter>
                        </Card>

                        <Card className="cards-portfolio m-auto w-full">
                            <CardHeader className="cards-portfolio-header  p-3 sm:p-6">
                                <CardTitle className="portfolio-card-title text-lg">
                                    Video Editing and Motion
                                </CardTitle>
                                <CardDescription className="portfolio-card-description text-sm"></CardDescription>
                            </CardHeader>
                            <CardContent className="card-content prose dark:prose-invert flex justify-center w-full max-w-full  p-3 sm:p-6">
                                <iframe
                                    className="iframe-video"
                                    src="https://www.youtube.com/embed/st3rRRNCStQ"
                                    title="VT RESPONSABILIDADE SOCIAL 2015"
                                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </CardContent>
                            <CardFooter className="portfolio-card-footer text-sm  p-3 sm:p-6">
                                PROMO RESPONSABILIDADE SOCIAL 2015
                            </CardFooter>
                        </Card>

                        <Card className="cards-portfolio m-auto">
                            <CardHeader className="cards-portfolio-header  p-3 sm:p-6">
                                <CardTitle className="portfolio-card-title text-lg">
                                    Video Editing and Motion
                                </CardTitle>
                                <CardDescription className="portfolio-card-description text-sm"></CardDescription>
                            </CardHeader>
                            <CardContent className="card-content prose dark:prose-invert flex justify-center w-full max-w-full  p-3 sm:p-6">
                                <iframe
                                    className="iframe-video"
                                    src="https://www.youtube.com/embed/95WfsRcNznQ"
                                    title="CLIP FESTIVAL INTERNACIONAL DE FOLCLORE 2016"
                                    frameBorder="0"
                                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </CardContent>
                            <CardFooter className="portfolio-card-footer text-sm  p-3 sm:p-6">
                                Institucional Festival Internacional de Folclore
                            </CardFooter>
                        </Card>

                        <Card className="cards-portfolio m-auto">
                            <CardHeader className="cards-portfolio-header  p-3 sm:p-6">
                                <CardTitle className="portfolio-card-title text-lg">
                                    Video Editing and Motion
                                </CardTitle>
                                <CardDescription className="portfolio-card-description text-sm"></CardDescription>
                            </CardHeader>
                            <CardContent className="card-content prose dark:prose-invert flex justify-center w-full max-w-full  p-3 sm:p-6">
                                <iframe
                                    className="iframe-video"
                                    src="https://www.youtube.com/embed/ZVyQ3nndLZ8"
                                    title="Wedding | Elisa + João Henrique | PF"
                                    frameBorder="0"
                                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </CardContent>
                            <CardFooter className="portfolio-card-footer text-sm  p-3 sm:p-6">
                                Wedding | Elisa + João Henrique | PF
                            </CardFooter>
                        </Card>

                        <Card className="cards-portfolio m-auto">
                            <CardHeader className="cards-portfolio-header  p-3 sm:p-6">
                                <CardTitle className="portfolio-card-title text-lg">
                                    Video Editing and Motion
                                </CardTitle>
                                <CardDescription className="portfolio-card-description text-sm"></CardDescription>
                            </CardHeader>
                            <CardContent className="card-content prose dark:prose-invert flex justify-center w-full max-w-full  p-3 sm:p-6">
                                <iframe
                                    className="iframe-video"
                                    src="https://www.youtube.com/embed/1iiC7IQeeSA"
                                    title="EPISODIO FASHION"
                                    frameBorder="0"
                                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </CardContent>
                            <CardFooter className="portfolio-card-footer text-sm  p-3 sm:p-6">
                                Braussieleiro TV - Australia
                            </CardFooter>
                        </Card>

                        <Card className="cards-portfolio m-auto">
                            <CardHeader className="cards-portfolio-header  p-3 sm:p-6">
                                <CardTitle className="portfolio-card-title text-lg">
                                    Video Editing and Motion
                                </CardTitle>
                                <CardDescription className="portfolio-card-description text-sm"></CardDescription>
                            </CardHeader>
                            <CardContent className="card-content prose dark:prose-invert flex justify-center w-full max-w-full  p-3 sm:p-6">
                                <iframe
                                    className="iframe-video"
                                    src="https://www.youtube.com/embed/jH4jXYlqVuU"
                                    title="AD RENATADELLAVECCHIA PRIM VERAO 2014"
                                    frameBorder="0"
                                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </CardContent>
                            <CardFooter className="portfolio-card-footer text-sm  p-3 sm:p-6">
                                AD RENATADELLAVECCHIA PRIMAVERA / VERAO 2014
                            </CardFooter>
                        </Card>
                    </div>
                </CustomDialog>
            </Slidecard>
            <Slidecard1
                title={"Music and Hobbies"}
                description={
                    "Música, artes, esportes e hobbies. Aqui você encontra um pouco de tudo."
                }
                image={""}
            >
                <CustomDialog
                    title="Miscellaneous"
                    buttonTitle={"explore"}
                    content="Também sou baterista e tenho alguns hobbies. Aqui estão alguns exemplos."
                >
                    <div className="prose dark:prose-invert w-full max-w-full grid grid-cols-1 sm:grid-cols-2 gap-4 m-auto ">
                        <Card className="cards-portfolio m-auto col-span-1 sm:col-span-2  w-full ">
                            <CardHeader className="cards-portfolio-header p-3 sm:p-6">
                                <CardTitle className="portfolio-card-title text-lg">
                                    Rafa Sucesso e Outros Maias
                                </CardTitle>
                                <CardDescription className="portfolio-card-description text-sm  p-3">
                                    Banda tributo ao Tim Maia em que fui
                                    baterista e me diverti horrores.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="card-content prose dark:prose-invert flex m-auto w-full max-w-full  p-3 sm:p-6">
                                <iframe
                                    className="iframe-video m-auto"
                                    src="https://www.youtube.com/embed/6kr2cSe4-IU"
                                    title="Tibuto a Tim Maia"
                                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </CardContent>
                            <CardFooter className="portfolio-card-footer text-sm  p-3 sm:p-6">
                                Bom senso - Tim Maia
                            </CardFooter>
                        </Card>

                        <Card className="cards-portfolio m-auto col-span-1 sm:col-span-2  w-full ">
                            <CardHeader className="cards-portfolio-header p-3 sm:p-6">
                                <CardTitle className="portfolio-card-title text-lg">
                                    Rafa Sucesso e Outros Maias
                                </CardTitle>
                                <CardDescription className="portfolio-card-description text-sm  p-3">
                                    Mais uma musiquinha pra animar o coração
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="card-content prose dark:prose-invert flex m-auto w-full max-w-full  p-3 sm:p-6">
                                <iframe
                                    className="iframe-video m-auto"
                                    src="https://www.youtube.com/embed/VG69-y3QaDM"
                                    title="Tibuto a Tim Maia 03"
                                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </CardContent>
                            <CardFooter className="portfolio-card-footer text-sm  p-3 sm:p-6">
                                Acenda o Farol - Tim Maia
                            </CardFooter>
                        </Card>

                        <Card className="m-auto col-span-1 sm:col-span-2  w-full justify-between">
                            <CardHeader className="cards-portfolio-header p-3 sm:p-6">
                                <CardTitle className="portfolio-card-title text-lg">
                                    Banda Rabo de Peixe
                                </CardTitle>
                                {/* <CardDescription className="portfolio-card-description text-sm  p-3">
                             
                        
                                </CardDescription> */}
                            </CardHeader>
                            <CardContent className="card-content prose dark:prose-invert flex m-auto w-full max-w-full  p-3 sm:p-6">
                                {/* <iframe
                                    className=" m-auto"
                                    src="https://www.youtube.com/embed/WryRze_6Kf4"
                                    title='Rabo de Peixe "Faça o que eu digo, não faça o que eu faço"'
                                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe> */}
                                <Image src="/rabodepeixe.jpg"                                     className=" m-auto mb-auto"
 alt="Rabo de Peixe" width={350} height={350} />
                            </CardContent>
                            <CardFooter className="portfolio-card-footer text-sm  p-3 sm:p-6 mt-auto">
                                <Link
                                    href="https://open.spotify.com/intl-pt/artist/2P3ANfbebMUNUfDeTlcSGz"
                                    className=" align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5 px-7 rounded-lg bg-white text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none gap-3 m-4 mt-auto w-full block"
                                    key="Rabo de peixe"
                                >
                                    Álbum no Spotfy
                                </Link>
                            </CardFooter>
                        </Card>

                        <Card className="cards-portfolio m-auto w-full">
                            <CardHeader className="cards-portfolio-header  p-3 sm:p-6">
                                <CardTitle className="portfolio-card-title text-lg">
                                    Banda Switchblades - Sydney / Austrália
                                </CardTitle>
                                <CardDescription className="portfolio-card-description text-sm">
                                    Banda com a qual toquei no tempo do meu
                                    intercâmbio na Áustralia.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="card-content prose dark:prose-invert flex justify-center w-full max-w-full">
                                <iframe
                                    className="iframe-video"
                                    src="https://www.youtube.com/embed/qrvl2P-7uQA"
                                    title="switchblades"
                                    frameBorder="0"
                                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </CardContent>
                            <CardFooter className="portfolio-card-footer text-sm  p-3 sm:p-6">
                                Fun and Shit - Switchblades <br></br>
                                Gravamos algumas musicas, fizemos algumas
                                apresentações e nos divertimos muito.
                            </CardFooter>
                        </Card>
                        
                        <Card className="cards-portfolio m-auto w-full">
                            <CardHeader className="cards-portfolio-header  p-3 sm:p-6">
                                <CardTitle className="portfolio-card-title text-lg">
                                    Banda Mausoléu - Passo Fundo
                                </CardTitle>
                                <CardDescription className="portfolio-card-description text-sm">
                                    Banda da minha adolescência que tocava metal
                                    (e o terror) no final da década de 90.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="card-content prose dark:prose-invert flex justify-center w-full max-w-full">
                                <iframe
                                    className="iframe-video"
                                    src="https://www.youtube.com/embed/FGAh17xn7qg"
                                    title="BANDA MAUSOLEU"
                                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </CardContent>
                            <CardFooter className="portfolio-card-footer text-sm p-3 sm:p-6">
                                Poder, sexo e violênia - Musica granhadora da
                                eliminatória de Passo Fundo do Circuito de Rock
                                de 1996. Eu tinha 15 anos aninhos.
                            </CardFooter>
                        </Card>




                        <CardTitle className="cards-portfolio-header p-3 sm:p-6 center">Hobbies & Miscellaneous</CardTitle>


                        <Card className="cards-portfolio m-auto col-span-1 sm:col-span-2  w-full ">
                            <CardHeader className="cards-portfolio-header p-3 sm:p-6">
                                <CardTitle className="portfolio-card-title text-lg">
                                    Tutorial Tello & Scratch - Tutorial de
                                    programação com o Scratch para controlar o
                                    drone Ryze Tello que gravei e editei
                                </CardTitle>
                                <CardDescription className="portfolio-card-description text-sm  p-3">
                                    Gosto muito de drones e fiz este tutorial
                                    para fins de teste e passa-tempo.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="card-content prose dark:prose-invert flex m-auto w-full max-w-full  p-3 sm:p-6">
                                <iframe
                                    className="iframe-video m-auto"
                                    src="https://www.youtube.com/embed/_whcMD3uw7s"
                                    title="Tutorial Tello &amp; Scratch - Tutorial de programação com o Scratch para controlar o drone Ryze Tello"
                                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </CardContent>
                            <CardFooter className="portfolio-card-footer text-sm  p-3 sm:p-6">
                                Tutorial Tello &amp; Scratch - Tutorial de
                                programação com o Scratch para controlar o drone
                                Ryze Tello
                            </CardFooter>
                        </Card>

                        <Card className="cards-portfolio m-auto col-span-1 sm:col-span-2  w-full ">
                            <CardHeader className="cards-portfolio-header p-3 sm:p-6">
                                <CardTitle className="portfolio-card-title text-lg">
                                    Minha experiência no Dinneer.com
                                </CardTitle>
                                <CardDescription className="portfolio-card-description text-sm  p-3">
                                    Video com um casal de amigos para a uma
                                    promo da dinner.com. Quem não gosta de uma
                                    boa comida e uma boa compania?
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="card-content prose dark:prose-invert flex m-auto w-full max-w-full  p-3 sm:p-6">
                                <iframe
                                    className="iframe-video m-auto"
                                    src="https://www.youtube.com/embed/iZJ2oXYS5yQ"
                                    title="Minha experiência no Dinneer.com"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </CardContent>
                            <CardFooter className="portfolio-card-footer text-sm  p-3 sm:p-6">
                                Galinhada com trilha sonora de Roudini e Os
                                Impostores
                            </CardFooter>
                        </Card>
                    </div>
                </CustomDialog>
            </Slidecard1>
        </Carousel>
    )
}

export default CarouselWithContent
