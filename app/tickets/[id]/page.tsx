import React from 'react'
import prisma from '@/prisma/db'
import TicketDetail from './TicketDetail'
import { getServerSession } from 'next-auth'
import options from '../../api/auth/[...nextauth]/options'



interface Props {
    params: { id: string }
}

const ViewTicket = async ({ params }: Props) => {
    const session = await getServerSession(options)

    const ticket = await prisma.ticket.findUnique({
        where: { id: parseInt(params.id) },
    })

    const users = await prisma.user.findMany()

    if (!ticket) {
        return <p className=" text-destructive">Ticket Not Found!</p>
    }

    return <TicketDetail ticket={ticket} users={users} session={session} />
}

export default ViewTicket
