import {Link} from "react-router-dom"
import { useState } from "react";
import useLogin from "../../hooks/useLogin";


const Login = () => {

  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const {loading, login} = useLogin()

  const handleLogin = async(e) => {

    e.preventDefault()
    login(phoneNumber, password)

  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      
      <div className = "w-100 p-6 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 shadow-lg shadow-green-950">

        <h1 className="text-3xl font-semibold text-center text-gray-300">Login
        </h1>

        <form onSubmit={handleLogin}>
          <div className = "mt-4">
            <input 
            type="text" 
            placeholder="Phone Number" 
            className="input input-bordered input-primary w-full max-w-xs" 
            value = {phoneNumber}
            onChange= {(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          <div className = "mt-4">
            <input 
            type="password" 
            placeholder="Password" 
            className="input input-bordered input-primary w-full max-w-xs" 
            value = {password}
            onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className = "mt-4">
          <button className="btn btn-success w-full" disabled = {loading}>{loading ? <span className="loading loading-spinner"></span> : "Login"}</button>
          </div>
        </form>

        <Link to={"/register"} className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">I do not have an account yet!</Link>
      </div>

    </div>
  )
}

export default Login
