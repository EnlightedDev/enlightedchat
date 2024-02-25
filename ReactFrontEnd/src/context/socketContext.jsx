import { createContext, useState, useEffect, useContext } from "react";
import { useAuthContext } from "./authContext";
import io from "socket.io-client";

export const SocketContext = createContext();


export const useSocketContext = () => {

    return useContext(SocketContext)

}

export const SocketContextProvider = ({ children }) => {
	const [socket, setSocket] = useState(null);
	const [onlineUsers, setOnlineUsers] = useState([]);
	const { currentUser } = useAuthContext();

	useEffect(() => {
		if (currentUser) {
			const socket = io("http://localhost:5000", {
                query: {
                    userId: currentUser._id
                }
            });

			setSocket(socket);

            socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users)
            })

			

			// return () => socket.close();
		} else {
			if (socket) {
				socket.close();
				setSocket(null);
			}
		}
	}, [currentUser]);

	return <SocketContext.Provider value={{ socket, onlineUsers }}>{children}</SocketContext.Provider>;
};