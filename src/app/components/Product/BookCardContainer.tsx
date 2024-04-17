import BookCard from "../BookCard"
import { BOOK_CARDS } from "@/lib/constants"

const BookCardContainer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-[100px]">
      <div className="pt-[100px] grid grid-cols-1 grid-rows-12 md:grid-cols-2 md:grid-rows-6 xl:grid-cols-3 xl:grid-rows-4 2xl:grid-cols-4 2xl:grid-rows-3  gap-[75px] lg:gap-[100px]">
        {
          BOOK_CARDS.map((bookCard, index) => (
            // eslint-disable-next-line react/jsx-key
            <BookCard date={bookCard.date} location={bookCard.location} description={bookCard.description} key={index}/>
          ))
        }
      </div>
    </div>
  )
}

export default BookCardContainer