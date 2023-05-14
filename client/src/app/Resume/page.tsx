import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Resume() {
    return (
        <main className='flex flex-col items-center justify-between p-24 h-screen text-gray-800'>
            <div className='flex flex-row justify-between w-full'>
                <div className='flex flex-row items-center gap-1'>
                    <h1 className='text-4xl font-bold'>Resume</h1>
                </div>
            </div>
        </main>             
    );
}