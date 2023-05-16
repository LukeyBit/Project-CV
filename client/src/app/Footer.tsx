import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className='flex flex-col items-center justify-center w-full h-24 container-glass rounded-b-none'>
            <div className='flex items-center justify-center gap-4'>
                <p>Copyright © 2023 Lukas Andersson</p>
                <a href='https://github.com/LukeyBit' className='hover:text-gray-800 flex flex-row gap-2 items-center'>
                    <FontAwesomeIcon icon={faGithub} className='w-8 h-8' /> @LukeyBit
                </a>
            </div>
        </footer>
    );
}
