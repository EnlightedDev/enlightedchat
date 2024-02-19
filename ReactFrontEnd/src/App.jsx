import {Route, Routes} from "react-router-dom"
import {Toaster} from "react-hot-toast"
import './App.css'
import Login from './pages/login/login'
import Register from "./pages/register/register"
import Home from './pages/home/home'

function App() {
  

  return (
    <div className = "p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element = {<Home></Home>}></Route>
        <Route path="/login" element = {<Login></Login>}></Route>
        <Route path="/register" element = {<Register></Register>}></Route>
      </Routes>
      <Toaster></Toaster>
    </div>
  )
}

export default App
