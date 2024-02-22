import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {

    return useContext(AuthContext)

}



// eslint-disable-next-line react/prop-types
export const AuthContextProvider = ({children}) => {

    const storedUser = localStorage.getItem("currentUser");
    const initialUser = storedUser ? JSON.parse(storedUser) : null;

    const [currentUser, setCurrentUser] = useState(initialUser)

    return <AuthContext.Provider value = {{currentUser, setCurrentUser}}>
        {children}
    </AuthContext.Provider>


}