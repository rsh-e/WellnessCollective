import Logo from './assets/Logo.svg'
import { Link } from 'react-scroll';

export default function Footer() {
    return (
        <>
            <div className="flex flex-row h-56 bg-cyan-500 font-poppins">
                <div className='flex flex-row items-center pr-20 border-r-2'>
                    <img src={Logo} className="w-[120px] h-[120px] ml-14 rounded-full" />
                    <p className='text-white ml-4 text-xl font-medium'>Wellness Collective</p>
                </div>
                <div className='flex flex-col justify-center text-left text-white ml-14 pr-20 border-r-2'>
                    <p>Email: xyz@gmail.com <br /> Phone: 0791672823 / 07795571758</p>
                </div>
                <div className='flex flex-col justify-center ml-14 text-white'>
                    <Link href="#aboutUs" to="aboutUs" smooth={true} duration={500} className="hover:underline cursor-pointer">About Us</Link>
                    <Link to="therapies" smooth={true} duration={500} className="hover:underline cursor-pointer">Our Therapies</Link>
                    <Link to="sensoryAssessments" smooth={true} duration={500} className="hover:underline cursor-pointer">Sensory Assessment</Link>
                    <Link to="paediatricOT" smooth={true} duration={500} className="hover:underline cursor-pointer">Paediatric OT</Link>
                    <Link to="contactUs" smooth={true} duration={500} className="hover:underline cursor-pointer">Contact Us</Link>
                </div>
            </div>
        </>
    )
}