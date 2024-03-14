import React from 'react'
import Navbar from './Navbar'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="w-full ">
    
    <div className="w-full h-[700px] flex-col bg-[url('https://s3-alpha-sig.figma.com/img/ff80/0167/1a173a4862d7d0e8056995686225ee92?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MK3KVSzaHf79FQeDGKvVkH1LhEtnbhxWLYbRx3-PdVmHMOMNLneZI2kl8as4V8Vr92FxTYO~gyn-xTKHbby6364zBATVxRaF5j3jymF57jLxYG6QnQfDJOLFWkx~FVGCVy6-brCsaFeTPvzrD4jPOZN5hvM02e-3D75PFLoynPEjnMumaLMTPACyT9qri2KSaCO4tjMfloGFKo9eN~Bi3rzAUFfd-~jZoe3qH1dmQMxqwm6PB6tHx31JEMJy4~YRuIshtw6tkgCQ~ylt0yhm2jF6dXsmLs4Ifao50YoFy8YwUG4Vx3KuwccqewL3ErfS03aZgEvxT8kmt-cDWrqfcA__')] bg-cover bg-no-repeat bg-center flex"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        
         <Navbar/>

         <div className=' bg-opacity-40 px-14 pt-14'>
            <h1>You Deserve a Tailor-Made Suit</h1>
            <p>Crafted With Care</p>
            <p>Decades of data, a perfect fit – easily proven!</p>
            <Link href={''}>Book now</Link>
            

         </div>
         
    </div>
</section>
  )
}

export default Hero