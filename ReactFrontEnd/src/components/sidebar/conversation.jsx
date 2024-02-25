import { useConversationsContext } from "../../context/conversationsContext"
import { useSocketContext } from "../../context/socketContext"


const Conversation = ({conversation}) => {

  const {selectedConversation, setSelectedConversation} = useConversationsContext()

  const isSelected = selectedConversation?._id === conversation._id

  const {onlineUsers} = useSocketContext();

  const isOnline = onlineUsers.includes(conversation._id)


  return (
    <div>
      <div 
      className={`flex gap-5 items-center hover:bg-green-900 rounded p-2 py-1 cursor-pointer h-14  ${isSelected && "bg-green-900"} `} 
      onClick={() => setSelectedConversation(conversation)}>
        <div className={`avatar ${isOnline ? "online" : ""}`}>
        <div className="w-9 rounded-full">
            <img src={conversation.displayPic} />
        </div>
        </div>
        <div className="flex flex-col flex-1">
            <div className="flex gap-3 justify-between">
                <p>{conversation.phoneNumber}</p>
            </div>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1"></div>
    </div>
  )
}

export default Conversation
