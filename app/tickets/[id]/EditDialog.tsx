'use client'
import React, { useState } from 'react'
import Link from 'next/link'

import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { buttonVariants } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

const EditDialog = (props: any) => {
    const router = useRouter()

    return (
        <>
            <AlertDialog>
                <AlertDialogTrigger
                    className={buttonVariants({
                        variant: 'default',
                    })}
                >
                    Edit Ticket
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>
                            To edit a ticket you must be authenticated
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            Login to proceed
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <Link
                            className={cn(
                                buttonVariants({ variant: 'outline' }),
                                'mt-2 sm:mt-0'
                            )}
                            href="/api/auth/signin"
                        >
                            Login
                        </Link>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}

export default EditDialog
