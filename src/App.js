
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
<<<<<<< HEAD

    <Nav/>
   


=======
    <Nav/>
    <Home/>
{/* <Nav/> 
>>>>>>> bc482fc (updated)
    <Routes>
        <Route path="/" element={
                              <Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Sign />} />
<<<<<<< HEAD
      </Routes> 
=======
       </Routes> */}
>>>>>>> bc482fc (updated)
    </>
  );
}

export default App;
