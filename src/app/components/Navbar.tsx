import Link from 'next/link';
import React from 'react';
import bag from '../../../public/assets/bag-2.svg';
import profile from '../../../public/assets/profile.svg';
import search from '../../../public/assets/search-normal.svg';
import whatsapp from '../../../public/assets/whatsapp.svg';
import Image from 'next/image';


const Navbar = () => {
    const links = [
        {
          id: 1,
          link: "home",
        },
        {
          id: 2,
          link: "home",
        },
        {
          id: 3,
          link: "home",
        },
        {
          id: 4,
          link: "home",
        },
        {
          id: 5,
          link: "home",
        },
      ];

  return (
    <section className="w-full">
      
        <div className='w-full flex flex-col'>
        <div className="bg-opacity-40 flex justify-between m-12 ">
          <div className=" flex gap-3">
          <Link href={''}><Image src={search}  width={24} height={24} alt={''}/></Link>
          <Link href={''}><Image src={whatsapp}  width={24} height={24} alt={''}/></Link>
             
          </div>

          <div className=" flex flex-col text-[#FFFFFF]">
            <h1 className="">Manning company</h1>
            <p className="">Bespoke tailors</p>
            <p className="">Since 1979</p>

          </div>

          <div className=" flex gap-3">
          <Link href={''}><Image src={profile}  width={24} height={24} alt={''}/></Link>
          <Link href={''}><Image src={bag}  width={24} height={24} alt={''}/></Link>
          </div>

        </div>

        <div className=' flex  justify-center'>
        <ul className="flex   gap-[15px]">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className=""
          >
            <Link href={link}>{link}</Link>
          </li>
        ))}
      </ul>

        </div>
        
        </div>




        
    
    </section>
  );
};

export default Navbar;
