import Navbar from './Navbar';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative max-container">
      <div className="flex flex-col w-full h-[447px] md:h-[770px] bg-hero bg-cover bg-no-repeat bg-center">
        <div className='absolute w-full h-[447px] md:h-[770px] bg-[#00000066] bg-opacity-80'>
          
          <div className='md:px-20 md:pt-64 text-[#FFFFFF]  pt-52 px-6 bg-opacity-40 lg:space-y-2 md:space-y-2'>
            <h1 className='font-Akzidenz uppercase px-2  text-xs:'>You Deserve a Tailor-Made Suit</h1>
            <p className='text-4xl md:text-6xl  lg:text-6xl'>
              <span className='font-SaolDisplayR'>Crafted</span> <span className='font-SaolDisplay'>With Care</span>
            </p>
            <p className='md:text-[36px] font-SaolDisplayR'>
              Decades of data, a perfect fit – easily proven!
            </p>
            <Link href={'/'} className='relative block text-[10px]  md:text-[14px]  underline md:block   flexCenter font-Akzidenz'>
              Book now
             
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
