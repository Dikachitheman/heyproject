import { useContext, useState } from "react"
import {Link, Navigate} from "react-router-dom"
import axios from 'axios'

export default function LoginPage() {

    const [caption, setcaption] = useState('')
    const [likes, setlikes] = useState('')
    const [comments, setcomments] = useState('')
    const [username, setusername] = useState('')
    const [time, settime] = useState('')
    const [redirect, setRedirect] = useState(false)


    async function handleLoginSubmit(ev) {
        ev.preventDefault()
        const response = await axios.post('/posts', {username, time, caption, comments, likes})
        setRedirect(true)
    }

    if (redirect) {
        return <Navigate to={'/'} />
    }

    return (
        <div className="mt-4">
            <form onSubmit={handleLoginSubmit}>
                <input placeholder={"caption"}
                value={caption} 
                onChange={ev => setcaption(ev.target.value)}/>

                <input placeholder={"likes"}
                value={likes} 
                onChange={ev => setlikes(ev.target.value)}/>

                <input placeholder={"comments"}
                value={comments} 
                onChange={ev => setcomments(ev.target.value)}/>

                <input placeholder={"time"}
                value={time} 
                onChange={ev => settime(ev.target.value)}/>

                <input placeholder={"username"}
                value={username} 
                onChange={ev => setusername(ev.target.value)}/>

                <button>login</button>

            </form>
        </div>
    )
}