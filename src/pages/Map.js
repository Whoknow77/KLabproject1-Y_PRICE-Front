import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Wrapper } from "../styles/MapStyledComponents";
import DefaultMap from "../components/DefaultMap";
import Header from "../components/Header";
import FoodDetail from "../components/FoodDetail";
import ResDetail from "../components/ResDetail";
import { Routes, Route } from "react-router-dom";
import Error from "../components/Error";
function Map() {
  const { id } = useParams();
  const [search, setSearch] = useState(""); // 완료된 검색어
  const [input, setInput] = useState(""); // 검색어

  // foodsearch와 ressearch는 saerch가 변할때만 바뀌어야한다.

  return (
    <Wrapper>
      {/* 검색 바 */}
      <Header
        input={input}
        setInput={setInput}
        setSearch={setSearch}
        search={search}
        id={id}
      />

      <Routes>
        <Route
          path="/"
          element={<DefaultMap input={input} id={id} search={search} />}
        />
        <Route path="/food/:foodId/" element={<FoodDetail id={id} />}></Route>
        <Route
          path="/res/:resId"
          element={<ResDetail id={id} search={search} />}
        ></Route>
        <Route path="*" element={<Error id={id} />}></Route>
      </Routes>
    </Wrapper>
  );
}
export default Map;
