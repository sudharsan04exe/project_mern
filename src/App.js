
import Nav from "./Nav/Nav";
import Home from "./Home/home";
import Login from './login/login';
import  Sign from './Signup/signup';
// import Nav from "./Nav/Nav";

import React from "react";
import { Route,Routes,Link } from "react-router-dom";
import Music from "./musicpage/music";
function App() {
  return (
    <>
    <Nav/>
    <Routes>
        <Route path="/" element={
                              <Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Sign />} />
      </Routes> 
    </>
  );
}

export default App;
