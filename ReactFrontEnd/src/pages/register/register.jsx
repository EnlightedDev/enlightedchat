
const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      
      <div className = "p-6 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 shadow-lg shadow-green-950 w-96 ">

        <h1 className="text-3xl font-semibold text-center text-gray-300">Register
        </h1>

        <form >
        <div className = "mt-4">
            <input type="text" placeholder="First Name" className="input input-bordered input-primary w-full max-w-xs" />
          </div>

          <div className = "mt-4">
            <input type="text" placeholder="Last Name" className="input input-bordered input-primary w-full max-w-xs" />
          </div>

          <div className = "mt-4">
            <input type="text" placeholder="Display Name" className="input input-bordered input-primary w-full max-w-xs" />
          </div>

          <div className = "mt-4">
            <input type="text" placeholder="Phone Number" className="input input-bordered input-primary w-full max-w-xs" />
          </div>

          <div className = "mt-4">
            <input type="password" placeholder="Password" className="input input-bordered input-primary w-full max-w-xs" />
          </div>

          <div className = "mt-4">
            <input type="password" placeholder="Confirm Password" className="input input-bordered input-primary w-full max-w-xs" />
          </div>

          <div className = "mt-4">
          <button className="btn btn-success w-full">Login</button>
          </div>
        </form>

      </div>

    </div>
  )
}

export default Register
