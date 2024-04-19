import Collection from "@/app/components/Collection";
import Hero from "@/app/components/Hero";
import OurBrands from "@/app/components/OurBrands";
import OurProcess from "@/app/components/OurProcess";
import ShopNowCol from "@/app/components/ShopNowCol";
import Testimonials from "@/app/components/Testimonials";
import { getCollections } from "@/lib/shopify";
import Wrapper from "./Shared/Wrapper";
import AboutUs from "@/app/components/AboutUs";

export default async function Home() {
  const collections = await getCollections();
  const slicedCollections = collections.slice(1);
  return (
    <Wrapper>
      <div className=" bg-[#F9F9F9] overflow-hidden">
        <Hero />
        <AboutUs />
        <OurProcess />
        {slicedCollections && <Collection collections={slicedCollections} />}
        <ShopNowCol />
        <OurBrands />
        <Testimonials />
      </div>
    </Wrapper>
  );
}
