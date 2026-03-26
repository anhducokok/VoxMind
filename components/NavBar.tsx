import { Button } from '@base-ui/react/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// import logo from '@/public/logo.png'
const navItems = [
    {
        label: 'Library',
        href: '/'
    },
    {
        label: 'Add New Book',
        href: '/add-new-book'
    }
]
const NavBar = () => {
    return (
        <header className='fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border'>
            <div className='container mx-auto px-4 py-2'>
                <div className='flex items-center justify-between'>
                    <Link href='/' className='flex items-center gap-0.5'>
                        <Image src='/logo.png' alt='' width={42} height={26} />
                        <span className='text-2xl font-bold'>Voxmind</span>
                    </Link>
                    <nav className='flex items-center gap-4'>
                        {navItems.map((item) => (
                            <Link key={item.href} href={item.href}>
                                <span className='text-sm font-medium'>{item.label}</span>
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default NavBar;