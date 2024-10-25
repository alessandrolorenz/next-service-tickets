"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

interface MainNavLinksProps {
    role?: string
}

const MainNavLinks = ({
    role,
}: MainNavLinksProps) => {

    const links = [
        { label: "Home", href: "/", adminOnly: false },
        { label: "Tickets App", href: "/ticket-app", adminOnly: false },
        { label: "Dashboard", href: "/dashboard", adminOnly: false },
        { label: "Tickets", href: "/tickets", adminOnly: false },
        { label: "Users", href: "/users", adminOnly: true },
    ]

    const currentPath = usePathname()

    return (
        <div className="flex flex-col lg:flex-row items-center gap-2">
            {links
                .filter((link) => {
                    return !link.adminOnly || role === "ADMIN"
                })
                .map((link) => (
                    <Link
                        href={link.href}
                        className={`navbar-link ${
                            currentPath == link.href &&
                            "cursor-default text-primary/70 hover:text-primary/60"
                        }`}
                        key={link.label}
                    >
                        {link.label}
                    </Link>
                ))}
        </div>
    )
}

export default MainNavLinks
