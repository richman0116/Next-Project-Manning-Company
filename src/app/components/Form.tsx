const Form = () => {
  return (
    <div className="flex flex-col relative gap-6 bg-white shadow-md p-3 md:p-8 xl:p-16 pt-20 w-auto xl:w-1/2 justify-center items-center">
      <input
        placeholder="Name*"
        className="placeholder-[#828282] font-[16px] focus:bg-white rounded-[10px] w-full h-12 xl:h-16 bg-gray-100 p-4"
      />
      <input
        placeholder="Email*"
        className="placeholder-[#828282] font-[16px] focus:bg-white rounded-[10px] border-[1px] w-full h-12 xl:h-16 bg-gray-100 p-4"
      />
      <input
        placeholder="Phone Number*"
        className="placeholder-[#828282] font-[16px] focus:bg-white rounded-[10px] w-full h-12 xl:h-16 bg-gray-100 p-4"
      />
      <input
        placeholder="Address*"
        className="placeholder-[#828282] font-[16px] focus:bg-white rounded-[10px] w-full h-12 xl:h-16 bg-gray-100 p-4"
      />
      <input
        placeholder="Country*"
        className="placeholder-[#828282] font-[16px] focus:bg-white rounded-[10px] w-full h-12 xl:h-16 bg-gray-100 p-4"
      />
      <input
        placeholder="Your Message..."
        className="placeholder-[#828282] font-[16px] focus:bg-white rounded-[10px] w-full h-40 bg-gray-100 p-4 pb-28"
      />
      <button className="w-[200px] h-[50px] bg-black text-white mt-4 mb-8 xl:mb-0">
        Send Message
      </button>
      <button className="bg-greencall absolute bottom-[-45px] right-[-18px] xl:bottom-[-65px] xl:right-[-27px] w-16 h-16 xl:w-24 xl:h-24 rounded-xl bg-cover bg-no-repeat bg-center"></button>
    </div>
  );
};

export default Form;
