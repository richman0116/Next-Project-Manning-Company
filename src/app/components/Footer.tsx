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
            <p className=" font-Akzidenregular Bespoke text-white">
              Bespoke tailors
            </p>
            <p className="font-Akzidenregular Since text-white">Since 1979</p>
          </div>
        </div>
        <div className=" w-full  pt-10 justify-center  flex md:flex-row lg:flex-row gap-[80px]   flex-col-reverse  ">
          <div className=" grid md:grid-cols-4 lg:grid-cols-4 grid-cols-2  gap-[40px] p-4 ">
            <div className=" ">
              <div className="headingfootoer font-Akzidenregular">
                Online shop
              </div>
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
              <div className="headingfootoer font-Akzidenregular">Help</div>
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
              <div className="headingfootoer font-Akzidenregular">About us</div>
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
              <div className="headingfootoer font-Akzidenregular">
                Tailoring
              </div>
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
            <div className=" p-2 w-full md:w-[370px] ">
              <h1
                className="headingfootoer  md:justify-start flexCenter font-Akzidenregular
              "
              >
                newsletter
              </h1>
              <p className="footer md:text-start text-center  flexCenter">
                We will keep you posted with promotions, trunk shows & new
                offers
              </p>
              <div className="flex flex-col justify-center ">
                <div className="text-white p-6 md:p-0 md:w-[280.07px] flex flex-col">
                  <input
                    type="text"
                    className="formf mb-[18px]     "
                    placeholder="Full Name"
                  />
                  <input
                    type="email"
                    className="formf   mb-[18px]"
                    placeholder="Email"
                  />
                  <input
                    type="Country"
                    className="formf mb-[18px]"
                    placeholder="Country"
                  />

                  <button className="flexCenter  footer font-Akzidenregular">
                    Subscribe
                  </button>
                </div>

                <div className="flex  flexCenter pt-4  md:pr-6">
                  <label className=" footer font-Akzidenregular">
                    I have read and agreed with the{" "}
                    <Link href={""} className="relative">
                      Privacy Policy
                      <div className="absolute left-0 right-0 top-2.5  footer  bottom-0 h-[1px] bg-white"></div>
                    </Link>
                  </label>
                </div>
              </div>
            </div>
            {/* Contact information */}
            <div className="flex lg:flex-row  w-full flex-col md:flex-row text-white  gap-[46px]  ">
              <div className="flex flex-col footer font-Akzidenregular ">
                <div className="flex items-center gap-[10px]">
                  <Image src={callIcon} alt="Call Icon" />
                  <p className=" footer font-Akzidenregular">+852 2111 1955</p>
                </div>
                <div className="flex items-center gap-[10px]">
                  <Image src={whatsappIcon} alt="WhatsApp Icon" />
                  <p className="font-Akzidenregular footer">+852 5169 7732</p>
                </div>
              </div>
              <div className="flex   gap-[10px]  ">
                <div className=" pt-3">
                  <Image src={locationIcon} alt="Location Icon" />
                </div>
                <p className=" footer font-Akzidenregular">
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
