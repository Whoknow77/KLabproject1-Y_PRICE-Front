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

const Map = () => {
  const [showModal, setShowmodal] = useState(false);
  const { id } = useParams();
  const [search, setSearch] = useState(""); // 엔터 후 검색어
  const [input, setInput] = useState(""); // 검색어

  return (
    <Wrapper showModal={showModal} className={showModal ? "blur" : ""}>
      {/* 검색 바 */}
      <Header
        input={input}
        setInput={setInput}
        setSearch={setSearch}
        search={search}
        mapid={id}
      />

      <Routes>
        <Route path="/" element={<DefaultMap />} />
        <Route path="/food/:foodId/" element={<FoodDetail id={id} />}></Route>
        <Route
          path="/res/:resId"
          element={
            <ResDetail
              mapid={id}
              showModal={showModal}
              setShowmodal={setShowmodal}
            />
          }
        ></Route>
        <Route path="*" element={<Error id={id} />}></Route>
      </Routes>
    </Wrapper>
  );
};
export default Map;
