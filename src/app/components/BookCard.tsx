import Image from "next/image";

interface IBookCard {
  date: string,
  location: string,
  appointmentLocation: string,
  address: string
}

const BookCard = ({date, location, appointmentLocation, address}: IBookCard) => {
  return (
    <div className="flex flex-col justify-center items-center gap-12 bg-White shadow-md px-7 pt-10 pb-6 max-w-[295px]">
      <div className="flex flex-col gap-5">
        <div className="flex gap-2">
          <div className="flex bg-dateimage bg-cover bg-no-repeat bg-center w-5 h-5"></div>
          <p className="text-[13.5px] font-Akzidenzpc">{date}</p>
        </div>
        <div className="flex gap-2">
          <div className="flex bg-locationimage bg-cover bg-no-repeat bg-center w-5 h-5"></div>
          <p className="text-[16px] font-Akzidenregular font-bold">{location}</p>
        </div>
        <div className="flex gap-2">
          <div className="flex bg-descriptionimage bg-cover bg-no-repeat bg-center w-6 h-5"></div>
          <div className="flex flex-col">
            <p className="text-[13px] font-Akzidenregular">{appointmentLocation}</p>
            <p className="text-[13.5px] font-Akzidenregular">{address}</p>
          </div>
        </div>
      </div>
      <div className="px-7 w-full">
        <button className="w-full h-[40px] bg-black text-white">Book Now</button>
      </div>
    </div>
  )
}

export default BookCard