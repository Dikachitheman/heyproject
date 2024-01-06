import {Link} from "react-router-dom"
import { useState } from "react"

export default function RegisterPage() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

    return (
        <div className="mt-4">
            <form>
                <input type="email" placeholder={"email"} 
                value={email} 
                onChange={ev => setEmail(ev.target.value)} />

                <input type="password" placeholder={"password"}
                value={password} 
                onChange={ev => setPassword(ev.target.value)}/>

                <input type="text" placeholder={"usernmae"}
                value={username} 
                onChange={ev => setUsername(ev.target.name)}/>
                
                <input type="text" placeholder={"fullname"}
                value={name} 
                onChange={ev => setName(ev.target.value)}/>

                <button>register</button>

                <div>
                    <Link to={'/login'}>login</Link>
                </div>
            </form>
        </div>
    )
}