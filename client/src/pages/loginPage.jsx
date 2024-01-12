import { useContext, useState } from "react"
import {Link, Navigate} from "react-router-dom"
import axios from 'axios'
import { UserContext } from "../UserContext"

export default function LoginPage() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)

    const {setUser} =  useContext(UserContext)

    async function handleLoginSubmit(ev) {
        ev.preventDefault()
        const response = await axios.post('/login', {email, password})
        setUser(response.data)
        setRedirect(true)
    }

    if (redirect) {
        return <Navigate to={'/'} />
    }

    return (
        <div className="mt-4">
            <form onSubmit={handleLoginSubmit}>
                <input type="email" placeholder={"email"}
                value={email} 
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