import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [redirect, setRedirect] = useState(false)
//   const history = useHistory();

  async function registerUser(ev) {
    ev.preventDefault();

    // 1. Data Validation (optional but recommended)
    // Add checks to ensure required fields are filled and data types are correct
    // For example:
    if (!name || !email || !password || !username) {
      alert("Please fill in all required fields.");
      return; // Prevent sending invalid data
    }

    try {
      const response = await axios.post("/register", {
        name,
        email,
        password,
        username,
      });

      console.log("Registration successful:", response);
      // Handle successful registration (e.g., redirect to login page)
        setRedirect(true)
    } catch (error) {
      console.error("Registration error:", error.response); // Log detailed error
      // Handle registration errors (e.g., display error message to user)
      if (error.response && error.response.data) {
        alert(error.response.data.message || "Registration failed."); // User-friendly message
      }
    }
  }

  if (redirect) {
    return <Navigate to={'/login'} />
}

  return (
    <div className="mt-4">
      <form onSubmit={registerUser}>
        <input
          type="email"
          placeholder={"email"}
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          type="password"
          placeholder={"password"}
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <input
          type="text"
          placeholder={"name"}
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        />
        <input
          type="text"
          placeholder={"username"}
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
        />
        <button>Register</button>

        <div>
          <Link to={"/login"}>Login</Link>
        </div>
      </form>
    </div>
  );
}
