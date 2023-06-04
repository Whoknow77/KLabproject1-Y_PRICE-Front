import React, { useEffect, useState } from "react";
import {
  Menu,
  AverageItem,
  Category,
  EmotionBox,
  EmotionGroup,
  ResImage,
  Index,
  MenuAverageContainer,
  MenuAveragePrice,
  MenuInfoContainer,
  MenuPrice,
  MenuTitle,
  MenuTotalContainer,
  ResDetailWrapper,
  ResTitle,
  ResTitleContainer,
  TitleBox,
  Titlename,
  Clock,
  Info,
  Location,
  MenuGroup,
  IndexButton,
  PhotoGroup,
  Photo,
} from "./ResDetailStyledComponents";
import Foodmap from "./Foodmap";
import { region } from "../region";
import { useParams } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";

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

// 음식과 음식점에 대한 번호를 가지고 있어야함
// 음식점은 resId라우터 번호로 가져옴
// 음식은 어디서..?
function ResDetail({ ressearch, id, foodsearch }) {
  const [selected, setSelected] = useState(0);
  const { resId } = useParams();
  const [userData, setUserData] = useState([]);
  const [target, setTarget] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 데이터베이스 가져오기
        const db = getDatabase();
        const snapshot = await get(ref(db, "/restaurants"));

        if (snapshot.exists()) {
          const data = snapshot.val(); // 데이터 가져오기
          setUserData(data);
          updateTarget(data);
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error(error);
      }
    };
    const updateTarget = (data) => {
      const target = Object.entries(data).filter(([resKey, res], index) => {
        // 문자열을 뒤에서 두개 자르기 (역방향은 안되는듯)
        return resId === resKey.slice(-2, resKey.length);
      });
      setTarget(target);
    };

    fetchData();
  }, []);

  if (target === null) {
    return <div>로딩중..</div>;
  }
  return (
    <ResDetailWrapper ressearch={ressearch} foodsearch={foodsearch}>
      <ResTitleContainer>
        <ResImage />
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
              // 클릭 시에만 active
              active={idx === selected}
              onClick={() => setSelected(idx)}
            >
              {item}
            </IndexButton>
          );
        })}
      </Index>
      {/* Menu */}
      <MenuGroup selected={selected}>
        {Object.entries(target[0][1].menu).map(([key, value], index) => {
          return (
            <Menu key={index}>
              <MenuTotalContainer>
                <MenuInfoContainer>
                  <MenuTitle>{value.name}</MenuTitle>
                  <MenuPrice>{value.price}₩</MenuPrice>
                </MenuInfoContainer>
                <MenuAverageContainer>
                  <AverageItem>
                    <span>Average Price</span>
                    <MenuAveragePrice>{value.price}₩</MenuAveragePrice>
                  </AverageItem>
                  <img src="/img/right.png" alt="right" />
                </MenuAverageContainer>
              </MenuTotalContainer>
            </Menu>
          );
        })}
      </MenuGroup>
      {/* Info */}
      <Info selected={selected}>
        {/* 음식점 지도 */}
        <Foodmap searchPlace={region[0].search} />

        <Location>
          <img src="/img/map_pin.png" alt="map_pin" />
          <span>{target[0][1].info.location}</span>
        </Location>
        <Clock>
          <img src="/img/clock_pin.png" alt="clock_pin" />
          <span>{target[0][1].info.working_hour}</span>
        </Clock>
      </Info>
      {/* Photo */}
      <PhotoGroup selected={selected}>
        {["photo1", "photo1", "photo1", "photo1", "photo1", "photo1"].map(
          (item, index) => {
            return <Photo key={index} url={item}></Photo>;
          }
        )}
      </PhotoGroup>
    </ResDetailWrapper>
  );
}

export default ResDetail;
