// import React from 'react'

import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/authContext"

const useLogin = () => {
    const [loading, setLoading] = useState(false)
    const {setCurrentUser} = useAuthContext()
    
    const login = async (phoneNumber, password) => {


        setLoading(true)

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({phoneNumber, password})
            })

            const responseData = await res.json()
            console.log(responseData)
            if(responseData.error) {
                throw new Error(responseData.error)
            }

            localStorage.setItem("currentUser", JSON.stringify(responseData))
            setCurrentUser(responseData)

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        } finally {
            setLoading(false);
        }

    }

    return {loading, login}

}

export default useLogin