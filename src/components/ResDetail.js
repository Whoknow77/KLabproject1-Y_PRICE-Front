import React, { useEffect, useState } from "react";
import {
  Rating,
  EmotionBox,
  EmotionGroup,
  Index,
  ResDetailWrapper,
  ResTitle,
  ResTitleContainer,
  TitleBox,
  Titlename,
  IndexButton,
} from "../styles/ResDetailStyledComponents";
import { category, region } from "../region";
import { useLocation, useParams } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";

import { Loading, ResMenuGroup, ResPhotoGroup, ResInfo } from "./index";
import { firebaseConfig } from "../apis";

initializeApp(firebaseConfig);
const index = ["Menu", "Photo", "Info"];

function ResDetail({ ressearch, id }) {
  const [selected, setSelected] = useState(0);
  const { resId } = useParams();
  const [userData, setUserData] = useState([]);
  const [target, setTarget] = useState(null); // 식당
  const [averageprice, setAverageprice] = useState(0);
  const location = useLocation();

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

  let foodId;
  category.forEach((item, index) => {
    if (resId.includes(item.korname)) {
      foodId = index;
    }
  });

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
    };

    const updateAvergaePrice = (data) => {
      let totalprice = 0;
      let count = 0;
      Object.entries(data).forEach(([resKey, res], index) => {
        const isregion = resKey.match(regex); // 지역
        const iscategory = category[foodId].category.includes(
          res.info.category
        ); // 카테고리
        const isMenu = res.menu; // 메뉴
        let isPrice = false;
        if (isMenu) {
          isPrice = Object.values(res.menu).find((menu) => {
            return menu.name
              .toLowerCase()
              .includes(category[foodId].encategory.toLowerCase());
          });
        }
        if (isregion && iscategory && isMenu && isPrice) {
          const menuprice = Number(
            Object.values(res.menu)
              .find((menu) => {
                return menu.name
                  .toLowerCase()
                  .includes(category[foodId].encategory.toLowerCase());
              })
              .price.split(": ")[1]
              .replace(/,/g, "")
          ); // 문자열에서 콤마 제거하고 숫자로 변환
          totalprice += menuprice;
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

  // Menu Photo Info
  let ComponentToRender;
  switch (selected) {
    case 0:
      ComponentToRender = (
        <ResMenuGroup
          selected={selected}
          target={target}
          id={id}
          foodtarget2={foodId}
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
      ComponentToRender = <ResInfo selected={selected} target={target} />;
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
            <Rating>
              <img src="/img/star.png" alt="thumbs-up" />
              <span>{target[0][1].info.rating}</span>
            </Rating>
          </TitleBox>
          <EmotionGroup>
            {target[0][1].review !== undefined &&
              Object.entries(target[0][1].review).map((reivewKey, review) => {
                return (
                  <EmotionBox key={review}>
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
      {ComponentToRender}
    </ResDetailWrapper>
  );
}

export default ResDetail;
