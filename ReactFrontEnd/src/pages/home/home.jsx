import SideBar from "../../components/sidebar/SideBar"
import MessageContainer from "../../components/messages/messageContainer"

const Home = () => {
  return (
   
      
      <div className = "flex sm:h-[450px] md:h-[550px] rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg shadow-lg shadow-green-950 bg-gray-900">
        <SideBar></SideBar>
        <MessageContainer></MessageContainer>
      </div>
    
  )
}

export default Home
