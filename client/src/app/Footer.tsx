import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className='flex flex-col items-center justify-center w-full h-24 border-t'>
            <div className='flex items-center justify-center gap-4'>
                <p className='text-gray-500'>Copyright © 2023 Lukas Andersson</p>
                <a href='https://github.com/LukeyBit' className='text-gray-500 hover:text-gray-600 flex flex-row gap-2 items-center'>
                    <FontAwesomeIcon icon={faGithub} className='w-8 h-8' /> @LukeyBit
                </a>
            </div>
        </footer>
    );
}
