import Image from "next/image";

interface IBookCard {
  date: string,
  location: string,
  description: string
}

const BookCard = ({date, location, description}: IBookCard) => {
  return (
    <div className="flex flex-col justify-center items-center gap-12 bg-White shadow-md px-6 py-8 font-semibold w-[295px]">
      <div className="flex flex-col gap-5">
        <div className="flex gap-2">
          <div className="flex bg-dateimage bg-cover bg-no-repeat bg-center w-5 h-5"></div>
          <p>{date}</p>
        </div>
        <div className="flex gap-2">
          <div className="flex bg-locationimage bg-cover bg-no-repeat bg-center w-5 h-5"></div>
          <p className="">{location}</p>
        </div>
        <div className="flex gap-2">
          <div className="flex bg-descriptionimage bg-cover bg-no-repeat bg-center w-16 h-5"></div>
          <p>{description}</p>
        </div>
      </div>
        <button className="w-[170px] h-[40px] bg-black text-white">Book Now</button>
    </div>
  )
}

export default BookCard