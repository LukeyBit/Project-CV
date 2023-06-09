'use client';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link'

export default function Navbar() {
    const [open, setOpen] = useState(false);

    function toggleOpen() {
        setOpen(!open);
    }

    return (
        <nav data-testid='nav' className='flex flex-col md:flex-row md:items-center justify-between container-glass rounded-t-none p-6 md'>
            <div className='flex flex-row justify-between items-center text-white mr-6'>
                <Link href='/' className='font-semibold text-2xl tracking-tight hover:text-gray-800'>Lukas Andersson</Link>
                <button className='md:hidden flex items-center px-3 py-2 border-2 rounded text-white border-white hover:text-gray-800 hover:bg-white' onClick={toggleOpen}>
                    <FontAwesomeIcon icon={faBars} className='w-8 h-8' />
                </button>
            </div>
            <div className={`md:flex md:items-center text-white mr-6 gap-4 text-lg ${open ? 'flex flex-col mt-4' : 'hidden'}`}>
                <Link href='/Portfolio' className='text-white hover:text-gray-800 font-semibold'>Portfolio</Link>
                <Link href='/Resume' className='text-white hover:text-gray-800 font-semibold'>Resume</Link>
                <Link href='/Contact' className='text-white hover:text-gray-800 font-semibold'>Contact</Link>
            </div>
        </nav>
    );
}