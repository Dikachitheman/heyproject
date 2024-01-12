import { useContext } from "react"
import { UserContext } from "../UserContext"

export default function IndexPage() {
    const {user} = useContext(UserContext)
    return (
        <div className="bg-red-500">testnkjlnkln

            {
                !!user && (
                    <div>
                        {user.name}
                    </div>
                )
            }
        </div>
    )
}