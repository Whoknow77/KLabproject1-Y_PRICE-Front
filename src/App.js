import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Select, Map, Error } from "./pages/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/select" element={<Select />} />
        <Route path="/map/:id/*" element={<Map />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
