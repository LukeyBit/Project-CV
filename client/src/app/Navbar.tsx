import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    return (
        <nav className='flex flex-row bg-gray-800 text-white p-6 justify-between'>
            <div className='flex items-center flex-shrink-0 text-xl mr-6 font-bold'>
                <Link href='/'>
                    Lukas Andersson
                </Link>
            </div>
            <div className='flex gap-4 text-md lg:flex lg:items-center lg:w-auto'>
                <Link href='/Resume'>Resume</Link>
                <Link href='/Portfolio'>Portfolio</Link>
                <Link href='/Contact'>Contact</Link>
            </div>
        </nav>
    );
}