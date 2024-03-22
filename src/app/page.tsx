import About_Us from "@/components/About_Us";
import Collection from "@/components/Collection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import OurBrands from "@/components/OurBrands";
import OurProcess from "@/components/OurProcess";
import ShopNowCol from "@/components/ShopNowCol";
import Testimonials from "@/components/Testimonials";
import { getCollections } from "@/lib/shopify";


export default async function  Home () {
      const collections = await getCollections();
    const slicedCollections = collections.slice(1);
  return (
    <div className="bg-[#F9F9F9] h-full">
      <Hero/>
      <About_Us/>
    <OurProcess/>
    {slicedCollections && <Collection collections={slicedCollections} />}
    <ShopNowCol/>
    <OurBrands/>
    <Testimonials/>
    
    </div>
  );
}
