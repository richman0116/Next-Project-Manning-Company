import Link from 'next/link';
import callIcon from '../../public/assets/Call.svg';
import locationIcon from '../../public/assets/location.svg';
import whatsappIcon from '../../public/assets/whatsapp.svg';

const Footer = () => {
    return (
        <div className="bg-[#000000] max-container mt-20">
            <div className="flex flex-col flexCenter pt-7 pb-7 gap-2 text-[#FFFFFF]">
                <h1 className=" font-Akzidenz text-3xl leading-7 font-bold  uppercase">Manning company</h1>
                <div className='flexCenter flex-col flex gap-2 '>
                    <p className="font-Akzidenz text-[15.27px] font-normal uppercase">Bespoke tailors</p>
                    <p className="font-Akzidenz text-base font-normal">Since 1979</p>
                </div>
            </div>
            <div className="mLinkx-contLinkiner px-4 sm:px-6 text-grLinky-800 flex-wrLinkp flex justify-between">
                <div className="p-5">
                    <div className="text-xs uppercase text-[#FFFFFF] font-medium">Online shop</div>
                    <Link className="footer" href="/#">Bespoke Shirts</Link>
                    <Link className="footer" href="/#">Ties</Link>
                    <Link className="footer" href="/#">Bow Ties</Link>
                    <Link className="footer" href="/#">Pocket SquLinkres</Link>
                    <Link className="footer" href="/#">Cufflinks</Link>
                    <Link className="footer" href="/#">Braces / Suspenders</Link>
                    <Link className="footer" href="/#">Tuxedos Studs</Link>
                    <Link className="footer" href="/#">Collar Stays</Link>
                    <Link className="footer" href="/#">Collar Bars</Link>
                    <Link className="footer" href="/#">Socks</Link>
                </div>
                <div className="p-5">
                    <div className="text-xs uppercase text-[#FFFFFF] font-medium">Help</div>
                    <Link className="footer" href="/#">Privacy and Cookies Policy</Link>
                    <Link className="footer" href="/#">Terms and Conditions</Link>
                    <Link className="footer" href="/#">Shipping and Returns</Link>
                    <Link className="footer" href="/#">Contact Us</Link>
                    <Link className="footer" href="/#">FAQs</Link>
                    <Link className="footer" href="/#">Payment Options</Link>
                </div>
                <div className="p-5">
                    <div className="text-xs uppercase text-[#FFFFFF] font-medium">About us</div>
                    <Link className="footer" href="/#">About Manning</Link>
                    <Link className="footer" href="/#">Careers</Link>
                    <Link className="footer" href="/#">Blog</Link>
                    <Link className="footer" href="/#">Google</Link>
                    <Link className="footer" href="/#">Facebook</Link>
                    <Link className="footer" href="/#">Instagram</Link>
                    <Link className="footer" href="/#">Twitter</Link>
                </div>
                <div className="p-5">
                    <div className="text-xs uppercase text-[#FFFFFF] font-medium">Tailoring</div>
                    <Link className="footer" href="/#">Hong Kong Alternations</Link>
                    <Link className="footer" href="/#">Custom Tailoring</Link>
                    <Link className="footer" href="/#">Trunk Shows</Link>
                    <Link className="footer" href="/#">Make an Appointment</Link>
                    <Link className="footer" href="/#">Gift Voucher</Link>
                    <Link className="footer" href="/#">Reviews</Link>
                    <Link className="footer" href="/#">Ladies Tailoring</Link>
                    <Link className="footer" href="/#">Wedding Wear</Link>
                    <Link className="footer" href="/#">Affiliation</Link>
                    <Link className="footer" href="/#">Referral Program</Link>
                    <Link className="footer" href="/#">Custom Suit Hong Kong</Link>
                </div>
                <div className="p-5">
                    <div className="text-xs uppercase text-[#FFFFFF] font-medium">Newsletter</div>
                    <p className="footer">We will keep you posted with promotions, trunk shows & new offers</p>
                    <div className='flex flex-col'>
                        <input type="text" className="p-2 bg-[#0F0F0F] rounded-md mb-4" placeholder="Full Name"/>
                        <input type="email" className="p-2 bg-[#0F0F0F] rounded-md mb-4" placeholder="Email"/>
                        <input type="Country" className="p-2 bg-[#0F0F0F] rounded-md mb-4" placeholder="Country"/>
                        <button className='flexCenter text-white'>Subscribe</button>
                        <div className='flex gap-2 flexCenter pt-8'>
                            <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"/>
                            <label className="text-sm text-white footer">I have read and agreed with the <Link href={''} className='relative'>Privacy Policy<div className="absolute left-0 right-0 bottom-0 h-0.5 bg-white"></div></Link></label>
                        </div>
                    </div>
                    <div className='flex text-white pt-6 gap-4'>
                        <div className='flex flex-col footer'>
                            <div>
                                <p className='pb-2'>+852 2111 1955</p>
                            </div>
                            <p>+852 5169 7732</p>
                        </div>
                        <div className='flex w-60 footer text-center'>
                            <p>Shop 22B, G/F., Hankow Centre,<br/>5-15 Hankow Road Tsim Sha Tsui,<br/>Kowloon Hong Kong</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
