import Link from "next/link";
import Image from "next/image";
import callIcon from "../../../public/assets/Call.svg";
import locationIcon from "../../../public/assets/location.svg";
import whatsappIcon from "../../../public/assets/whatsaapp.svg";
import Wrapper from "../Shared/Wrapper";
const Footer = () => {
  return (
    <Wrapper>
      <div className="bg-[#F9F9F9] ">
        <div className="bg-[#000000]  w-full pt-10">
          <div className="flex flex-col gap-1 text-white flexCenter  ">
            <h1 className=" font-Akzidenzpc  text-3xl uppercase">
              Manning company
            </h1>
            <div className="flexCenter flex-col flex gap-1">
              <p className=" font-Akzidenz  uppercase">Bespoke tailors</p>
              <p className=" font-Akzidenz ">Since 1979</p>
            </div>
          </div>
          <div className=" w-full flex md:flex-row lg:flex-row   flex-col-reverse  ">
            <div className=" grid md:grid-cols-4 lg:grid-cols-4 grid-cols-2  gap-2">
              <div className="p-5 ">
                <div className="fheading">Online shop</div>
                <Link href="/#" className="footer ">
                  Bespoke Shirts
                </Link>
                <Link href="/#" className="footer ">
                  Ties
                </Link>
                <Link href="/#" className="footer ">
                  Bow Ties
                </Link>
                <Link href="/#" className="footer ">
                  Pocket Squares
                </Link>
                <Link href="/#" className="footer ">
                  Cufflinks
                </Link>
                <Link href="/#" className="footer ">
                  Braces / Suspenders
                </Link>
                <Link href="/#" className="footer ">
                  Tuxedos Studs
                </Link>
                <Link href="/#" className="footer ">
                  Collar Stays
                </Link>
                <Link href="/#" className="footer ">
                  Collar Bars
                </Link>
                <Link href="/#" className="footer ">
                  Socks
                </Link>
              </div>
              {/* Help */}
              <div className="p-5">
                <div className="fheading">Help</div>
                <Link href="/#" className="footer ">
                  Privacy and Cookies Policy
                </Link>
                <Link href="/#" className="footer ">
                  Terms and Conditions
                </Link>
                <Link href="/#" className="footer ">
                  Shipping and Returns
                </Link>
                <Link href="/#" className="footer ">
                  Contact Us
                </Link>
                <Link href="/#" className="footer ">
                  FAQs
                </Link>
                <Link href="/#" className="footer ">
                  Payment Options
                </Link>
              </div>
              {/* About us */}
              <div className="p-5">
                <div className="fheading">About us</div>
                <Link href="/#" className="footer ">
                  About Manning
                </Link>
                <Link href="/#" className="footer ">
                  Careers
                </Link>
                <Link href="/#" className="footer ">
                  Blog
                </Link>
                <Link href="/#" className="footer ">
                  Google
                </Link>
                <Link href="/#" className="footer ">
                  Facebook
                </Link>
                <Link href="/#" className="footer ">
                  Instagram
                </Link>
                <Link href="/#" className="footer ">
                  Twitter
                </Link>
              </div>
              {/* Tailoring */}
              <div className="p-5">
                <div className="fheading">Tailoring</div>
                <Link href="/#" className="footer ">
                  Hong Kong Alternations
                </Link>
                <Link href="/#" className="footer ">
                  Custom Tailoring
                </Link>
                <Link href="/#" className="footer ">
                  Trunk Shows
                </Link>
                <Link href="/#" className="footer ">
                  Make an Appointment
                </Link>
                <Link href="/#" className="footer ">
                  Gift Voucher
                </Link>
                <Link href="/#" className="footer ">
                  Reviews
                </Link>
                <Link href="/#" className="footer ">
                  Ladies Tailoring
                </Link>
                <Link href="/#" className="footer ">
                  Wedding Wear
                </Link>
                <Link href="/#" className="footer ">
                  Affiliation
                </Link>
                <Link href="/#" className="footer ">
                  Referral Program
                </Link>
                <Link href="/#" className="footer ">
                  Custom Suit Hong Kong
                </Link>
              </div>
            </div>
            {/* Newsletter */}
            <div className="">
              <div className="p-5 w-full">
                <h1 className="fheading">newsletter</h1>
                <p className="footer  text-center">
                  We will keep you posted with promotions, trunk shows & new
                  offers
                </p>
                <div className="flex flex-col pt-4 justify-center ">
                  <div className=" text-white flex flex-col ">
                    <input
                      type="text"
                      className="form"
                      placeholder="Full Name"
                    />
                    <input type="email" className="form" placeholder="Email" />
                    <input
                      type="Country"
                      className="form"
                      placeholder="Country"
                    />
                  </div>
                  <button className="flexCenter  text-white font-Akzidenz">
                    Subscribe
                  </button>
                  <div className="flex gap-2 flexCenter pt-8">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label className="text-sm text-white footer font-Akzidenz">
                      I have read and agreed with the{" "}
                      <Link href={""} className="relative">
                        Privacy Policy
                        <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-white"></div>
                      </Link>
                    </label>
                  </div>
                </div>
              </div>
              {/* Contact information */}
              <div className="flex lg:flex-row p-4 w-full flex-col md:flex-row text-white pt-6 gap-4">
                <div className="flex flex-col footer font-Akzidenz gap-3">
                  <div className="flex pb-4 items-center">
                    <Image src={callIcon} alt="Call Icon" />
                    <p className="pl-2 pb-2 font-Akzidenz">+852 2111 1955</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Image src={whatsappIcon} alt="WhatsApp Icon" />
                    <p className="font-Akzidenz">+852 5169 7732</p>
                  </div>
                </div>
                <div className="flex  gap-3  ">
                  <Image src={locationIcon} alt="Location Icon" />
                  <p className="font-Akzidenz">
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
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
