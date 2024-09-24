import dynamic from 'next/dynamic'
import React from 'react'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import prisma from '@/prisma/db'

import options from '../../../api/auth/[...nextauth]/options'

interface Props {
    params: { id: string }
}

const TicketForm = dynamic(() => import('@/components/TicketForm'), {
    ssr: false,
})

const EditTicket = async ({ params }: Props) => {
    const session = await getServerSession(options)

    if (!session) {
        return (
            <>
                <p className="text-destructive">User not Authenticated!</p>
                <Link
                    href={`/tickets/${params.id}`}
                    className={`${buttonVariants({
                        variant: 'default',
                    })}`}
                >
                    Back
                </Link>
            </>
        )
    }

    try {
        const ticket = await prisma.ticket.findUnique({
            where: { id: parseInt(params.id) },
        })

        if (!ticket) {
            return (
                <>
                    <p className="text-destructive">Ticket not found!</p>
                    <Link
                        href={`/tickets/${params.id}`}
                        className={`${buttonVariants({
                            variant: 'default',
                        })}`}
                    >
                        Back
                    </Link>
                </>
            )
        }

        return <TicketForm ticket={ticket} />
    } catch (error) {
        console.error('Error fetching ticket:', error)
        return (
            <>
                <p className="text-destructive">Error fetching ticket!</p>
                <Link
                    href={`/tickets/${params.id}`}
                    className={`${buttonVariants({
                        variant: 'default',
                    })}`}
                >
                    Back
                </Link>
            </>
        )
    } finally {
        await prisma.$disconnect()
    }
}

export default EditTicket