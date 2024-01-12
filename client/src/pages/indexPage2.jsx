import { useContext } from "react";
import { UserContext } from "../UserContext";
import { useState } from "react";

import logo from "../assets/logoIG.svg";
import skyJean from "../assets/skyJean.jpeg";
import dp1 from "../assets/OIP.jpeg"

export default function IndexPage() {
    const { user } = useContext(UserContext);
    const [posts, setPosts] = useState([
        {
            user: "ddd",
            imageURL: skyJean,
            likes: 12,
            timeStamp: "3h"
        },
        {
            user: "ddd",
            imageURL: skyJean,
            likes: 12,
            timeStamp: "3h"
        },
        {
            user: "ddd",
            imageURL: skyJean,
            likes: 12,
            timeStamp: "3h"
        }
    ]);

    return (
        <div className="bg-black w-screen h-screen text-white">
            <div className="flex">
                <div className="w-1/5 h-screen">
                    <div>
                        <img className="h-10" src={logo} alt=""></img>
                    </div>
                </div>
                <div className="flex w-4/5 ">
                    <div className="w-[70%] bg-red-600 h-screen">
                        <div className="postpage flex overflow-x-scroll h-[20%] bg-slate-100">
                            <img src={dp1}></img>
                            <img src={dp1}></img>
                            <img src={dp1}></img>
                            <img src={dp1}></img>
                            <img src={dp1}></img>
                            <img src={dp1}></img>
                        </div>
                        <div className="postpage overflow-y-scroll h-[80%]">
                            <div className="">
                                {posts.map((post, index) => (
                                    <Post key={index} user={post.user} imageURL={post.imageURL} likes={post.likes} timeStamp={post.timeStamp} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-[30%]">
                        right
                    </div>
                </div>
            </div>
        </div>
    );
}

const Post = ({ user, imageURL, likes, timeStamp}) => {
    return (
        <div className="">
            this is a post
            {user}
            <img src={imageURL} alt="" />
            {likes}
            {timeStamp}
        </div>
    );
};

const Story = ({ user, imageURL, likes, timeStamp}) => {
    return (
        <div className="">
            this is a post
            {user}
            <img src={dp1} alt="" />
            {likes}
            {timeStamp}
        </div>
    );
};
