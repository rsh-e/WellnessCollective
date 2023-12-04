import Logo from './assets/Logo.svg'
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import DropdownWeb from './DropdownWeb';


export default function Navbar() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;

        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible]);

    const navbarClass = visible ? ' max-w-screen-2xl mx-auto fixed top-0 left-0 right-0 p-2 bg-white flex justify-between items-center z-50' : 'fixed top-0 left-0 right-0 p-2 bg-white flex justify-between items-center z-50 hidden';

    return (
        <>
            <div className={navbarClass}>
                <div className='flex flex-row items-center'>
                    <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
                        <img src={Logo} alt="Logo" className="w-16 h-16 ml-2" />
                    </Link>
                    <Link to="hero" smooth={true} duration={500} className="cursor-pointer font-poppins m-2 text-cyan-500 text-xl font-medium">
                        Wellness Collective
                    </Link>
                </div>

                <div className="flex items-center space-x-6 mr-4 font-poppins text-cyan-500">
                    <Link to="aboutUs" smooth={true} duration={500} className="hover:text-gray-600 hover:underline cursor-pointer">About Us</Link>
                    {/* This is a comment within the JSX return part <Link to="therapies" smooth={true} duration={500} className="hover:text-gray-600 hover:underline cursor-pointer"><DropdownWeb /></Link>*/}
                    <DropdownWeb />
                    <Link to="sensoryAssessments" smooth={true} duration={500} className="hover:text-gray-600 hover:underline cursor-pointer">Sensory Assessment</Link>
                    <Link to="paediatricOT" smooth={true} duration={500} className="hover:text-gray-600 hover:underline cursor-pointer">Paediatric OT</Link>
                    <Link to="contactUs" smooth={true} duration={500} className="hover:text-gray-600 hover:underline cursor-pointer">Contact Us</Link>
                </div>
            </div>
        </>
    )
}