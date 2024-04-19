import React from "react";
import SelectCountry from "../SelectCountry";
import BookCardContainer from "./BookCardContainer";
import Wrapper from "../../Shared/Wrapper";
import { COUNTRY_NAMES } from "@/lib/constants";
import SelectCountryDropdown from "../SelectCountryDropdown";

const TrunkShow = () => {
  return (
    <Wrapper>
      <div className="bg-[#F9F9F9] md:pt-[270px] pt-[150px] flex flex-col justify-center items-center"  >
        <div className="pt-[50px]">
          <h1 className="text-Dark text-center font-SaolDisplayR text-[40px] leading-normal">
            Trunk Show
          </h1>
          <div className="flex flex-col items-center justify-center gap-9 xl:gap-3 pt-[60px] px-[60px]">
            <p className="text-center text-base font-Akzidenregular">
                Mail us to schedule your city appointment. Discover our traveling studios, book your spot, and step into the world of bespoke tailoring.
            </p>
            <p className="text-center text-base font-Akzidenregular">
                Hours: 9AM - 8PM (By Appointment Only) Please select your desired venue and click on the “Make Appointment” button.
            </p>
            <p className="text-center text-base font-Akzidenregular">
              Contact our sales team at 415-283-5614 which will be active during tour dates only, or email info@ManningCompany.com for appointments.
            </p>
          </div>
        </div>
        <div className="flex md:hidden">
          <SelectCountryDropdown />
        </div>
        <div className="hidden md:flex">
          <div className="pt-[100px] grid grid-cols-2 grid-rows-5 lg:grid-cols-5 lg:grid-rows-2 gap-x-[30px] gap-y-[10px]">
            {
              COUNTRY_NAMES.map((countryName, index) => (
                <SelectCountry name={countryName.name} key={index}/>
              ))
            }
          </div>
        </div>
        <div className="">
          <BookCardContainer />
        </div>
        <p className="text-gray-400 font-Akzidenregular text-base font-normal leading-6 text-center px-2 pt-[90px] pb-[120px]">If your city is not listed below, please email at info@manningcompany.com</p>
      </div>
    </Wrapper>
  );
};

export default TrunkShow;
