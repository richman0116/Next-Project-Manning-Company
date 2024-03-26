import Link from "next/link";
import Wrapper from "../Shared/Wrapper";
const Hero = () => {
  return (
    <Wrapper>
      <section className="relative ">
        <div className="flex flex-col w-full h-[447px] md:h-[770px] bg-hero bg-cover bg-no-repeat bg-center">
          <div className="absolute w-full h-[447px] md:h-[770px] bg-[#00000066] bg-opacity-80">
            <div className="md:px-20 md:pt-64 text-white pt-52  bg-opacity-40  flex flex-col md:items-start items-center gap-2.5 sm:px-4">
              <h1 className="font-Akzidenz freme8 leading-[15px] text-center">
                You Deserve a Tailor-Made Suit
              </h1>
              <p className="text-[28px] md:text-[60px] leading-[25px]   md:leading-[55px] lg:text-[60px] text-center">
                <span className="font-SaolDisplayR fremeh8">Crafted</span>
                <span className="font-SaolDisplay fremei8">With Care</span>
              </p>
              <p className="Decades md:text-[36px] font-SaolDisplayR  text-center">
                Decades of data, a perfect fit – easily proven!
              </p>
              <Link
                href="/"
                className="relative border-b border-current bottomL text-center"
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
