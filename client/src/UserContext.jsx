import { createContext, useEffect, useState } from "react";
import axios from 'axios'

export const UserContext = createContext({})

export function UserContextProvider({children}) {
    const [user, setUser] = useState(null)
    const [usid, setUsid] = useState(null)

    useEffect(() => {
        if (!user) {
            axios.get('/profile').then(({data}) => {
                setUser(data.username)
                // setUsid(data.usid)
                console.log(data)
                console.log(data.id)
                console.log("context")
            })
        }
    }, [user])

    useEffect(() => {
        if (!usid) {
            axios.get('/profile').then(({data}) => {
                setUsid(data.id)
                console.log(data)
                console.log(data.id)
                console.log("context")
            })
        }
    }, [usid])
    

    return (
        <UserContext.Provider value={{user, setUser, usid, setUsid}}>
            {children}
        </UserContext.Provider>
    )
}