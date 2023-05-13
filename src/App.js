import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Select from "./pages/Select";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="select" element={<Select />} />
      </Routes>
    </div>
  );
}

export default App;
