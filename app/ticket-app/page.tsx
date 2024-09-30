import React from 'react'
import prisma from '@/prisma/db'
import DashRecentTickets from '@/components/DashRecentTickets'
import DashChart from '@/components/DashChart'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const PresentationApp = async () => {
    const tickets = await prisma.ticket.findMany({
        where: {
            NOT: [{ status: 'CLOSED' }],
        },
        orderBy: {
            updatedAt: 'desc',
        },
        skip: 0,
        take: 5,
        include: {
            assignedToUser: true,
        },
    })

    const groupTicket = await prisma.ticket.groupBy({
        by: ['status'],
        _count: {
            id: true,
        },
    })

    const data = groupTicket.map((item) => {
        return {
            name: item.status,
            total: item._count.id,
        }
    })

    const data1 = groupTicket.map((item) => {
        return {
            itemCount: 5,
            pageSize: 3,
            currentPage: 1,
        }
    })

    return (
        <div>
            <div className="grid gap-4 md:grid-cols-2 px-2">
   
                <div>
                <Card className="mx-0 mb-4 lg:col-span-3 lg:mr-0">
                            <CardHeader>
                                <CardTitle className="mb-6 leading-8">
                                    This project was developed using a stack
                                    comprising Typescript, ReactJs, NextJs, CSS
                                    modules, Tailwind, Prisma, and CI/CD with
                                    Vercel.
                                </CardTitle>
                                <CardDescription className=''>
                                    The homepage, designed with CSS modules,
                                    employs a best practice to isolate styles
                                    effectively. It showcases my portfolio of
                                    motion graphics created using Adobe
                                    AfterEffects, Illustrator, PhotoShop, and
                                    Premiere.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="max-w-full prose dark:prose-invert">
                                This system serves as a Ticket Services
                                platform, enabling the creation of tickets or
                                tasks related to ongoing project activities. It
                                serves as my comprehensive to-do list, guiding
                                the evolution of the system.
                            </CardContent>
                            <CardFooter>
                                Within the logged-in section, there is a simple
                                system I developed while undertaking a Next.js
                                course.
                            </CardFooter>
                        </Card>
                </div>
                <div>
                    <DashChart data={data} />
                </div>
            </div>
        </div>
    )
}

export default PresentationApp
