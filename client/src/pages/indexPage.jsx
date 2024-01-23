import { useContext } from "react";
import { UserContext } from "../UserContext";
import { useState } from "react";

import logo from "../assets/logoIG.svg";
import skyJean from "../assets/skyJean.jpeg";
import dp1 from "../assets/OIP.jpeg"
import dp2 from "../assets/qip2.jpeg"
import dp3 from "../assets/qip3.jpeg"

export default function IndexPage() {
    const { user } = useContext(UserContext);
    const [posts, setPosts] = useState([
        {
            user: "dikachi the man",
            imageURL: skyJean,
            likes: 12,
            timeStamp: "3h"
        },
        {
            user: "dikachi the man",
            imageURL: skyJean,
            likes: 12,
            timeStamp: "3h"
        },
        {
            user: "dikachi the man",
            imageURL: skyJean,
            likes: 12,
            timeStamp: "3h"
        },
        {
            user: "dikachi the man",
            imageURL: skyJean,
            likes: 12,
            timeStamp: "3h"
        },
        {
            user: "dikachi the man",
            imageURL: skyJean,
            likes: 12,
            timeStamp: "3h"
        },
        {
            user: "dikachi the man",
            imageURL: skyJean,
            likes: 12,
            timeStamp: "3h"
        },
        {
            user: "dikachi the man",
            imageURL: skyJean,
            likes: 12,
            timeStamp: "3h"
        },
        {
            user: "dikachi the man",
            imageURL: skyJean,
            likes: 12,
            timeStamp: "3h"
        },
        {
            user: "dikachi the man",
            imageURL: skyJean,
            likes: 12,
            timeStamp: "3h"
        },
        {
            user: "dikachi the man",
            imageURL: skyJean,
            likes: 12,
            timeStamp: "3h"
        },
        {
            user: "dikachi the man",
            imageURL: skyJean,
            likes: 12,
            timeStamp: "3h"
        },
        {
            user: "dikachi the man",
            imageURL: skyJean,
            likes: 12,
            timeStamp: "3h"
        }
    ]);

    return (
        <div className="bg-black w-screen h-screen text-white font-[300] text-[14px]">
            <div className="flex">

                <div className="w-1/5 h-screen border-solid border-r-[0.4px] border-gray-500">

                    <div className="h-[8rem] grid content-center justify-center">
                        <div className="flex space-x-2 text-3xl">
                            <img className="h-10" src={logo} alt=""></img>
                            <div>
                                {!!user && (
                                    <div>{user.name}</div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-[2.3rem] pl-6">
                        <div className="flex space-x-2">
                            <span className="material-symbols-rounded ">
                                home
                            </span>
                            <div className="mt-[4px]">
                                Home
                            </div>   
                        </div>

                        <div className="flex space-x-2">
                            <span className="material-symbols-rounded">
                                search
                            </span>
                            <div className="mt-[4px]">
                                Search
                            </div>    
                        </div>

                        <div className="flex space-x-2">
                            <span className="material-symbols-rounded">
                                explore
                            </span>
                            <div className="mt-[4px]">
                                Explore
                            </div>   
                        </div>

                        <div className="flex space-x-2">
                            <span className="material-symbols-rounded">
                                maps_ugc
                            </span>
                            <div className="mt-[4px]">
                                Messages
                            </div>
                        </div>

                        <div className="flex space-x-2">
                            <span className="material-symbols-rounded">
                                favorite
                            </span>
                            <div className="mt-[4px]">
                                Notifications
                            </div>
                        </div>

                        <div className="flex space-x-2">
                            <span className="material-symbols-rounded">
                                add_box
                            </span>
                            <div className="mt-[4px]">
                                Create
                            </div>
                        </div>

                        <div className="flex space-x-2">
                            <img className="w-[2rem] h-[2rem] rounded-full object-cover" src={dp2}></img>
                            <div className="pt-[2px]">
                                Profile
                            </div>
                        </div>
                    </div>

                </div>

                <div className="flex w-4/5 ">

                    <div className="w-[70%] h-screen grid justify-items-center">

                        <div className="postpage grid justify-items-center overflow-x-scroll h-[8rem] w-[80%] pt-5">   

                            <div className="flex space-x-8">
                                {posts.map((post, index) => (
                                    <Story key={index} user={post.user} imageURL={post.imageURL} likes={post.likes} timeStamp={post.timeStamp} />
                                ))}
                            </div>  

                        </div>

                        <div className="postpage h-[38rem] overflow-y-scroll flex justify-center">

                            <div className="w-[80%] space-y-6">
                                {posts.map((post, index) => (
                                    <Post key={index} user={post.user} imageURL={post.imageURL} likes={post.likes} timeStamp={post.timeStamp} />
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

const Post = ({ user, imageURL, likes, timeStamp}) => {
    return (
        <div className="space-y-[0.4rem] font-[300]">
            <div className="flex text-[14px] text-stone-200 space-y-[2px] space-x-[10px]">
                <div className=" h-fit">
                    <img className="h-[3rem] max-h-[3rem] w-[3rem] max-w-[3rem] rounded-full object-cover" src={dp1} alt="" />
                </div>
                <div className="h-fit flex space-x-3">
                    <div className="font-[500]">
                        {user}
                    </div>
                    <div className="text-slate-400">
                        {timeStamp}
                    </div>
                </div>
            </div>
            <div>
                <img className="rounded-[0.8rem]" src={imageURL} alt="" />   
            </div>
            <div className="text-[14px]">
                Liked by bigBooty and {likes} others
            </div>
            <div className="text-[14px]">
                Into the dystopian city
            </div>
        </div>
    );
};

const Story = ({ user, imageURL, likes, timeStamp}) => {
    return (
        <div className="grid justify-items-center text-[14px] text-stone-200 space-y-[-20px] font-[300] ">
            <div className=" h-fit ">
                <img className=" story h-[4rem] max-h-[4rem] w-[4rem] max-w-[4rem] rounded-full object-cover border-solid border-[4px] " src={dp1} alt="" />
            </div>
            <div className=" h-fit truncate w-[70px]">
                {user}
            </div>
        </div>
    );
};

