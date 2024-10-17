"use client"

import React, { ReactNode } from "react"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

interface CustomDialogProps {
    buttonTitle?: string
    title?: string
    content?: string
    children?: ReactNode
}

export function CustomDialog(props: CustomDialogProps) {
    return (
        <>
            <AlertDialog>
                <AlertDialogTrigger
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5 px-7 rounded-lg bg-white text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none gap-3 m-auto"
                    disabled={false}
                >
                    {props.buttonTitle}
                </AlertDialogTrigger>

                <AlertDialogContent className="max-w-[97%] max-h-[90%] overflow-auto">
                    <AlertDialogHeader>
                        <AlertDialogTitle>{props.title}</AlertDialogTitle>
                        <AlertDialogDescription>
                            {props.content}
                        </AlertDialogDescription>
                            {props.children}
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Close</AlertDialogCancel>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}

export default CustomDialog
