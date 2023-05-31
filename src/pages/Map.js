import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Wrapper } from "../components/MapStyledComponents";

import DefaultMap from "../components/DefaultMap";
import Header from "../components/Header";
import Category from "../components/Category";
import FoodDetail from "../components/FoodDetail";
import ResDetail from "../components/ResDetail";

import { food, Res } from "../region";

function Map() {
  const { id } = useParams();
  const [search, setSearch] = useState(""); // 헤더 검색
  const [input, setInput] = useState(""); // 헤더 선택

  // 하단 토글 flag
  const [expand, setExpand] = useState(0);

  // 음식 검색
  const foodsearch = food.find((item) => {
    return item.name === search;
  });

  // 음식점 검색
  const ressearch = Res.find((item) => {
    return item.name === search;
  });

  return (
    <Wrapper>
      {/* 검색 바 */}
      <Header
        input={input}
        setInput={setInput}
        q
        setSearch={setSearch}
        id={id}
      />

      {/* map 기본 페이지(지도 + 음식점 추천) */}
      <DefaultMap input={input} expand={expand} setExpand={setExpand} id={id} />

      {/* 카테고리 추천 */}
      <Category input={input} foodsearch={foodsearch} ressearch={ressearch} />

      {/* 음식정보 */}
      <FoodDetail foodsearch={foodsearch} />

      {/* 음식점 정보 */}
      <ResDetail ressearch={ressearch} />
    </Wrapper>
  );
}

export default Map;
