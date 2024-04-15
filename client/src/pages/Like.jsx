import { useContext, useState } from "react"
import {Link, Navigate} from "react-router-dom"
import axios from 'axios'
import { useEffect } from "react"

export default function LikePage( props ) {

    const [ likes, setLikes ] = useState([])

    useEffect(() => {
        const fetchData = async() => {
            console.log(props.postId)
            console.log("useeffect postid")
            const data = await axios.get(`/likes/${props.postId}`)
            console.log("posts..." + data.data)
            setLikes(data.data)
        }

        fetchData()
    }, [])

    return ( props.trigger ) ? (
        <>
        <div className=" z-30 absolute rounded-[10px] bg-neutral-800 h-[60vh] w-[30vw] top-[20vh] left-[35vw] flex items-center justify-center">
           
            <div className="flex flex-col mt-[30px] text-white">
                <div>like</div>
                <div>like</div>
                <div>like</div>
                <div>like</div>
            </div>

        </div>

        <button className="h-[100vh] w-[100vw] bg-neutral-600 absolute top-0 left-0 opacity-30" onClick={() => props.setTrigger(false)}>

        </button>

        </>
    ) : ""
}