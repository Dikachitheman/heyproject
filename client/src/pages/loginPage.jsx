import { useContext, useState } from "react"
import {Link, Navigate} from "react-router-dom"
import axios from 'axios'
import { UserContext } from "../UserContext"

export default function LoginPage() {

    const [emailadr, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)

    const {setUser,setUsid} =  useContext(UserContext)

    async function handleLoginSubmit(ev) {
        ev.preventDefault()
        const response = await axios.post('/login', {emailadr, password})
        console.log(response.data)
        console.log("login")
        const { username, _id, email } = response.data
        console.log(_id)
        console.log("id")
        setUser( username )
        setUsid( _id )
        setRedirect(true)
    }

    

    if (redirect) {
        return <Navigate to={'/'} />
    }

    return (
        <div className="mt-4">
            <form onSubmit={handleLoginSubmit}>
                <input type="email" placeholder={"email"}
                value={emailadr} 
                onChange={ev => setEmail(ev.target.value)}/>

                <input type="password" placeholder={"password"}
                value={password} 
                onChange={ev => setPassword(ev.target.value)}/>

                <button>login</button>

                <div>
                    <Link to={'/register'}>register</Link>
                </div>
            </form>
        </div>
    )
}