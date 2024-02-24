import {useState, useEffect } from "react"
import toast from "react-hot-toast"

import { useConversationsContext } from "../context/conversationsContext"


const useGetMessages = () => {

    const [loading, setLoading] = useState(false)

    const {selectedConversation, messages, setMessages} = useConversationsContext()

  useEffect(() => {

    const getMessages = async () => {

      setLoading(true)

      try {

          const result = await fetch(`/api/messages/${selectedConversation._id}`)

          const responseData = await result.json()

          if(responseData.error) {
            throw new Error(responseData.error)
          }

          setMessages(responseData)

      }
      catch(error) {
        toast.error(error.message)
      }
      finally {
        setLoading(false)
      }

    }



    if(selectedConversation?._id) getMessages()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedConversation?._id, setMessages])

  return {messages, loading}

}

export default useGetMessages
