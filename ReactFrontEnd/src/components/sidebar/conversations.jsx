// import { ConversationsContextProvider } from "../../context/conversationsContext"
import useGetConversations from "../../hooks/useGetConversations"
import Conversation from "./conversation"


const Conversations = () => {

  const {loading, conversations} = useGetConversations()
  
    

  return (
    
      <div className="py-2 flex-col overflow-auto"> 

      {
        conversations.map((comp) => (         
          <Conversation 
          key = {comp._id}
          conversation = {comp}
          />
        ))
      }
 
      {loading ? <span className="loading loading-spinner"></span> : null}



      </div>

  )
}

export default Conversations
