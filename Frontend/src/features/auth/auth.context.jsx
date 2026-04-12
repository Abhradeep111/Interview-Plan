import { createContext,useState } from "react";


export const AuthContext = createContext()


export const AuthProvider = ({ children }) => { 

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [loadingText, setLoadingText] = useState("Loading...")

    


    return (
        <AuthContext.Provider value={{user,setUser,loading,setLoading,loadingText,setLoadingText}} >
            {children}
        </AuthContext.Provider>
    )

    
}
