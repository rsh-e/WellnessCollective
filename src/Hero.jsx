import HeroImage from './assets/HeroImage.png'
import Image from './Image'
import { Link } from 'react-scroll';

export default function Hero() {
    return (
        <div id='hero' className="max-w-screen-2xl mx-auto">
            <div className="flex flex-row items-center p-12">
                <div className="mr-60">
                    <div className="text-6xl pb-4 font-poppins">
                        <h1>Your <span className="text-cyan-500">Wellness</span>,</h1>
                        <h1 className='mt-1'>Is Our <span className=" text-cyan-500">Priority</span></h1>
                    </div>

                    <p className="font-poppins mt-2 mb-5">At <span className="font-bold">Wellness Collective</span>, we offer a wide range of therapies <br /> which help you tackle the struggles of everyday life</p>
                    <Link to="therapies" smooth={true} duration={500} className="cursor-pointer bg-cyan-500 p-2 font-poppins text-white mt-2"><button className='mb-2'>Explore Our Therapies</button></Link>
                    <Link to="contactUs" smooth={true} duration={500} className="cursor-pointer font-poppins text-cyan-500 block mt-3 underline">Book an Appointment →</Link>
                </div>

                <div className='mt-18 pt-12 flex-shrink-0 ml-32'>
                    <div className="absolute bottom-16 right-20 w-[520px] h-[520px] bg-emerald-300 rounded-full z-0"></div>
                    <Image PictureSrc={HeroImage} bordersAndSize={"rounded-md"} />
                    <div className="absolute top-16 right-144 transform w-[170px] h-[150px] bg-yellow-200 rounded-full z-0"></div>
                </div>
            </div>
        </div>
    );
}
