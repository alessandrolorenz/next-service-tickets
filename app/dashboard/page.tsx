import React from "react"
import prisma from "@/prisma/db"
import DashRecentTickets from "@/components/DashRecentTickets"
import DashChart from "@/components/DashChart"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const Dashboard = async () => {
    const tickets = await prisma.ticket.findMany({
        where: {
            NOT: [{ status: "CLOSED" }],
        },
        orderBy: {
            updatedAt: "desc",
        },
        skip: 0,
        take: 5,
        include: {
            assignedToUser: true,
        },
    })

    const groupTicket = await prisma.ticket.groupBy({
        by: ["status"],
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
            <div className=" w-full">
            <div className="grid gap-4 md:grid-cols-1 px-2 mt-8">
                    <div>
                        <Card className="mx-0 mb-4 lg:col-span-3 lg:mr-0">
                            <CardHeader>
                                <CardTitle className="mb-6 leading-8">
                                    Ticket Services NextJs Web Application Dashboard
                                </CardTitle>
                           
                            </CardHeader>
                           
                        </Card>
                    </div>
                </div>
            <div className="grid gap-4 md:grid-cols-2 px-2 mt-6">
                <div>
                    <DashRecentTickets tickets={tickets} />
                </div>
                <div>
                    <DashChart data={data} />
                </div>
            </div>
            
            </div>

        </div>
    )
}

export default Dashboard
