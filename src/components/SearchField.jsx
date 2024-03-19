import { useContext, useState } from "react"
import { ImageContext } from "../App";

const SearchField = () => {
  const [searchValue, setSearchValue] = useState("");
  const { fetchData, setSearchImage } = useContext(ImageContext);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  }
  const handleButtonSearch = () => {
    fetchData(`search/photos?page=1&query=${searchValue}&client_id=${process.env.ACCESS_KEY}`)
    setSearchValue("");
    setSearchImage(searchValue);
  }
  const handleEnterSearch = e => {
    if (e.key === 'Enter') {
      fetchData(`search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`)
      setSearchValue("");
      setSearchImage(searchValue);
    }
  }

  return (
    <div className="flex mx-2">
      <input
        className="bg-gray-50 border border-[#083344] text-sm w-full indent-2 p-2.5 outline-none focus:border-[#083344] focus:ring-2 rounded-tl rounded-bl"
        type="search"
        placeholder="Search ..."
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleEnterSearch}
      />
      <button
        onClick={handleButtonSearch}
        disabled={!searchValue}
        className="bg-[#083344] px-4 py-2 text-white border border-gray-400  rounded-tr rounded-br focus:ring-2 focus:ring-blue-300 disabled:bg-gray-400"
      >Search</button>
    </div>
  )
}

export default SearchField