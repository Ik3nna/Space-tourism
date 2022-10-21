import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home/Home";
import Destination from "./Destination/Destination";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/home" element= {<Home />} />
        <Route path="/destination" element= {<Destination />} />
        <Route path="/" element= {<Navigate replace to="/home" />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
