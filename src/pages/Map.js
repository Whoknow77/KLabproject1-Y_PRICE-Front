import React, { useState } from "react";
import {
  Wrapper,
  MapContainer,
  Food,
  Menu,
  Info,
  Clock,
  Location,
} from "./MapStyledComponents";
import { useParams } from "react-router-dom";

import DefaultMap from "../components/DefaultMap";
import Header from "../components/Header";
import Category from "../components/Category";
import FoodDetail from "../components/FoodDetail";
import { region, food, Res } from "../region";

function Map() {
  let { id } = useParams();
  let [search, setSearch] = useState(""); // 헤더 검색
  const [expand, setExpand] = useState(0);

  let [input, setInput] = useState(""); // 헤더 선택

  let flag = food.find((item) => {
    return item.name === search;
  });

  let target = Res.find((item) => item.name === "Xihongshi");

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
        <Category input={input} flag={flag} />

        {/* 음식정보 */}
        <FoodDetail flag={flag} />

        {/* 음식추천 */}
        <Food>
          <Menu />
          <Info>
            <Location>
              <img src="/img/map_pin.png" alt="map_pin" />
              <span>서울 광진구 능동로 17길 5 1층 (우)05010</span>
            </Location>
            <Clock>
              {target
                ? target.info.map((item, index) => <span>{item}</span>)
                : null}
            </Clock>
          </Info>
        </Food>
      </MapContainer>
    </Wrapper>
  );
}

export default Map;
