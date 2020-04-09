import React from 'react'
import { Routers } from './components/Routers'
import { MsgContext } from './contexts/MsgContext';

export const App = () => (
 
 <MsgContext.Provider value ={ 'hola a todos!!' }>
        <Routers />
    </MsgContext.Provider>
)