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

                    <div className="w-[70%] h-screen bg-blue-700">

                        <div className="postpage grid justify-items-center overflow-x-scroll h-[17%] pt-2 pb-2">   

                            <div className="flex space-x-8">
                                {posts.map((post, index) => (
                                    <Story key={index} user={post.user} imageURL={post.imageURL} likes={post.likes} timeStamp={post.timeStamp} />
                                ))}
                            </div>  

                        </div>

                        <div className="postpage h-[83%] overflow-y-scroll flex justify-center bg-red-600">
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
            <img  src={imageURL} alt="" />
            {likes}
            {timeStamp}
        </div>
    );
};

const Story = ({ user, imageURL, likes, timeStamp}) => {
    return (
        <div className="grid justify-items-center">
            <img className="h-[4rem] max-h-[4rem] w-[4rem] max-w-[4rem] rounded-full object-cover" src={dp1} alt="" />
            {likes}
        </div>
    );
};
