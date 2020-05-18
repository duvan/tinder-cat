import React, { createContext, useEffect, useState } from 'react'

const initialState = false

export const ProfileContext = createContext(initialState)


export const ProfileContextStore = ({ children }) => {

    const [ profilePanel, setProfilePanel ] = useState(initialState)
//hook que permite hacer un efecto, resize de la pantalla 
    useEffect ( () => {
     
         const handlerResize = () => {
            const showState = window.innerWidth > 768 //true si se cumple > 768
            setProfilePanel(showState)
        }

        window.addEventListener('resize', handlerResize)
        handlerResize()
        
        return () => window.removeEventListener('resize', handlerResize)

    }, [])


    
    return (
        <ProfileContext.Provider value ={{profilePanel, setProfilePanel}}>
            { children }
        </ProfileContext.Provider>
    )
}