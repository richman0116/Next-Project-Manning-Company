
interface ISelectCountry {
  name: string
}
const SelectCountry = ({name}:ISelectCountry) => {
  return (
    <button className="p-[10px] flex w-[140px] h-[48px] justify-center items-center gap-10 bg-[#F5F2ED]">
      <p className="text-Black font-Akzidenregular text-base font-normal leading-6">{name}</p>
    </button>
  )
}

export default SelectCountry