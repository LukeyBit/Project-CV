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
        <nav data-test-id='nav' className='flex items-center justify-between flex-wrap container-glass rounded-t-none p-6 md'>
            <div className='flex items-center flex-shrink-0 text-white mr-6'>
                <span className='font-semibold text-2xl tracking-tight'>
                    <Link href='/' className='hover:text-gray-800'>Lukas Andersson</Link>
                </span>
            </div>
            <div className='block md:hidden'>
                <button className='flex items-center px-3 py-2 border-2 rounded text-white border-white hover:text-gray-800 hover:bg-white' onClick={toggleOpen}>
                    <FontAwesomeIcon icon={faBars} className='w-8 h-8' />
                </button>
            </div>
            <div className='md:flex items-center flex-shrink-0 text-white mr-6 gap-4 text-lg hidden'>
                <Link href='/Contact' className='text-white hover:text-gray-800 md:text-gray-800 md:hover:bg-gray-300 md:bg-white md:p-2 md:rounded'>Contact</Link>
                <Link href='/Portfolio' className='text-white hover:text-gray-800 md:text-gray-800 md:hover:bg-gray-300 md:bg-white md:p-2 md:rounded'>Portfolio</Link>
                <Link href='/Resume' className='text-white hover:text-gray-800 md:text-gray-800 md:hover:bg-gray-300 md:bg-white md:p-2 md:rounded'>Resume</Link>
            </div>
        </nav>
    );
}