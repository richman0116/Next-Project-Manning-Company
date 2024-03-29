import Link from "next/link";
import Image from "next/image";
import callIcon from "../../../public/assets/Call.svg";
import locationIcon from "../../../public/assets/location.svg";
import whatsappIcon from "../../../public/assets/whatsaapp.svg";
import Wrapper from "../Shared/Wrapper";
const linksData = [
  "Bespoke Shirts",
  "Ties",
  "Bow Ties",
  "Pocket Squares",
  "Cufflinks",
  "Braces / Suspenders",
  "Tuxedos Studs",
  "Collar Stays",
  "Collar Bars",
  "Socks",
];
const linksData2 = [
  "Privacy and Cookies Policy",
  "Terms and Conditions",
  "Shipping and Returns",
  "Contact Us",
  "FAQs",
  "Payment Options",
];
const linksData3 = [
  "About Manning",
  "Careers",
  "Blog",
  "Google",
  "Facebook",
  "Instagram",
  "Twitter",
];
const linksData4 = [
  "Hong Kong Alternations",
  "Custom Tailoring",
  "Trunk Shows",
  "Make an Appointment",
  "Gift Voucher",
  "Reviews",
  "Ladies Tailoring",
  "Wedding Wear",
  "Affiliation",
  "Referral Program",
  "Custom Suit Hong Kong",
];

const Footer = () => {
  return (
    <Wrapper>
      <div className=" bg-[#F9F9F9] h-[644px]  pt-[120px]  ">
        <div className="bg-[#000000]  w-full ">
          <div className="flex-col  flex pt-10 ">
            <h1 className="font-Akzidenzpc   manningfooter">Manning company</h1>
            <div className="flexCenter flex-col">
              <p className="font-Akzidenz manningshfootor">Bespoke tailors</p>
              <p className="font-Akzidenz manningshfootor">Since 1979</p>
            </div>
          </div>
          <div className=" w-full flexCenter flex md:flex-row lg:flex-row   flex-col-reverse  ">
            <div className=" grid md:grid-cols-4 lg:grid-cols-4 grid-cols-2  gap-4 ">
              <div className=" ">
                <div className="headingfootoer font-Akzidenz">Online shop</div>
                <div>
                  {linksData.map((text, index) => (
                    <Link href="#" key={index} className="footer">
                      {text}
                    </Link>
                  ))}
                </div>
              </div>
              {/* Help */}
              <div className="">
                <div className="headingfootoer font-Akzidenz">Help</div>
                <div>
                  {linksData2.map((text, index) => (
                    <Link href="#" key={index} className="footer">
                      {text}
                    </Link>
                  ))}
                </div>
              </div>
              {/* About us */}
              <div className="">
                <div className="headingfootoer font-Akzidenz">About us</div>
                <div>
                  {linksData3.map((text, index) => (
                    <Link href="#" key={index} className="footer">
                      {text}
                    </Link>
                  ))}
                </div>
              </div>
              {/* Tailoring */}
              <div className="">
                <div className="headingfootoer font-Akzidenz">Tailoring</div>
                <div>
                  {linksData4.map((text, index) => (
                    <Link href="#" key={index} className="footer">
                      {text}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {/* Newsletter */}
            <div className=" ">
              <div className=" w-full md:w-[316px] md:px-4 p-2  md:pt-[150px]">
                <h1 className="headingfootoer  pt-5 font-Akzidenz">
                  newsletter
                </h1>
                <p className="footer  ">
                  We will keep you posted with promotions, trunk shows & new
                  offers
                </p>
                <div className="flex flex-col pt-4 justify-center ">
                  <div className="text-white flex flex-col">
                    <input
                      type="text"
                      className="form border border-white rounded-md mb-2"
                      placeholder="Full Name"
                    />
                    <input
                      type="email"
                      className="form border border-white rounded-md mb-2"
                      placeholder="Email"
                    />
                    <input
                      type="Country"
                      className="form border border-white rounded-md mb-2"
                      placeholder="Country"
                    />
                  </div>

                  <button className="flexCenter  footer font-Akzidenz">
                    Subscribe
                  </button>
                  <div className="flex  flexCenter pt-8">
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
              <div className="flex lg:flex-row p-4 w-full flex-col md:flex-row text-white pt-6 gap-4">
                <div className="flex flex-col footer font-Akzidenz ">
                  <div className="flex items-center">
                    <Image src={callIcon} alt="Call Icon" />
                    <p className=" footer font-Akzidenz">+852 2111 1955</p>
                  </div>
                  <div className="flex items-center ">
                    <Image src={whatsappIcon} alt="WhatsApp Icon" />
                    <p className="font-Akzidenz footer">+852 5169 7732</p>
                  </div>
                </div>
                <div className="flex  gap-[10px]  ">
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
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
