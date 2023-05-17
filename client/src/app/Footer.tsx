import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className='flex flex-col md:flex-row items-center justify-center w-full h-fit container-glass rounded-b-none gap-4 py-4'>
            <p>Copyright © 2023 Lukas Andersson</p>
            <a href='https://github.com/LukeyBit' className='hover:text-gray-800 flex flex-row gap-2 items-center'>
                <FontAwesomeIcon icon={faGithub} className='w-8 h-8' /> @LukeyBit
            </a>
        </footer>
    );
}
