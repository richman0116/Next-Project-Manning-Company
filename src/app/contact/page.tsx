import Wrapper from "../Shared/Wrapper";
import ContactForm from "../components/ContactForm";
import GoogleMap from "../components/GoogleMap";
import Form from "../components/Form";

const Page = () => {
  return (
    <Wrapper>
      <div className="bg-[#F9F9F9] md:pt-[270px] pt-[200px] flex flex-col items-center w-full">
        <div className="pt-[50px]">
          <h1 className="text-Dark text-center font-SaolDisplayl text-[40px] leading-normal">
            Contact Us
          </h1>
        </div>
        <div className="flex flex-col-reverse xl:flex-row pt-[120px] pb-[150px] w-full gap-[100px] xl:gap-[160px] sm:px-[0px] md:px-[100px] xl:px-[160px] justify-between">
          <div className="flex flex-col w-auto xl:w-1/2 gap-16">
            <ContactForm />
            <GoogleMap />
          </div>
          <Form />
        </div>
      </div>
    </Wrapper>
  );
};

export default Page;
