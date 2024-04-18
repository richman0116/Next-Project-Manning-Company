const ContactForm = () => {
  return (
    <div className="flex flex-col gap-[56px] items-start px-[30px] sm:px-[30px]">
      <div className="flex flex-col gap-7">
        <p className="text-[30px] xl:text-[36px] before:whitespace-nowrap font-Akzidenregular">Let&apos;s talk with us</p>
        <p className="text-[14px] xl:text-[16px] font-Akzidenregular">
          Opening Hours<br></br>Monday - Saturday: 10:00 am - 08:00 pm<br></br>
          Sunday and Public Holidays:By Appointment
        </p>
      </div>
      <div className="flex flex-col gap-7">
        <div className="flex flex-row gap-2">
          <div className="flex bg-call w-6 h-6 bg-cover bg-no-repeat bg-center min-w-[24px]"></div>
          <div className="flex flex-row gap-1">
            <p className="text-[14px] xl:text-[16px] font-Akzidenregular">+852 2111 1955 / +852 3427 9296 / +852 2375 3897</p>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <div className="flex bg-call_mail w-6 h-6 bg-cover bg-no-repeat bg-center"></div>
          <p className="text-[14px] xl:text-[16px] font-Akzidenregular">+852 5169 7732</p>
        </div>
        <div className="flex flex-row gap-2">
          <div className="flex bg-mail w-6 h-6 bg-cover bg-no-repeat bg-center"></div>
          <p className="text-[14px] xl:text-[16px] font-Akzidenregular">
            info@manningcompany.com
          </p>
        </div>
        <div className="flex flex-row gap-2">
          <div className="flex bg-position w-6 h-6 bg-cover bg-no-repeat bg-center"></div>
          <p className="text-[14px] xl:text-[16px] font-Akzidenregular">
            Shop 22B, G/F, Hankow Centre,<br></br>5-15 Hankow Road Tsim sha
            Tsui,<br></br>Kowloon Hong Kong
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
