// import React from 'react'
// import { useConversationsContext } from "../../context/conversationsContext"
import useGetMessages from "../../hooks/useGetMessages"
import Message from "../../components/messages/message"


const Messages = () => {

  const {loading, messages} = useGetMessages()


  return (
    <div className="px-4 flex-1 overflow-auto">
      {
         messages.length === 0 && (<p className = "text-center mt-auto"> Send a Message to start a Conversation</p>)
      }
      {
        loading && <span className="loading loading-spinner"></span>
      }
    </div>
  )
}

export default Messages
