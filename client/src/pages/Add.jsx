import { useContext, useState } from "react"
import {Link, Navigate} from "react-router-dom"
import axios from 'axios'
import ImageUpload from "./uploadImg"

export default function AddPage( props ) {

    const [caption, setcaption] = useState('')
    const likes = 0
    const [comments, setcomments] = useState('')
    // const [username, setusername] = useState('')
    const [time, settime] = useState('')
    const [imageURL, setimageURL] = useState('')
    const [redirect, setRedirect] = useState(false)
    const [addedPhotos, setAddedPhotos] = useState('')


    async function handleLoginSubmit(ev, myId) {
        ev.preventDefault()
        // const response = await axios.post('/posts', {username, time, caption, comments, likes, imageURL})
        // setRedirect(true)
        
        const {data:filename} = await axios.post('/posts', { myId, caption, comments, likes, imageURL})
        
        console.log("myId")
        console.log(myId)
        console.log(likes)
        console.log(filename)

        setAddedPhotos(prev => {
            return [...prev, filename]
        })
        setimageURL('')
    }

    if (redirect) {
        return <Navigate to={'/'} />
    }

    return ( props.trigger ) ? (
        <>
        <div className=" z-30 absolute rounded-[10px] bg-neutral-800 h-[70vh] w-[50vw] top-[20vh] left-[35vw] flex items-center justify-center ">
           
            <form className="flex flex-col mt-[30px] text-black">
                <input placeholder={"caption"}
                value={caption} 
                onChange={ev => setcaption(ev.target.value)}/>

                {/* <input placeholder={"likes"}
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
                onChange={ev => setusername(ev.target.value)}/> */}

                <input placeholder={"imageURL"}
                value={imageURL} 
                onChange={ev => setimageURL(ev.target.value)}/>

                <button onClick={(ev) => handleLoginSubmit(ev, props.myId)}>add</button>
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

            <ImageUpload />

        </div>

        <button className="h-[100vh] w-[100vw] bg-neutral-600 absolute top-0 left-0 opacity-30" onClick={() => props.setTrigger(false)}>

        </button>

        </>
    ) : ""
}