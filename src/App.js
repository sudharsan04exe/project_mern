
import Nav from "./Nav/Nav";
import Home from "./Home/home";

import React from "react";
import { Route,Routes,Link } from "react-router-dom";
import Music from "./musicpage/music";
function App() {
  return (
    <>

    <Nav/>
    <Home/>
    {/* <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
    </Routes>
    <Music/>
    <Login/> 
   <Signup/>
    */}
    
   
   
    </>
  );

}

export default App;
