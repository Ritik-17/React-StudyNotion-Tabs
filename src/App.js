import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";



function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />

      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/login" element = {<Login setisLoggedIn = {setisLoggedIn} />} />
        <Route path="/signup" element = {<Signup setisLoggedIn = {setisLoggedIn}/>} />
        <Route path="/dashboard" element = {<Dashboard/>} />
      </Routes>
  </div>

  )
  
}

export default App;
