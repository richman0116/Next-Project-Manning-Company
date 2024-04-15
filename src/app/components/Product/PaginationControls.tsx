import Link from "next/link";
import { IoChevronBackSharp, IoChevronForward } from "react-icons/io5";

const PaginationControls = ({ pageNumber, totalPages, nextPage }: any) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center mt-4">
      <div className="flex bg-[#F7F9FF] shadow-xl rounded-full p-[13px] px-[26px] gap-[10px]">
        {pageNumber !== 7 && (
          <Link
            href={`?page=${pageNumber - 1}`}
            className="pt-2.5 px-5 text-[#656565] rounded"
          >
            <IoChevronBackSharp size={20} />
          </Link>
        )}
        {pageNumbers.map((page) => (
          <Link
            key={page}
            href={`?page=${page}`}
            className={`p-2 selectnub px-5 rounded ${
              page === pageNumber ? "bg-black text-white" : "text-gray-500"
            }`}
          >
            {page}
          </Link>
        ))}
        {pageNumber !== totalPages && (
          <Link
            href={`?page=${nextPage}`}
            className="pt-2.5 px-5 text-[#656565] rounded"
          >
            <IoChevronForward size={20} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default PaginationControls;
