import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router";
import React from 'react'

const Protected = ({children}) => {
    const { loading,user, loadingText } = useAuth()


    if(loading){
        return (
            <main className='loading-screen'>
                <div className='loading-spinner' />
                <h1>{loadingText}</h1>
            </main>
        )
    }

    if(!user){
        return <Navigate to={'/login'} />
    }
    
    return children
}

export default Protected
