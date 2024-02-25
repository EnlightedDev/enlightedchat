import {useSocketContext} from "../context/socketContext"
import { useConversationsContext } from "../context/conversationsContext"
import { useEffect } from "react"

const useListenMessages = () => {
  
    const {socket} = useSocketContext()

    const {messages, setMessages} = useConversationsContext()

    useEffect(() => {

        socket?.on("newMessage", (newMessage) => {

            setMessages([...messages, newMessage])

        })

        return () => socket?.off("newMessage")

    }, [socket, setMessages, messages])

}

export default useListenMessages
