import { useContext, useState } from "react"
import {Link, Navigate} from "react-router-dom"
import axios from 'axios'

export default function LoginPage() {

    const [caption, setcaption] = useState('')
    const [likes, setlikes] = useState('')
    const [comments, setcomments] = useState('')
    const [username, setusername] = useState('')
    const [time, settime] = useState('')
    const [imageURL, setimageURL] = useState('')
    const [redirect, setRedirect] = useState(false)
    const [addedPhotos, setAddedPhotos] = useState('')


    async function handleLoginSubmit(ev) {
        ev.preventDefault()
        // const response = await axios.post('/posts', {username, time, caption, comments, likes, imageURL})
        // setRedirect(true)
        
        const {data:filename} = await axios.post('/posts', {username, time, caption, comments, likes, imageURL})
        setAddedPhotos(prev => {
            return [...prev, filename]
        })
        setimageURL('')
    }

    if (redirect) {
        return <Navigate to={'/2'} />
    }

    return (
        <div className="mt-4">
            <form>
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

                <input placeholder={"imageURL"}
                value={imageURL} 
                onChange={ev => setimageURL(ev.target.value)}/>

                <button onClick={handleLoginSubmit}>add</button>

            </form>

            <div>
                {
                    addedPhotos.length > 0 && addedPhotos.map((link, index) => (
                        <div key={index}>
                            <img className=" w-[10rem] h-[10rem] object-cover rounded-2xl" src={'http://localhost:4000' + link} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}