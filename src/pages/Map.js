import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Wrapper } from "../components/MapStyledComponents";
import DefaultMap from "../components/DefaultMap";
import Header from "../components/Header";
import FoodDetail from "../components/FoodDetail";
import ResDetail from "../components/ResDetail";

import { food, Res } from "../region";

function Map() {
  const { id } = useParams();
  const [search, setSearch] = useState(""); // 완료된 검색어
  const [input, setInput] = useState(""); // 검색어
  const [categorynum, setCategorynum] = useState(-1);
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

  function onChangecategorynum(idx) {
    setCategorynum(idx);
  }

  return (
    <Wrapper>
      {/* 검색 바 */}
      <Header
        input={input}
        setInput={setInput}
        setSearch={setSearch}
        search={search}
        id={id}
        categorynum={categorynum}
        onChangecategorynum={onChangecategorynum}
      />

      {/* map 기본 페이지(지도 + 음식점 추천) */}
      <DefaultMap
        input={input}
        id={id}
        categorynum={categorynum}
        onChangecategorynum={onChangecategorynum}
        search={search}
      />

      {/* 음식정보 */}
      <FoodDetail
        foodsearch={foodsearch}
        categorynum={categorynum}
        ressearch={ressearch}
      />

      {/* 음식점 정보 */}
      <ResDetail
        id={id}
        ressearch={ressearch}
        categorynum={categorynum}
        foodsearch={foodsearch}
        search={search}
      />
    </Wrapper>
  );
}

export default Map;
