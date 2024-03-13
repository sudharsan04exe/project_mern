
import Nav from "./Nav/Nav";
import Home from "./Home/home";
import Login from './login/login';
import  Sign from './Signup/signup';

import React from "react";
import { Route,Routes,Link } from "react-router-dom";
function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<><Nav/>
                              <Home /></>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Sign />} />
      </Routes> 
    </>
  );
}

export default App;
