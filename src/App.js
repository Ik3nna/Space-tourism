import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Destination from "./Destination/Destination";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/destination" element= {<Destination />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
