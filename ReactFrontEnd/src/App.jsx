import {Navigate, Route, Routes} from "react-router-dom"
import {Toaster} from "react-hot-toast"
import './App.css'
import Login from './pages/login/login'
import Register from "./pages/register/register"
import Home from './pages/home/home'
import { useAuthContext } from "./context/authContext"

function App() {
  
  const {currentUser} = useAuthContext()

  return (
    <div className = "p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element = { currentUser ? <Home></Home> : <Navigate to={"/login"}></Navigate>}></Route>
        <Route path="/login" element = { currentUser ? <Navigate to="/"></Navigate> : <Login></Login>}></Route>
        <Route path="/register" element = { currentUser ? <Navigate to="/"></Navigate> : <Register></Register>}></Route>
      </Routes>
      <Toaster></Toaster>
    </div>
  )
}

export default App
