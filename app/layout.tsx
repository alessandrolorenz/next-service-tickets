import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import MainNav from "@/components/MainNav"
import { ThemeProvider } from "@/components/theme-provider"
import { getServerSession } from "next-auth"
import options from "@/app/api/auth/[...nextauth]/options"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Ticket Application",
    description: "My todo list",
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
                    <nav className="flex flex-col items-center border-b px-5 py-3">
                        <div className="max-w-6xl w-full">
                            <MainNav session={session} />
                        </div>
                    </nav>
                    <main className="flex flex-col items-center">
                        <div className=" w-full">{children}</div>
                    </main>
                    <footer className="flex items-center justify-end w-full h-24 border-t bottom-0 mt-auto">
                        <code className="text-sm p-2 mr-10 text-lg sm:text-sm">
                            Alessandro Lorenz
                        </code>
                    </footer>
                </body>
            </ThemeProvider>
        </html>
    )
}
