import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Wrapper } from "../components/MapStyledComponents";
import DefaultMap from "../components/DefaultMap";
import Header from "../components/Header";
import FoodDetail from "../components/FoodDetail";
import ResDetail from "../components/ResDetail";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

import { food, Res } from "../region";

function Map() {
  const { id } = useParams();
  const [search, setSearch] = useState(""); // 완료된 검색어
  const [input, setInput] = useState(""); // 검색어
  const [foodsearch, setFoodserach] = useState("");
  const [ressearch, setResserach] = useState("");

  // foodsearch와 ressearch는 saerch가 변할때만 바뀌어야한다.
  useEffect(() => {
    // 음식 검색
    setFoodserach(
      food.find((item) => {
        return item.name === search;
      })
    );

    // 음식점 검색
    setResserach(
      Res.find((item) => {
        return item.name === search;
      })
    );
  }, [search]);

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
        <Route
          path="/food/:foodId/"
          element={
            <FoodDetail foodsearch={foodsearch} ressearch={ressearch} id={id} />
          }
        ></Route>
        <Route
          path="/res/:resId"
          element={
            <ResDetail
              id={id}
              ressearch={ressearch}
              foodsearch={foodsearch}
              search={search}
            />
          }
        ></Route>
        <Route path="*" element={<div>없는페이지에요</div>}></Route>
      </Routes>
    </Wrapper>
  );
}

export default Map;
