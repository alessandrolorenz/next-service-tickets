import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import MainNav from "@/components/MainNav"
import { ThemeProvider } from "@/components/theme-provider"
import { getServerSession } from "next-auth"
import options from "@/app/api/auth/[...nextauth]/options"
import ClientLayout from "./clientLayout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Alessandro Lorenz",
    description: "Portfolio front-end developer",
}

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const session = await getServerSession(options)

    return (
        <html lang="en">
            <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem
                disableTransitionOnChange
            >
                <body className={`${inter.className} flex flex-col h-screen`}>
                    <ClientLayout session={session}>{children}</ClientLayout>
                </body>
            </ThemeProvider>
        </html>
    )
}
