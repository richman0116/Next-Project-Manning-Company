import BookCard from "../BookCard"
import { BOOK_CARDS } from "@/lib/constants"

const BookCardContainer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-[100px]">
      <div className="pt-[100px] grid grid-cols-1 grid-rows-12 md:grid-cols-2 md:grid-rows-6 lg:grid-cols-3 lg:grid-rows-4 xl:grid-cols-4 xl:grid-rows-3 gap-[50px] md:gap-x-[40px] md:gap-y-[50px] lg:gap-x-[50px] lg:gap-y-[60px] px-[30px]">
        {
          BOOK_CARDS.map((bookCard, index) => (
            // eslint-disable-next-line react/jsx-key
            <BookCard date={bookCard.date} location={bookCard.location} appointmentLocation={bookCard.appointmentLocation} address={bookCard.address} key={index}/>
          ))
        }
      </div>
    </div>
  )
}

export default BookCardContainer