import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuthContext = () =>{
    return useContext(AuthContext)
    
};


export const AuthContextProvider = (props)=>{
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null)
    return <AuthContext.Provider value={{authUser, setAuthUser}}>
        {props.children}
    </AuthContext.Provider>

}