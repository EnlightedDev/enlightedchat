import Conversations from "./conversations"
import SearchInput from "./searchInput"
import Logout from "./logout"
const SideBar = () => {
    return (
      <div className="border-r border-slate-500 p-4 flex flex-col overflow-auto">
        <SearchInput></SearchInput>
        <div className= "divider px-3"></div>
        <Conversations></Conversations>
        <Logout></Logout>
      </div>
    )
  }
  
  export default SideBar
  