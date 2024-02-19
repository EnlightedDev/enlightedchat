import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <div>
      <form className="flex items-center mt-4 gap-2" >
      <input type="text" placeholder="Type here" className="input input-bordered input-md w-full max-w-xs rounded-full" />
        <button type="submit" className = "btn btn-circle text-white bg-sky-500">
            <IoSearchSharp className="w-6 h-6 outline-none"/>
        </button>
        
      </form>
    </div>
  )
}

export default SearchInput
