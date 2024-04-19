'use client'
import { useState } from 'react';
import Image from 'next/image';
import { COUNTRY_NAMES } from '@/lib/constants';
import '../../../public/assets/custom.css'

const SelectCountryDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('Select Country');
  const [flagUrl, setFlagUrl] = useState('');

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleCountrySelection = (country: string, flagUrl: string) => {
    setSelectedCountry(country);
    setFlagUrl(flagUrl);
    setShowDropdown(false);
  }

  return (
    <div className='relative pt-[100px] w-[300px] gap-10'>
      <button
        className={"bg-white rounded-[10px] shadow-md w-full mb-[10px] flex items-center justify-between"}
        onClick={toggleDropdown}
      >
        <div className='flex flex-row gap-5  py-5 px-[30px] items-center'>
          {flagUrl ? <Image src={flagUrl} alt='image' width={40} height={28} style={{ width: "auto", height: "auto" }}/> : ''}
          <span className='text-[16px] font-semibold'>{selectedCountry}</span>
        </div>
        {
          showDropdown ?
            <div className='pr-6'>
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="12" viewBox="0 0 19 12" fill="none">
                <path d="M17.9706 10.4854L9.48535 2.00014L1.00007 10.4854" stroke="#333333" strokeWidth="2"/>
              </svg>
            </div>
            :
            <div className='pr-6'>
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="12" viewBox="0 0 19 12" fill="none">
                <path d="M1.00007 1.48528L9.48535 9.97056L17.9706 1.48528" stroke="#333333" strokeWidth="2"/>
              </svg>
            </div>
        }
      </button>

      <div className={`${showDropdown ? 'block' : 'hidden'} bg-white rounded-[10px] shadow-md absolute w-full max-h-[280px] overflow-auto `}>
        {
          COUNTRY_NAMES.map((countryName, index) => (
            <div onClick={() => handleCountrySelection(countryName.name, countryName.flagUrl)} key={countryName.key + index} className="flex flex-row gap-5 py-5 px-[30px] items-center hover:cursor-pointer">
              <Image src={countryName.flagUrl} alt='image' width={40} height={28} style={{ width: "auto", height: "auto" }}/>
                <span className='text-[16px] font-semibold'>{countryName.name}</span>
            </div>
          ))   
        }
      </div>
    </div>
  );
};

export default SelectCountryDropdown;