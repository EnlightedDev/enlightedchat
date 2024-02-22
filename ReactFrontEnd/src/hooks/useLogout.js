import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/authContext"

const useLogout = () => {

  const [loading, setLoading] = useState(false)

  const {setCurrentUser} = useAuthContext()
  

  const logout = async() => {

    try {

        
        setLoading(true)

        const result = await fetch("/api/auth/logout", {
            method: "POST",
            headers: {"Content-Type": "application/json"}
        })

        const responseData = result.json()



        if(!responseData) {

            throw new Error(responseData.error)

        }

        localStorage.removeItem("currentUser")

        setCurrentUser(null)

        

    } catch (e) {
        
        toast.error("Could not Log out")

    } finally {
        setLoading(false)
    }

  }

  return {loading, logout}

}

export default useLogout
