import { Routes, Route, Navigate } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home/Home"
import SignUp from "./pages/signup/SignUp"
import Login from "./pages/login/Login"
import { Toaster } from "react-hot-toast"
import { useAuthContext } from "./context/AuthContext"
export default function App() {

  const {authUser} = useAuthContext();
  return (
    <>
        <Toaster/>
      <Routes>
        <Route path="/" element={authUser ? <Home/> : <Navigate to="/login" />}/>
        <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login/>}/>
        <Route path="/signup" element={authUser ? <Navigate to="/" /> : <SignUp/>}/>
      </Routes>
    </>
  )
}
