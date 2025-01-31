"use client"

import { usePathname } from "next/navigation"
import { ReactNode, useEffect } from "react"
import "./globals.css"

import MainNav from "@/components/MainNav"

export default function ClientLayout(props: any) {
    const pathname = usePathname()
    const isStorybook = pathname === "/storybook"

    return (
        <>
            {!isStorybook ? (
                <nav className="flex flex-col items-center border-b px-5 py-3">
                    <div className="max-w-6xl w-full">
                        {<MainNav session={props.session} />}
                    </div>
                </nav>
            ) : (
                ""
            )}

            <main className="flex flex-col items-center">
                <div className=" w-full">{props.children}</div>
            </main>
            <footer className="flex items-center justify-end w-full h-24 border-t bottom-0 mt-auto">
                <code className="text-sm p-2 mr-10 text-lg sm:text-sm">
                    Alessandro Lorenz
                </code>
            </footer>
        </>
    )
}
