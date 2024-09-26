
'use client';

import Link from 'next/link'
import React, { useState } from 'react'
import ToggleMode from './ToggleMode'
import MainNavLinks from './MainNavLinks'


const MainNav =  ({ session }: { session: any }) => {
    const [showAuthLinks, setShowAuthLinks] = useState(false);

    const handleTicketsAppClick = () => {
        setShowAuthLinks(true);
    };

    const handleHomeClick = () => {
        setShowAuthLinks(false);
    };

    return (
        <div className="flex justify-between">
            <MainNavLinks role={session?.user.role} 
                 onTicketsAppClick={handleTicketsAppClick}
                 onHomeClick={handleHomeClick}
            />

            <div className="flex items-center gap-2">
            {showAuthLinks && (
                    <>
                        {session ? (
                            <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
                        ) : (
                            <Link href="/api/auth/signin">Login</Link>
                        )}
                    </>
                )}
                <ToggleMode />
            </div>
        </div>
    )
}

export default MainNav
