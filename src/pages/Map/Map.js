import React, { useState } from "react";
import { Wrapper } from "./MapStyledComponents";
import { useParams, Routes, Route } from "react-router-dom";
import {
  DefaultMap,
  Header,
  FoodDetail,
  ResDetail,
} from "../../components/index";
import Error from "../Error/Error";

function Map() {
  const { id } = useParams();
  const [search, setSearch] = useState(""); // 엔터 후 검색어
  const [input, setInput] = useState(""); // 검색어

  // ressearch는 saerch가 변할때만 바뀌어야한다.

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
        z<Route path="/food/:foodId/" element={<FoodDetail id={id} />}></Route>
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
