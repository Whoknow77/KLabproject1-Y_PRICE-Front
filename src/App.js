import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Select from "./pages/Select";
import Map from "./pages/Map";
import { Reset } from "styled-reset";
import Error from "./components/Error";
import Loading from "./components/Loading";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/select/:id" element={<Select />} />
        <Route path="/map/:id/*" element={<Map />} />
        <Route path="*" element={<Error />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </div>
  );
}

export default App;
