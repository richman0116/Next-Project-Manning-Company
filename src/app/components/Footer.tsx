import Link from "next/link";
import Image from "next/image";
import callIcon from "../../../public/assets/Call.svg";
import locationIcon from "../../../public/assets/location.svg";
import whatsappIcon from "../../../public/assets/whatsaapp.svg";
import Wrapper from "../Shared/Wrapper";
import { ABOUT_US, HELP, Onlineshop, TAILORING } from "@/lib/constants";

const Footer = () => {
  return (
    <Wrapper>
      <div className=" bg-[#000000]      ">
        <div className="flex-col pt-12  flex   ">
          <h1 className="font-Akzidenzpc   manningfooter">Manning company</h1>
          <div className="flexCenter flex-col">
            <p className="font-Akzidenz manningshfootor">Bespoke tailors</p>
            <p className="font-Akzidenz manningshfootor">Since 1979</p>
          </div>
        </div>
        <div className=" w-full  pt-10 justify-center  flex md:flex-row lg:flex-row gap-[80px]   flex-col-reverse  ">
          <div className=" grid md:grid-cols-4 lg:grid-cols-4 grid-cols-2  gap-[40px] p-4 ">
            <div className=" ">
              <div className="headingfootoer font-Akzidenz">Online shop</div>
              <div>
                {Onlineshop.map((item, index) => (
                  <Link href={item.href} key={index} className="footer">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            {/* Help */}
            <div className="">
              <div className="headingfootoer font-Akzidenz">Help</div>
              <div>
                {HELP.map((item, index) => (
                  <Link href={item.href} key={index} className="footer">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            {/* About us */}
            <div className="">
              <div className="headingfootoer font-Akzidenz">About us</div>
              <div>
                {ABOUT_US.map((item, index) => (
                  <Link href={item.href} key={index} className="footer">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            {/* Tailoring */}
            <div className="">
              <div className="headingfootoer font-Akzidenz">Tailoring</div>
              <div>
                {TAILORING.map((item, index) => (
                  <Link href={item.href} key={index} className="footer">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* Newsletter */}
          <div className=" ">
            <div className=" p-4 w-full md:w-[360px] ">
              <h1 className="headingfootoer  md:justify-start flexCenter font-Akzidenz">
                newsletter
              </h1>
              <p className="footer md:text-start text-center  flexCenter">
                We will keep you posted with promotions, trunk shows & new
                offers
              </p>
              <div className="flex flex-col p-4 justify-center ">
                <div className="text-white md:w-[280.07px] flex flex-col">
                  <input
                    type="text"
                    className="form  mb-2"
                    placeholder="Full Name"
                  />
                  <input
                    type="email"
                    className="form   mb-2"
                    placeholder="Email"
                  />
                  <input
                    type="Country"
                    className="form  mb-2"
                    placeholder="Country"
                  />

                  <button className="flexCenter  footer font-Akzidenz">
                    Subscribe
                  </button>
                </div>

                <div className="flex  flexCenter pt-4">
                  <label className=" footer font-Akzidenz">
                    I have read and agreed with the{" "}
                    <Link href={""} className="relative">
                      Privacy Policy
                      <div className="absolute left-0 right-0 top-2.5  footer  bottom-0 h-0.5 bg-white"></div>
                    </Link>
                  </label>
                </div>
              </div>
            </div>
            {/* Contact information */}
            <div className="flex lg:flex-row  p-4 w-full flex-col md:flex-row text-white pt-4  gap-[46px]  ">
              <div className="flex flex-col footer font-Akzidenz ">
                <div className="flex items-center gap-[10px]">
                  <Image src={callIcon} alt="Call Icon" />
                  <p className=" footer font-Akzidenz">+852 2111 1955</p>
                </div>
                <div className="flex items-center gap-[10px]">
                  <Image src={whatsappIcon} alt="WhatsApp Icon" />
                  <p className="font-Akzidenz footer">+852 5169 7732</p>
                </div>
              </div>
              <div className="flex   gap-[10px]  ">
                <div className=" pt-3">
                  <Image src={locationIcon} alt="Location Icon" />
                </div>
                <p className=" footer font-Akzidenz">
                  Shop 22B, G/F., Hankow Centre,
                  <br />
                  5-15 Hankow Road Tsim Sha Tsui,
                  <br />
                  Kowloon Hong Kong
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full Copyright p-4 text-center">
          © 2024 Copyright by Manning Company{" "}
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
