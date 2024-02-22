// import React from 'react'
import {BsSend} from "react-icons/bs"
import useSendMessage from "../../hooks/useSendMessage"
import { useState } from "react"


const MessageInput = () => {

  const [message, setMessage] = useState("")
  const {loading, sendMessage} = useSendMessage()

  const handleSubmit = async (e) => {

    console.log(message)

    e.preventDefault();
    
    if(!message) return

    await sendMessage(message);
    setMessage("")

  }

  return (
    <div>
      <form className="px-4 my-3" onSubmit={handleSubmit}>
        <div className="w-full relative">
            <input type="text"
            className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
            placeholder="Type youe message..." 
            value = {message}
            onChange={(e) => setMessage(e.target.value)}/>
            <button type = "submit" className = "absolute inset-y-0 end-0 items-center pe-3">
                {!loading && <BsSend></BsSend>}
                {loading && <span className="loading loading-spinner"></span>}
            </button>
        </div>
      </form>
    </div>
  )
}

export default MessageInput
