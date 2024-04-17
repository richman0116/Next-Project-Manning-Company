
interface ISelectCountry {
  name: string
}
const SelectCountry = ({name}:ISelectCountry) => {
  return (
    <div className="p-[10px] flex w-[150px] h-[50px] justify-center items-center gap-10 bg-[#F5F2ED]">
      <p className="text-Black font-Akzidenz-Grotesk-Pro text-base font-normal leading-6">{name}</p>
    </div>
  )
}

export default SelectCountry