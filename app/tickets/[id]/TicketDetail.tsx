import { Ticket, User } from '@prisma/client'
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import TicketStatusBadge from '@/components/TicketStatusBadge'
import TicketPriority from '@/components/TicketPriority'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import ReactMarkDown from 'react-markdown'
import DeleteButton from './DeleteButton'
import AssignTicket from '@/components/AssignTicket'
import { getServerSession } from 'next-auth'

import options from '../../api/auth/[...nextauth]/options'
import EditDialog from './EditDialog'

interface Props {
    ticket: Ticket
    users: User[]
    authenticated?: boolean
}

const TicketDetail = async ({ ticket, users }: Props) => {
    const session = await getServerSession(options)
    return (
        <div className="lg:grid lg:grid-cols-4">
            <Card className="mx-4 mb-4 lg:col-span-3 lg:mr-4">
                <CardHeader>
                    <div className="flex justify-between mb-3">
                        <TicketStatusBadge status={ticket.status} />
                        <TicketPriority priority={ticket.priority} />
                    </div>
                    <CardTitle>{ticket.title}</CardTitle>
                    <CardDescription>
                        Created:{' '}
                        {ticket.createdAt.toLocaleDateString('en-US', {
                            year: '2-digit',
                            month: '2-digit',
                            day: '2-digit',
                            hour: 'numeric',
                            minute: '2-digit',
                            hour12: true,
                        })}
                    </CardDescription>
                </CardHeader>
                <CardContent className="prose dark:prose-invert">
                    <ReactMarkDown>{ticket.description}</ReactMarkDown>
                </CardContent>
                <CardFooter>
                    Updated:{' '}
                    {ticket.updatedAt.toLocaleDateString('en-US', {
                        year: '2-digit',
                        month: '2-digit',
                        day: '2-digit',
                        hour: 'numeric',
                        minute: '2-digit',
                        hour12: true,
                    })}
                </CardFooter>
            </Card>
            <div className="mx-4 flex lg:flex-col lg:mx-0 gap-2">
                <AssignTicket ticket={ticket} users={users} />

                {session ? (
                    <Link
                        href={`/tickets/edit/${ticket.id}`}
                        className={`${buttonVariants({
                            variant: 'default',
                        })}`}
                    >
                        Edit Ticket
                    </Link>
                ) : (
                    <EditDialog
                        ticketId={ticket.id}
                        authenticated={session ? true : false}
                    />
                )}

                <DeleteButton
                    ticketId={ticket.id}
                    authenticated={session ? true : false}
                />
            </div>
        </div>
    )
}

export default TicketDetail
