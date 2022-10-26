import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home/Home";
import Destination from "./Destination/Destination";
import Crew from "./Crew/Crew";
import Technology from "./Technology/Technology";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/home" element= {<Home />} />
        <Route path="/destination" element= {<Destination />} />
        <Route path="/crew" element= {<Crew />} />
        <Route path="/technology" element= {<Technology />} />
        <Route path="/" element= {<Navigate replace to="/home" />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
