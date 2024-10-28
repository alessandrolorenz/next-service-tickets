"use client"

import Link from "next/link"
import React from "react"
import { usePathname } from "next/navigation"
import ToggleMode from "./ToggleMode"
import MainNavLinks from "./MainNavLinks"

const MainNav = ({ session }: { session: any }) => {
    const pathname = usePathname()

    const isHomeOrRoot = pathname === "/" || pathname === "/home"


    const getUserInitial = (name: string) => {
        return name.charAt(0).toUpperCase()
    }
    return (
        <div className="flex justify-between">
            {!isHomeOrRoot && (
                <MainNavLinks
                    role={session?.user.role}
                />
            )}

            <div className="flex items-center gap-2">
                {!isHomeOrRoot && (
                    <>
                        {session ? (
                            <>
                                <span className="flex items-center justify-center w-8 h-8 bg-gray-500 text-white rounded-full">
                                    {getUserInitial(session.user.name)}
                                </span>
                                <Link href="/api/auth/signout?callbackUrl=/ticket-app">
                                    Logout
                                </Link>
                            </>
                        ) : (
                            <Link href="/api/auth/signin?callbackUrl=/ticket-app">Login</Link>
                        )}
                    </>
                )}
                <ToggleMode />
            </div>
        </div>
    )
}

export default MainNav
