import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Select from "./pages/Select";
import Map from "./pages/Map";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";
import { Reset } from "styled-reset";

const firebaseConfig = {
  apiKey: "AIzaSyAlaS2RB7V3YmLAzMV5TKVsHJT8eckYNFE",
  authDomain: "yprice-e94af.firebaseapp.com",
  projectId: "yprice-e94af",
  storageBucket: "yprice-e94af.appspot.com",
  messagingSenderId: "196673935529",
  appId: "1:196673935529:web:d99b393272e3e5e65231b8",
  measurementId: "G-QZ2SL0REKC",
};

// Initialize Firebase
initializeApp(firebaseConfig);

function App() {
  // const db = getDatabase();
  // get(ref(db, "/restaurants"))
  //   .then((snapshot) => {
  //     if (snapshot.exists()) {
  //       // console.log(snapshot.val());
  //     } else {
  //       console.log("No data available");
  //     }
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/select/:id" element={<Select />} />
        <Route path="/map/:id" element={<Map />} />
      </Routes>
    </div>
  );
}

export default App;
