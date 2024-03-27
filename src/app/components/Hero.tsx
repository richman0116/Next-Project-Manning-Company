import Link from "next/link";
import Wrapper from "../Shared/Wrapper";
const Hero = () => {
  return (
    <Wrapper>
      <section className="relative  ">
        <div className="flex flex-col  w-full h-[447px] md:h-[880px] bg-hero bg-cover ">
          <div className="absolute w-full h-[447px] md:h-[880px] bg-[#00000066] bg-opacity-80">
            <div className="md:px-20 md:pt-96 text-white pt-52  bg-opacity-40  flex flex-col md:items-start items-center  sm:px-4">
              <h1 className="font-Akzidenz freme8 leading-[15px] text-center">
                You Deserve a Tailor-Made Suit
              </h1>
              <p className="text-[28px] lg:text-[63px] md:text-[63px] leading-[25px]   md:leading-[55px] text-center">
                <span className="font-SaolDisplayR fremeh8">Crafted</span>
                <span className="font-SaolDisplay fremei8">With Care</span>
              </p>
              <p className="Decades md:text-[40px] font-SaolDisplayR  text-center">
                Decades of data, a perfect fit – easily proven!
              </p>
              <Link
                href="/"
                className="relative border-b pt-5 border-current bottomL text-center"
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
