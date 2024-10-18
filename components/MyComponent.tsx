import React, { ReactNode } from "react"

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

interface CarouselWithContentProps {
    slidesNumber?: number
    slide: {
        title?: string
        description?: string
        image?: string
        children?: ReactNode
    }
}

export function CarouselWithContent() {
    return (
        <Carousel
            className="rounded-xl"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            >
          <Slidecard
                textCenter={true}
                title={"MUNDO DA LEITURA NA TV"}
                description={"Programa Infantil Mundo da Leitura na TV produzido pela UPFTV e Canal Futura. Premiado projeto que tive a honra de fazer parte por 10 anos."}
                image={`mundo-da-leitura.png`}
            >
                <CustomDialog
                    title="Video Editing"
                    buttonTitle={"explore"}
                    content="Examples of some of the videos"
                >
                    <div className="prose dark:prose-invert w-full max-w-full grid grid-cols-1 sm:grid-cols-2 gap-4 m-auto ">
                        <Card className="cards-portfolio m-auto col-span-1 sm:col-span-2  w-full ">
                            <CardHeader className="cards-portfolio-header p-3 sm:p-6">
                                <CardTitle className="portfolio-card-title text-lg">
                                    Programa Mundo da Leirura na TV
                                </CardTitle>
                                <CardDescription className="portfolio-card-description text-sm  p-3 sm:p-6">
                                    Covil dos Mandriões / UPFTV-Canal Futura
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="card-content prose dark:prose-invert flex m-auto w-full max-w-full  p-3 sm:p-6">
                                <iframe
                                    className="iframe-video m-auto"
                                    src="https://www.youtube.com/embed/zu4f-hAqvVg"
                                    title="Mundo da Leirura - Covil dos Mandriões"
                                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </CardContent>
                            <CardFooter className="portfolio-card-footer text-sm  p-3 sm:p-6">
                                Programa Infantil Mundo da Leitura na TV
                                produzido pela UPFTV e Canal Futura. Projeto que
                                tive a honra de fazer parte por 10 anos.
                            </CardFooter>
                        </Card>

                        <Card className="cards-portfolio m-auto">
                            <CardHeader className="cards-portfolio-header  p-3 sm:p-6">
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
                            <CardContent className="card-content prose dark:prose-invert flex justify-center  p-3 sm:p-6">
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
                                Quadro do programa no qual eram produzidas
                                diversas histórias em diversos formatos.
                            </CardFooter>
                        </Card>
                        <Card className="cards-portfolio m-auto">
                            <CardHeader className="cards-portfolio-header  p-3 sm:p-6">
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
                            <CardContent className="card-content prose dark:prose-invert flex justify-center  p-3 sm:p-6">
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
                                Quadro do programa no qual o personagem
                                Mil-Faces.
                            </CardFooter>
                        </Card>

                    </div>
                </CustomDialog>
            </Slidecard>
            <Slidecard
                textCenter={true}
                title={"Video Editing"}
                description={"Exaples of some of the videos"}
                image={`https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80`}
            >
                <CustomDialog
                    title="Video Editing"
                    buttonTitle={"explore"}
                    content="Examples of some of the videos"
                >
                    <div className="prose dark:prose-invert w-full max-w-full grid grid-cols-1 sm:grid-cols-2 gap-4 m-auto">
                        <Card className="cards-portfolio m-auto">
                            <CardHeader className="cards-portfolio-header  p-3 sm:p-6">
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
                                Updated:{" "}
                            </CardFooter>
                        </Card>

                        <Card className="cards-portfolio m-auto">
                            <CardHeader className="cards-portfolio-header  p-3 sm:p-6">
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
                            <CardContent className="card-content prose dark:prose-invert flex justify-center w-full max-w-full  p-3 sm:p-6">
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
                            <CardFooter className="portfolio-card-footer text-sm  p-3 sm:p-6">
                                Updated:{" "}
                            </CardFooter>
                        </Card>
                    </div>
                </CustomDialog>
            </Slidecard>
            <div className="relative h-full w-full">
                <img
                    src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                    alt="image 3"
                    className="h-screen w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
                    <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                            placeholder={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}
                        >
                            The Beauty of Nature
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 opacity-80"
                            placeholder={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}
                        >
                            It is not so much for its beauty that the forest
                            makes a claim upon men&apos;s hearts, as for that
                            subtle something, that quality of air that emanation
                            from old trees, that so wonderfully changes and
                            renews a weary spirit.
                        </Typography>
                        <div className="flex gap-2">
                            <Button
                                size="lg"
                                color="white"
                                placeholder={undefined}
                                onPointerEnterCapture={undefined}
                                onPointerLeaveCapture={undefined}
                            >
                                Explore
                            </Button>
                            <Button
                                size="lg"
                                color="white"
                                variant="text"
                                placeholder={undefined}
                                onPointerEnterCapture={undefined}
                                onPointerLeaveCapture={undefined}
                            >
                                Gallery
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Carousel>
    )
}

export default CarouselWithContent
