import { createContext, useContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const conversationsContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useConversationsContext = () => {

    return useContext(conversationsContext)

}



// eslint-disable-next-line react/prop-types
export const ConversationsContextProvider = ({children}) => {

    const [selectedConversation, setSelectedConversation] = useState(null)
    const [messages, setMessages] = useState([])

    return <conversationsContext.Provider value = {{selectedConversation, setSelectedConversation, messages, setMessages}}>
        {children}
    </conversationsContext.Provider>


}