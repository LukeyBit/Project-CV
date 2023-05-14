import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className='flex flex-row justify-evenly items-center p-6 gap-8 bg-gray-800 text-white'>
            <p>Copyright © 2023 Lukas Andersson</p>
            <div className='flex flex-row'>
                <a href='https://github/LukeyBit/' className='flex flex-row items-center gap-1'>
                    <FontAwesomeIcon icon={faGithub} className='w-6 h-6' />
                    @LukeyBit
                </a>
            </div>
        </footer>
    );
}