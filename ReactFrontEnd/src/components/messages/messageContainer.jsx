import { useEffect } from "react";
import { useConversationsContext } from "../../context/conversationsContext";
import MessageInput from "./messageInput"
import Messages from "./messages"


const MessageContainer = () => {

  const {selectedConversation, setSelectedConversation} = useConversationsContext()

  useEffect(() => {

    return () => setSelectedConversation(null)

  }, [setSelectedConversation])

  const noChatSelected = !selectedConversation;


  return (
    <div className="w-[70%] md:min-w-[450px] flex flex-col">
      {noChatSelected ? <NoChatSelected></NoChatSelected> : (
      <>
      <div className="bg-slate-500 px-4 py-2 mb-2">
        <span className="label-text">To:</span><span className="text-gray-900 font-bold">{selectedConversation.phoneNumber}</span>
      </div>
      <Messages></Messages>
      <MessageInput></MessageInput>
      </>
      )}
    </div>
  )
}

export default MessageContainer

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Select a chat to start messaging</p>
      </div>
    </div>
  )
}
