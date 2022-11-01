import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Home/Home";
import Destination from "./Destination/Destination";
import Crew from "./Crew/Crew";
import Technology from "./Technology/Technology";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence onExitComplete>
        <Routes>
          <Route path="/home" element= {<Home />} />
          <Route path="/destination" element= {<Destination />} />
          <Route path="/crew" element= {<Crew />} />
          <Route path="/technology" element= {<Technology />} />
          <Route path="/*" element= {<Navigate replace to="/home" />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>

  );
}

export default App;
