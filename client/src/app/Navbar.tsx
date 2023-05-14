'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className='flex items-center justify-between flex-wrap bg-gray-800 p-6'>
            <div className='flex items-center flex-shrink-0 text-white mr-6'>
                <span className='font-semibold text-2xl tracking-tight'>
                    <Link href='/' className='hover:text-gray-300'>Lukas Andersson</Link>
                </span>
            </div>
            <div className='flex items-center flex-shrink-0 text-white mr-6 gap-4 text-lg'>
                <Link href='/Contact' className='hover:text-gray-300'>Contact</Link>
                <Link href='/Portfolio' className='hover:text-gray-300'>Portfolio</Link>
                <Link href='/Resume' className='hover:text-gray-300'>Resume</Link>
            </div>
        </nav>
    );
}