import React, { useState } from "react";
import { Wrapper, MapContainer } from "../components/MapStyledComponents";
import { useParams } from "react-router-dom";

import DefaultMap from "../components/DefaultMap";
import Header from "../components/Header";
import Category from "../components/Category";
import FoodDetail from "../components/FoodDetail";
import ResDetail from "../components/ResDetail";
import { food, Res } from "../region";

function Map() {
  let { id } = useParams();
  let [search, setSearch] = useState(""); // 헤더 검색
  let [input, setInput] = useState(""); // 헤더 선택
  let flag = food.find((item) => {
    return item.name === search;
  });

  let target = Res.find((item) => {
    return item.name === search;
  });

  const [expand, setExpand] = useState(0);

  return (
    <Wrapper>
      <MapContainer>
        {/* 검색 바 */}
        <Header
          input={input}
          setInput={setInput}
          setSearch={setSearch}
          id={id}
        />

        {/* map 기본 페이지(지도 + 음식점 추천) */}
        <DefaultMap
          input={input}
          flag={flag}
          expand={expand}
          setExpand={setExpand}
          id={id}
        />

        {/* 카테고리 추천 */}
        <Category input={input} flag={flag} target={target} />

        {/* 음식정보 */}
        <FoodDetail flag={flag} />

        {/* 음식점 정보 */}
        <ResDetail target={target} />
      </MapContainer>
    </Wrapper>
  );
}

export default Map;
