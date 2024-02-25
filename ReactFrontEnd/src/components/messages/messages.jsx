// import React from 'react'
// import { useConversationsContext } from "../../context/conversationsContext"
import useGetMessages from "../../hooks/useGetMessages"
import Message from "../../components/messages/message"
import { useEffect, useRef } from "react"
import useListenMessages from "../../hooks/useListenMessages"


const Messages = () => {

  const {loading, messages} = useGetMessages()
  useListenMessages();
  const lastMessageRef = useRef()

  useEffect(() => {

    setTimeout(() => {
      lastMessageRef?.current.scrollIntoView({behavior: "smooth"});
    }, 0);

  }, [messages])

  return (
    <div className="px-4 flex-1 overflow-auto">

      {messages.map((message, index) => (
        <div key={index} ref={lastMessageRef}>
            <Message  message={message} />
        </div>
          ))}

      {!loading && messages.length === 0 && <p className="text-center">Send a message to start conversation</p>}

      {loading && <span className="loading loading-spinner"></span>}

      
      
    </div>
  )
}

export default Messages


//
