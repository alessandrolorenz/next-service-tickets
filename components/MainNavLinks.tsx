'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

interface MainNavLinksProps {
    role?: string;
    onTicketsAppClick: () => void;
    onHomeClick: () => void;
}

const MainNavLinks = ({ role, onTicketsAppClick, onHomeClick }: MainNavLinksProps) => {
    const [showAdditionalLinks, setShowAdditionalLinks] = useState(false);

    const links = [
        { label: 'Home', href: '/', adminOnly: false },
        { label: 'Tickets App', href: '', adminOnly: false },
        { label: 'Dashboard', href: '/dashboard', adminOnly: false },
        { label: 'Tickets', href: '/tickets', adminOnly: false },
        { label: 'Users', href: '/users', adminOnly: true },
    ];

    const currentPath = usePathname();

    const handleLinkClick = (label: string) => {
        if (label === 'Tickets App') {
            setShowAdditionalLinks(true);
            onTicketsAppClick();
        } else if (label === 'Home') {
            setShowAdditionalLinks(false);
            onHomeClick();
        }
    };

    return (
        <div className="flex flex-col lg:flex-row items-center gap-2">
            {links
                .filter((link) => {
                    if (link.label === 'Home' || link.label === 'Tickets App') {
                        return true;
                    }
                    return showAdditionalLinks && (!link.adminOnly || role === 'ADMIN');
                })
                .map((link) => (
                    <Link
                        href={link.href}
                        className={`navbar-link ${
                            currentPath == link.href &&
                            'cursor-default text-primary/70 hover:text-primary/60'
                        }`}
                        key={link.label}
                        onClick={() => handleLinkClick(link.label)}
                    >
                        {link.label}
                    </Link>
                ))}
        </div>
    );
};

export default MainNavLinks;