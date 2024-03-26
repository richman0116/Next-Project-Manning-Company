import About_Us from "@/app/components/About_Us";
import Collection from "@/app/components/Collection";
import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import OurBrands from "@/app/components/OurBrands";
import OurProcess from "@/app/components/OurProcess";
import ShopNowCol from "@/app/components/ShopNowCol";
import Testimonials from "@/app/components/Testimonials";
import { getCollections } from "@/lib/shopify";
import Wrapper from "./Shared/Wrapper";

export default async function Home() {
  const collections = await getCollections();
  const slicedCollections = collections.slice(1);
  return (
    <Wrapper>
      <div className=" bg-[#F9F9F9]">
        <Hero />
        <About_Us />
        <OurProcess />
        {slicedCollections && <Collection collections={slicedCollections} />}
        <ShopNowCol />
        <OurBrands />
        <Testimonials />
      </div>
    </Wrapper>
  );
}
