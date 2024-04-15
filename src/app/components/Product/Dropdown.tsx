import Wrapper from "@/app/Shared/Wrapper";
import React from "react";

const Dropdown = () => {
  const colorOptions = ["COLOR", "Red", "Blue", "Green"];
  const designOptions = ["DESIGN", "Stripes", "Checkered", "Plain"];
  const weightOptions = ["FABRIC WEIGHT SHIRTS", "Light", "Medium", "Heavy"];
  const fabricOptions = ["FABRIC TYPE", "Cotton", "Polyester", "Silk"];
  const priceOptions = ["PRICE", "Low", "Medium", "High"];
  return (
    <Wrapper>
      <div className="flex flex-wrap flexCenter pt-[68px] gap-[41px] w-full">
        <div className=" hidden md:block">
          <select id="color" className="p-2 bg-[#F9F9F9]">
            {colorOptions.map((option, index) => (
              <option
                className="filtersection font-Akzidenz"
                key={index}
                value={option.toLowerCase()}
              >
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className=" hidden md:block">
          <select id="design" className="p-2 bg-[#F9F9F9]">
            {designOptions.map((option, index) => (
              <option
                className="filtersection font-Akzidenz"
                key={index}
                value={option.toLowerCase()}
              >
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className=" hidden md:block">
          <select id="weight" className="p-2 bg-[#F9F9F9]">
            {weightOptions.map((option, index) => (
              <option
                className="filtersection font-Akzidenz"
                key={index}
                value={option.toLowerCase()}
              >
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className=" hidden md:block">
          <select id="fabric" className="p-2 bg-[#F9F9F9]">
            {fabricOptions.map((option, index) => (
              <option
                className="filtersection font-Akzidenz"
                key={index}
                value={option.toLowerCase()}
              >
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className=" hidden md:block">
          <select id="price" className="p-2 bg-[#F9F9F9]">
            {priceOptions.map((option, index) => (
              <option
                className="filtersection font-Akzidenz"
                key={index}
                value={option.toLowerCase()}
              >
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className=" hidden md:block">
          <p className="filtersection font-Akzidenz">Clear all</p>
        </div>
        <div className=" hidden md:block">
          <p className="filtersection font-Akzidenz">CHANGE VIEW</p>
        </div>
        <div className="flex bg-[#F9F9F9]  md:pt-0 pt-[150px]  border-b-2 border-black mr-4">
          <div className=" pt-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
            >
              <path
                d="M6.03645 2.0249C7.10035 2.0249 8.12067 2.44753 8.87296 3.19982C9.62525 3.95211 10.0479 4.97243 10.0479 6.03633C10.0479 7.02993 9.68377 7.9433 9.08514 8.64684L9.25177 8.81347H9.73931L12.825 11.8992L11.8993 12.8249L8.8136 9.73919V9.25165L8.64697 9.08502C7.94342 9.68364 7.03005 10.0478 6.03645 10.0478C4.97256 10.0478 3.95223 9.62513 3.19994 8.87284C2.44766 8.12055 2.02502 7.10023 2.02502 6.03633C2.02502 4.97243 2.44766 3.95211 3.19994 3.19982C3.95223 2.44753 4.97256 2.0249 6.03645 2.0249ZM6.03645 3.25919C4.4936 3.25919 3.25931 4.49347 3.25931 6.03633C3.25931 7.57919 4.4936 8.81347 6.03645 8.81347C7.57931 8.81347 8.8136 7.57919 8.8136 6.03633C8.8136 4.49347 7.57931 3.25919 6.03645 3.25919Z"
                fill="#2B2B2B"
              />
            </svg>
          </div>
          <div className="bg-[#F9F9F9]  ">
            <input
              type="text"
              placeholder="Search"
              className="bg-[#F9F9F9] focus:outline-none"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Dropdown;
