import {Link} from "react-router-dom"

export default function LoginPage() {
    return (
        <div className="mt-4">
            <form>
                <input type="email" placeholder={"email"}/>
                <input type="password" placeholder={"password"}/>

                <button>login</button>

                <div>
                    <Link to={'/register'}>register</Link>
                </div>
            </form>
        </div>
    )
}