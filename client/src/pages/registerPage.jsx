import {Link} from "react-router-dom"
import { useState } from "react"
import axios from 'axios'


export default function RegisterPage() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

    function registerUser(ev) {
        ev.preventDefault()
        axios.post('/register', {
            name,
            email,
            password,
            username
        })
    }

    return (
        <div className="mt-4">
            <form onSubmit={registerUser}>
                <input type="email" placeholder={"email"} 
                value={email} 
                onChange={ev => setEmail(ev.target.value)} />

                <input type="password" placeholder={"password"}
                value={password} 
                onChange={ev => setPassword(ev.target.value)}/>
                
                <input type="text" placeholder={"name"}
                value={name} 
                onChange={ev => setName(ev.target.value)}/>

                <input type="text" placeholder={"username"}
                value={username} 
                onChange={ev => setUsername(ev.target.value)}/>

                <button>register</button>

                <div>
                    <Link to={'/login'}>login</Link>
                </div>
            </form>
        </div>
    )
}