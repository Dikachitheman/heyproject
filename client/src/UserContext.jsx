import { createContext, useEffect, useState } from "react";
import axios from 'axios'

export const UserContext = createContext({})

export function UserContextProvider({children}) {
    const [user, setUser] = useState(null)

    useEffect(() => {
        if (!user) {
            axios.get('/profile').then(({data}) => {
                setUser(data.username)
                console.log(data)
                console.log(data.username)
                // console.log(user)
            })
        }
    }, [user])
    

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}