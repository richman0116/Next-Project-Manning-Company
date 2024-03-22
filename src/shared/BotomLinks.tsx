import Link from 'next/link'
import React from 'react'

interface Props {
    text:string
}

const BotomLinks = ({text}:Props) => {
  return (
    <div>
         <Link href={''} className=' underline text-[10px]  md:text-[14px]  pb-1  font-Akzidenz'>
        {text}
        
</Link>
    </div>
  )
}

export default BotomLinks