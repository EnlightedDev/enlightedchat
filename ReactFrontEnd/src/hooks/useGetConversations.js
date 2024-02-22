import { useEffect, useState } from "react"
import toast from "react-hot-toast"

const useGetConversations = () => {
 
  const [loading, setLoading] = useState(false)
  const [conversations, setConversations] = useState([])

  useEffect(() => {

    const getConversations = async() => {

      setLoading(true)

      try {
        
        const result = await fetch("/api/users")

        const responseData = await result.json();

        if(!responseData) {
          
          throw new Error(responseData.error)
        }
        
        setConversations(responseData)

      } catch (error) {
        toast.error("Unable to get conversations due to ", error)
        console.log("kjdss", error)
      }
      finally {
        setLoading(false)
      }

    }

    getConversations()

  }, [])

  return {loading, conversations}

}

export default useGetConversations
