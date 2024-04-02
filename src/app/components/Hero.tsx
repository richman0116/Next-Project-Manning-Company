import Link from "next/link";
import Wrapper from "../Shared/Wrapper";
const Hero = () => {
  return (
    <Wrapper>
      <section className="relative md:mt-0 mt-[96px]  ">
        <div className="flex flex-col  w-full h-[447px] md:h-[880px] bg-hero bg-cover  bg-center  ">
          <div className="absolute w-full h-[447px] md:h-[880px] bg-[#00000066] bg-opacity-80">
            <div className="md:px-[62px]  md:mt-72 text-white mt-[146px]   bg-opacity-40  flex flex-col md:items-start items-center  sm:px-4">
              <h1 className="font-Akzidenregular  md:leading-[15px]     leading-[7.038px]    Deserve">
                You Deserve a Tailor-Made Suit
              </h1>
              <p className=" text-center   md:pt-0 pt-[2px] ">
                <span className="font-SaolDisplayR md:leading-[55px] text-[28px] md:text-[60px]  leading-[25px]  Crafted">
                  Crafted {""}
                </span>
                <span className="font-SaolDisplay md:leading-[55px] text-[28px] md:text-[60px]  leading-[25px] WithCare">
                  With Care
                </span>
              </p>
              <p className="Decades leading-[1.421px] md:pt-0 pt-[3px] md:leading-[35px] text-[16px] md:text-[36px] font-SaolDisplayR  text-center">
                Decades of data, a perfect fit – easily proven!
              </p>
              <Link
                href="/"
                className="relative Booknow border-b-[1px] pt-[17px]  font-Akzidenregular"
              >
                Book now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Hero;
