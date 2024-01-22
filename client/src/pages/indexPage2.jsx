import { useContext } from "react";
import { UserContext } from "../UserContext";
import { useState } from "react";
import { useEffect } from "react";

import logo from "../assets/logoIG.svg";
import skyJean from "../assets/skyJean.jpeg";
import dp1 from "../assets/OIP.jpeg"
import dp2 from "../assets/qip2.jpeg"
import dp3 from "../assets/qip3.jpeg"

import axios from "axios"

export default function IndexPage() {
    
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchData = async() => {
            const data = await axios.get('/posts')
            console.log("posts..." + data.data)
            setPosts(data.data)
        }

        fetchData()
    }, [])

    return (
        <div className="bg-black w-screen h-screen text-white">
            <div className="flex">

                <div className="w-1/5 h-screen border-solid border-r-[0.4px] border-gray-500">

                    <div className="h-[8rem] grid content-center justify-center">
                        <div className="flex space-x-2 text-3xl">
                            <img className="h-10" src={logo} alt=""></img>
                            <div>
                                Hey
                            </div>
                        </div>
                    </div>

                    <div className="space-y-[2.3rem] pl-6">
                        <div className="flex space-x-2">
                            <span className="material-symbols-rounded ">
                                home
                            </span>
                            <div>
                                Home
                            </div>   
                        </div>

                        <div className="flex space-x-2">
                            <span className="material-symbols-rounded">
                                search
                            </span>
                            <div>
                                Search
                            </div>    
                        </div>

                        <div className="flex space-x-2">
                            <span className="material-symbols-rounded">
                                explore
                            </span>
                            <div>
                                Explore
                            </div>   
                        </div>

                        <div className="flex space-x-2">
                            <span className="material-symbols-rounded">
                                maps_ugc
                            </span>
                            <div>
                                Messages
                            </div>
                        </div>

                        <div className="flex space-x-2">
                            <span className="material-symbols-rounded">
                                favorite
                            </span>
                            <div>
                                Notifications
                            </div>
                        </div>

                        <div className="flex space-x-2">
                            <span className="material-symbols-rounded">
                                add_box
                            </span>
                            <div>
                                Create
                            </div>
                        </div>

                        <div className="flex space-x-2">
                            <img className="w-[2rem] h-[2rem] rounded-full" src={dp2}></img>
                            <div className="pt-[2px]">
                                Profile
                            </div>
                        </div>
                    </div>

                </div>

                <div className="flex w-4/5 ">

                    <div className="w-[70%] h-screen">

                        <div className="postpage grid justify-items-center overflow-x-scroll h-[17%] pt-5">   

                            <div className="flex space-x-8">
                                {/* {posts.data.map((post, index) => (
                                    <Story key={index} user={post.username} likes={post.likes}/>
                                ))} */}
                            </div>  

                        </div>

                        <div className="postpage h-[83%] overflow-y-scroll flex justify-center">
                            <div className="w-[80%]">
                                {posts.map((post, index) => (
                                    <Post key={index} username={post.username} time={post.time} comments={post.comments} likes={post.likes} caption={post.caption} imageURL={post.imageURL}/>
                                ))}
                            </div>
                        </div>

                    </div>

                    <div className="w-[30%] border-solid border-l-[0.4px] border-gray-500">
                        <div className="pl-4 pt-6">
                            <div className="flex space-x-2 h-[6rem]">
                                <img className="w-[3rem] h-[3rem] rounded-full object-cover" src={dp3}></img>
                                <div className="pt-[2px]">
                                    profile name here
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex space-x-2">
                                    <img className="w-[3rem] h-[3rem] rounded-full object-cover" src={dp1}></img>
                                    <div className="pt-[2px]">
                                        profile name here
                                    </div>
                                </div>
                                <div className="flex space-x-2">
                                    <img className="w-[3rem] h-[3rem] rounded-full object-cover" src={dp3}></img>
                                    <div className="pt-[2px]">
                                        profile name here
                                    </div>
                                </div>
                                <div className="flex space-x-2">
                                    <img className="w-[3rem] h-[3rem] rounded-full object-cover" src={dp1}></img>
                                    <div className="pt-[2px]">
                                        profile name here
                                    </div>
                                </div>
                                <div className="flex space-x-2">
                                    <img className="w-[3rem] h-[3rem] rounded-full object-cover" src={dp2}></img>
                                    <div className="pt-[2px]">
                                        profile name here
                                    </div>
                                </div>
                                <div className="flex space-x-2">
                                    <img className="w-[3rem] h-[3rem] rounded-full object-cover" src={dp2}></img>
                                    <div className="pt-[2px]">
                                        profile name here
                                    </div>
                                </div>
                                <div className="flex space-x-2">
                                    <img className="w-[3rem] h-[3rem] rounded-full object-cover" src={dp1}></img>
                                    <div className="pt-[2px]">
                                        profile name here
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}

const Post = ({ username, time, comments, likes, caption, imageURL}) => {

    // let imageURL = "monique.jpg"

    const withPath = imageURL ? `../src/assets/${imageURL}` : skyJean

    // const withPath = require("../assets/skyJean.jpeg")

    return (
        <div className="">
            {username}
            {comments}
            <img  src={withPath} alt="" />
            {likes}
            {time}
            {caption}
        </div>
    );
};

const Story = ({ username, likes}) => {
    return (
        <div className="grid justify-items-center">
            <img className="h-[4rem] max-h-[4rem] w-[4rem] max-w-[4rem] rounded-full object-cover" src={dp1} alt="" />
            {likes}
            {username}
        </div>
    );
};

