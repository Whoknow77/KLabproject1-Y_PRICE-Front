import React, { Component, useEffect, useState } from "react";
import {
  Menu,
  AverageItem,
  Category,
  EmotionBox,
  EmotionGroup,
  Index,
  ResDetailWrapper,
  ResTitle,
  ResTitleContainer,
  TitleBox,
  Titlename,
  Clock,
  Info,
  Location,
  IndexButton,
  PhotoGroup,
} from "./ResDetailStyledComponents";
import Foodmap from "./Foodmap";
import { region } from "../region";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";
import Loading from "./Loading";
import ResMenuGroup from "./ResMenuGroup";
import ResPhotoGroup from "./ResPhotogroup";
import ResInfo from "./ResInfo";
const firebaseConfig = {
  apiKey: "AIzaSyAlaS2RB7V3YmLAzMV5TKVsHJT8eckYNFE",
  authDomain: "yprice-e94af.firebaseapp.com",
  projectId: "yprice-e94af",
  storageBucket: "yprice-e94af.appspot.com",
  messagingSenderId: "196673935529",
  appId: "1:196673935529:web:d99b393272e3e5e65231b8",
  measurementId: "G-QZ2SL0REKC",
};
initializeApp(firebaseConfig);
const index = ["Menu", "Photo", "Info"];

function ResDetail({ ressearch, id }) {
  const [selected, setSelected] = useState(0);
  const { resId } = useParams();
  const [userData, setUserData] = useState([]);
  const [target, setTarget] = useState(null);
  const [searchPlace, setSearchPlace] = useState("");
  const [averageprice, setAverageprice] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  // 지역
  // 경복궁 00 ~ 14
  // 이태원 15 ~ 29
  // 강남 30 ~ 44
  // 부산 45 ~ 59
  // 제주 60 ~ 74
  // 홍대 75 ~ 89
  let regex;
  switch (id) {
    // 경복궁
    case "0":
      regex = /0[0-9]|1[0-4]/;
      break;
    // 이태원
    case "1":
      regex = /1[5-9]|2[0-9]/;
      break;
    // 강남
    case "2":
      regex = /3[0-9]|4[0-4]/;
      break;
    // 해운대
    case "3":
      regex = /4[5-9]|5[0-9]/;
      break;
    // 제주
    case "4":
      regex = /6[0-9]|7[0-4]/;
      break;
    // 홍대
    case "5":
      regex = /7[5-9]|8[0-9]/;
      break;
    default:
      regex = 0;
  }

  // 라우터 foodid에 따른 음식
  let foodtarget;
  let foodtarget2; // 음식점 내에서 평균가격 이동
  if (resId.includes("떡볶이")) {
    foodtarget = "떡볶이";
    foodtarget2 = 0;
  }
  if (resId.includes("삼겹살")) {
    foodtarget = "삼겹살";
    foodtarget2 = 2;
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getDatabase();
        const snapshot = await get(ref(db, "/restaurants"));

        if (snapshot.exists()) {
          const data = snapshot.val(); // realtime 데이터베이스에서 데이터 받아오기
          setUserData(data);
          updateTarget(data); // 음식점 target 찾기
          updateAvergaePrice(data); // 카테고리 음식 평균값 계산
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error(error);
      }
    };
    const updateTarget = (data) => {
      const target = Object.entries(data).filter(([resKey, res], index) => {
        return resId === resKey.slice(-5, resKey.length);
      });
      setTarget(target);
      setSearchPlace(region[0].search);
    };

    const updateAvergaePrice = (data) => {
      let totalprice = 0;
      let count = 0;
      Object.entries(data).forEach(([resKey, res], index) => {
        // 지역과 음식 채택
        const foodFlag = resKey.match(regex);
        const flag =
          res.info.category === foodtarget && res.menu && res.menu.menu1;
        if (flag && foodFlag) {
          const price = parseInt(
            res.menu.menu1.price.split(": ")[1].replace(/,/g, "")
          ); // 문자열에서 콤마 제거하고 숫자로 변환
          totalprice += price;
          count++;
        }
      });
      setAverageprice(parseInt(totalprice / count));
    };

    fetchData();
  }, [location.pathname]);

  // 음식점(target)을 찾기 전까지 로딩창 표시
  if (!target || target.length === 0) {
    return <Loading />;
  }
  let ComponentToRender;
  switch (selected) {
    case 0:
      ComponentToRender = (
        <ResMenuGroup
          selected={selected}
          target={target}
          id={id}
          foodtarget2={foodtarget2}
          averageprice={averageprice}
        />
      );
      break;
    case 1:
      ComponentToRender = (
        <ResPhotoGroup selected={selected} target={target}></ResPhotoGroup>
      );
      break;
    case 2:
      ComponentToRender = (
        <ResInfo
          selected={selected}
          target={target}
          searchPlace={searchPlace}
        />
      );
      break;
    default:
  }

  return (
    <ResDetailWrapper ressearch={ressearch}>
      <ResTitleContainer>
        {target[0][1].info.main_img && (
          <img
            src={target[0][1].info.main_img}
            className="Restitleimg pixelated"
            alt="음식점 대표 이미지"
            loading="lazy"
          />
        )}
        <ResTitle>
          <TitleBox>
            <Titlename>{target[0][1].info.name}</Titlename>
            <Category>{target[0][1].info.rating}</Category>
          </TitleBox>
          <EmotionGroup>
            {target[0][1].review !== undefined &&
              Object.entries(target[0][1].review).map((reivewKey, review) => {
                return (
                  <EmotionBox>
                    <img src="/img/thumbs-up.png" alt="thumbs-up" />
                    <span style={{ color: "#fff" }}>{reivewKey[1].name}</span>
                    <span style={{ color: "#fff" }}>{reivewKey[1].count}</span>
                  </EmotionBox>
                );
              })}
          </EmotionGroup>
        </ResTitle>
      </ResTitleContainer>
      <Index>
        {index.map((item, idx) => {
          return (
            <IndexButton
              key={item}
              active={idx === selected}
              onClick={() => setSelected(idx)}
            >
              {item}
            </IndexButton>
          );
        })}
      </Index>
      <> {ComponentToRender}</>
    </ResDetailWrapper>
  );
}

export default ResDetail;
