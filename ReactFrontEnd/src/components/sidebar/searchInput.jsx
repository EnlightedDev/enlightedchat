import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import {useConversationsContext} from "../../context/conversationsContext"
import useGetConversations from "../../hooks/useGetConversations"
import { toast } from "react-hot-toast";


const SearchInput = () => {

  const [search, setSearch] = useState("");
  const {setSelectedConversation} = useConversationsContext()
  const {conversations} = useGetConversations()

  const handleSearch = (e) => {

    e.preventDefault()

    if (!search) return;

    if(search.length<3) {
      return toast.error("Search length should be minimum 3 characters")
    }

    const convo = conversations.find((c) => c.phoneNumber.includes(search))

    if(convo) {
      setSelectedConversation(convo)
      setSearch("")
    }
    else {
      toast.error("User not found")
    }

  }

  return (
    <div>
      <form className="flex items-center mt-4 gap-2" onSubmit={handleSearch}>
      <input type="text" placeholder="Type here" className="input input-bordered input-md w-full max-w-xs rounded-full" 
      value={search}
      onChange={(e) => setSearch(e.target.value)}/>
        <button type="submit" className = "btn btn-circle text-white bg-sky-500">
            <IoSearchSharp className="w-6 h-6 outline-none"/>
        </button>
        
      </form>
    </div>
  )
}

export default SearchInput
