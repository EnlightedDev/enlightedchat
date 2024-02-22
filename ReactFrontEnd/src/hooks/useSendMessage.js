import { useState } from "react"
import toast from "react-hot-toast"
import {useConversationsContext} from "../context/conversationsContext"

const useSendMessage = () => {


    const [loading, setLoading] = useState(false)

    const {selectedConversation, messages, setMessages} = useConversationsContext()

    const sendMessage = async (message) => {

        try {
        setLoading(true)

        const result = await fetch(`/api/messages/send/${selectedConversation._id}`, {
            method : "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({message})
            })

        const responseData = await result.json()

        if(responseData.error) {

            throw new Error(responseData.error)

        }

        setMessages([...messages, responseData])

    }
    catch(error) {
        toast.error(error.message)
    }
    finally {
        setLoading(false)
    }

    }

    return {sendMessage, loading}


}

export default useSendMessage
