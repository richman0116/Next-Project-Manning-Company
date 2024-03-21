import Navbar from './Navbar'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="max-container relative">
      <div className="w-full h-[447px] lg:w-full md:h-[770px] md:w-full lg:h-[770px] flex-col bg-hero bg-cover bg-no-repeat bg-center flex">
        <div className='bg-[#00000066] absolute w-full h-[447px] lg:w-full md:h-[770px] bg-opacity-80'>
          <div>
            <Navbar />
          </div>
          <div className='bg-opacity-40 px-20 pt-14 lg:space-y-2 md:space-y-2 text-[#FFFFFF]'>
            <h1 className='font-Akzidenz text-[10px] px-2 lg:text-xs md:text-xs font-normal uppercase pb-1'>You Deserve a Tailor-Made Suit</h1>
            <p className='font-SaolDisplay md:text-6xl text-[28px] lg:text-6xl leading-10 font-normal pb-1'>Crafted <span className='italic'>With Care</span></p>
            <p className='font-SaolDisplay lg:text-4xl md:text-4xl text-[16px] lg:leading-9 md:leading-9 font-normal'>Decades of data, a perfect fit – easily proven!</p>
            <Link href={'/'}>
              <a className='md:mx-0 lg:mx-0 mx-16 relative font-Akzidenz inline-flex lg:text-[24px] md:text-[24px] items-center'>
                <p>Book now</p>
                <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-white"></div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
