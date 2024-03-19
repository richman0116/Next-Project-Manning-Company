import Link from 'next/link'
import React from 'react'

interface Props {
    text:string
}

const BotomLinks = ({text}:Props) => {
  return (
    <div>
         <Link href={''} className='relative font-Akzidenz inline-flex text-[24px] items-center'>
        <p className='text-[24px]'>{text}</p>
  <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-black"></div>
</Link>
    </div>
  )
}

export default BotomLinks