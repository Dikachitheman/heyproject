import { useContext } from "react"
import { UserContext } from "../UserContext"

import logo from "../assets/logoIG.svg"
import skyJean from "../assets/skyJean.jpeg"
import dp1 from "../assets/OIP.jpeg"

export default function IndexPage() {
    const {user} = useContext(UserContext)
    return (
        <div className="bg-red-500 w-screen h-screen">
            <div className="grid grid-cols-[auto_minmax(auto,_1fr)_600px]">
                <aside className="bg-green-500 h-screen w-96">
                    <div>
                        <img className="h-10" src={logo} alt=""></img>
                    </div>
                    aside
                </aside>
                <div className="bg-blue-900 flex justify-center">
                    <div className="bg-gray-300 h-fit flex space-x-5 mt-8 overflow-x-scroll">
                        {data.map(item => (
                            <StoryComponent key={item.id} imageURL={item.imageURL} text={item.id} />
                        ))}
                        <div>
                            {data.map(item => (
                                <StoryComponent key={item.id} imageURL={item.imageURL} text={item.id} />
                            ))}
                        </div>
                    </div>
                    {
                        !!user && (
                            <div>
                                {user.name}
                            </div>
                        )
                    }
                </div>
                <div className="bg-yellow-400">
                    right side
                </div>
            </div>
        </div>
    )
}

const StoryComponent = ({ imageURL, userFname }) => (
    <div className="text-[1rem] grid justify-items-center">
        <div>
            <img className="h-[6rem] w-[4rem] rounded-full object-cover" src={imageURL}></img>
        </div>
        <div>
            <p>{userFname}</p>
            <p className="bg-yellow-400 w-fit">test</p>
        </div>
    </div>
)

const data = [
    { id: 1, imageURL: dp1, fname: 'vibes-driven'},
    { id: 2, imageURL: dp1, fname: 'vibes-driven'},
    { id: 3, imageURL: dp1, fname: 'vibes-driven'},
    { id: 4, imageURL: dp1, fname: 'vibes-driven'},
    { id: 5, imageURL: dp1, fname: 'vibes-driven'},
    { id: 6, imageURL: dp1, fname: 'vibes-driven'},
    { id: 7, imageURL: dp1, fname: 'vibes-driven'},
    { id: 8, imageURL: dp1, fname: 'vibes-driven'},
    { id: 9, imageURL: dp1, fname: 'vibes-driven'},
    { id: 10, imageURL: dp1, fname: 'vibes-driven'},
    { id: 11, imageURL: dp1, fname: 'vibes-driven'},
    { id: 12, imageURL: dp1, fname: 'vibes-driven'},
    { id: 13, imageURL: dp1, fname: 'vibes-driven'},
    { id: 14, imageURL: dp1, fname: 'vibes-driven'},
    { id: 15, imageURL: dp1, fname: 'vibes-driven'},
    { id: 16, imageURL: dp1, fname: 'vibes-driven'},
    { id: 17, imageURL: dp1, fname: 'vibes-driven'}
]

// const 