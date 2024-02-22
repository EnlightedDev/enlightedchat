import { useState } from "react"
import {Link} from "react-router-dom"
// import register from "../../hooks/useRegister"
import useRegister from "../../hooks/useRegister"

const Register = () => {

  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    displayName: "",
    password: "",
    confirmPassword: "",
    phoneNumber: ""
  })

  const { loading, register} = useRegister()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(inputs)
  }


  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      
      <div className = "p-6 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 shadow-lg shadow-green-950 w-96 ">

        <h1 className="text-3xl font-semibold text-center text-gray-300">Register
        </h1>

        <form onSubmit={handleSubmit}>
        <div className = "mt-4">
            <input 
            type = "text" 
            placeholder = "First Name" 
            className = "input input-bordered input-primary w-full max-w-xs"
            value = {inputs.firstName}
            onChange = {(e) => setInputs({...inputs, firstName: e.target.value})} 
            
            />
          </div>

          <div className = "mt-4">
            <input 
            type = "text" 
            placeholder = "Last Name" 
            className = "input input-bordered input-primary w-full max-w-xs" 
            value = {inputs.lastName}
            onChange = {(e) => setInputs({...inputs, lastName: e.target.value})}
            
            />
          </div>

          <div className = "mt-4">
            <input 
            type = "text" 
            placeholder = "Display Name" 
            className = "input input-bordered input-primary w-full max-w-xs" 
            value = {inputs.displayName}
            onChange = {(e) => setInputs({...inputs, displayName: e.target.value})}
            
            />
          </div>

          <div className = "mt-4">
            <input type = "text" 
            placeholder = "Phone Number" 
            className = "input input-bordered input-primary w-full max-w-xs" 
            value={inputs.phoneNumber}
            onChange={(e) => setInputs({...inputs, phoneNumber: e.target.value})}
            
            />
          </div>

          <div className = "mt-4">
            <input 
            type = "password" 
            placeholder = "Password" 
            className = "input input-bordered input-primary w-full max-w-xs" 
            value={inputs.password}
            onChange={(e) => setInputs({...inputs, password: e.target.value})}
            
            />
          </div>

          <div className = "mt-4">
            <input 
            type = "password" 
            placeholder = "Confirm Password" 
            className = "input input-bordered input-primary w-full max-w-xs"
            value={inputs.confirmPassword}
            onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
            
            />
          </div>

          <div className = "mt-4">
          <button className="btn btn-success w-full" disabled = {loading}>{loading ? <span className="loading loading-spinner"></span> : "Register" }</button>
          </div>
        </form>

        <Link to={"/login"} className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">I do not have an account yet!</Link>

      </div>

    </div>
  )
}

export default Register
