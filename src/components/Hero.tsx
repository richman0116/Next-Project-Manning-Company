import React from 'react'
import Navbar from './Navbar'

import Link from 'next/link'


const Hero = () => {
  return (
    
    <section className="max-container  relative ">
    
    <div className="w-full h-[770px] flex-col bg-[url('https://s3-alpha-sig.figma.com/img/ff80/0167/1a173a4862d7d0e8056995686225ee92?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MK3KVSzaHf79FQeDGKvVkH1LhEtnbhxWLYbRx3-PdVmHMOMNLneZI2kl8as4V8Vr92FxTYO~gyn-xTKHbby6364zBATVxRaF5j3jymF57jLxYG6QnQfDJOLFWkx~FVGCVy6-brCsaFeTPvzrD4jPOZN5hvM02e-3D75PFLoynPEjnMumaLMTPACyT9qri2KSaCO4tjMfloGFKo9eN~Bi3rzAUFfd-~jZoe3qH1dmQMxqwm6PB6tHx31JEMJy4~YRuIshtw6tkgCQ~ylt0yhm2jF6dXsmLs4Ifao50YoFy8YwUG4Vx3KuwccqewL3ErfS03aZgEvxT8kmt-cDWrqfcA__')] bg-cover bg-no-repeat bg-center flex"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className='bg-[#00000066] absolute  h-[770px] w-full bg-opacity-80'>
         <div className=' '>
         <Navbar/>
         </div>
         <div className=' bg-opacity-40 px-14 pt-14  space-y-2 text-[#FFFFFF]'>
            <h1 className=' font-Akzidenz text-xs font-normal uppercase pb-1  '>You Deserve a Tailor-Made Suit</h1>
            <p className='  font-SaolDisplay text-6xl  leading-10 font-normal pb-1'>Crafted <span className=' italic'>With Care</span></p>
            <p className=' font-SaolDisplay text-4xl leading-9 font-normal '>Decades of data, a perfect fit – easily proven!</p>
      
            <Link href={''} className='relative font-Akzidenz inline-flex text-[24px] items-center'>
        <p className='text-[24px]'>Book now</p>
  <div className="absolute left-0 right-0 bottom-0 h-0.5  bg-white"></div>
</Link>

         </div>
         
         </div>
    </div>
    
</section>

  )
}

export default Hero