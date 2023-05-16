import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav data-test-id='nav' className='flex items-center justify-between flex-wrap container-glass rounded-t-none p-6'>
            <div className='flex items-center flex-shrink-0 text-white mr-6'>
                <span className='font-semibold text-2xl tracking-tight'>
                    <Link href='/' className='hover:text-gray-800'>Lukas Andersson</Link>
                </span>
            </div>
            <div className='flex items-center flex-shrink-0 text-white mr-6 gap-4 text-lg'>
                <Link href='/Contact' className='hover:text-gray-800'>Contact</Link>
                <Link href='/Portfolio' className='hover:text-gray-800'>Portfolio</Link>
                <Link href='/Resume' className='hover:text-gray-800'>Resume</Link>
            </div>
        </nav>
    );
}