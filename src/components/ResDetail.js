import React, { useEffect, useState } from "react";
import {
  Menu,
  AverageItem,
  Category,
  EmotionBox,
  EmotionGroup,
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
} from "./ResDetailStyledComponents";
import Foodmap from "./Foodmap";
import { region } from "../region";
import { useParams } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";
import Loading from "./Loading";
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getDatabase();
        const snapshot = await get(ref(db, "/restaurants"));

        if (snapshot.exists()) {
          const data = snapshot.val();
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
        return resId === resKey.slice(-5, resKey.length);
      });
      setTarget(target);
      setSearchPlace(region[0].search);
    };

    fetchData();
  }, []);

  if (!target || target.length === 0) {
    return <Loading />;
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
      <MenuGroup selected={selected}>
        {target[0][1].menu &&
          Object.entries(target[0][1].menu).map(([key, value], index) => {
            const foodregex = /(tteokbokki|pork)/gi;
            let priceflag = foodregex.test(value.name.toLowerCase());
            return (
              <Menu key={index}>
                <MenuTotalContainer>
                  <MenuInfoContainer>
                    <MenuTitle>{value.name}</MenuTitle>
                    <MenuPrice>
                      {Number(
                        value.price.split(": ")[1].replace(/,/g, "")
                      ).toLocaleString("en")}
                      ₩
                    </MenuPrice>
                  </MenuInfoContainer>
                  <MenuAverageContainer>
                    <AverageItem>
                      <span>Average Price</span>
                      <MenuAveragePrice>
                        {priceflag
                          ? Number(18000).toLocaleString("en") + "₩"
                          : "---"}
                      </MenuAveragePrice>
                    </AverageItem>
                    <img src="/img/right.png" alt="right" />
                  </MenuAverageContainer>
                </MenuTotalContainer>
              </Menu>
            );
          })}
      </MenuGroup>
      <Info selected={selected}>
        {searchPlace && <Foodmap searchPlace={target[0][1].info.name} />}
        <Location>
          <img src="/img/map_pin.png" alt="map_pin" />
          <span>{target[0][1].info.location}</span>
        </Location>
        <Clock>
          <img src="/img/clock_pin.png" alt="clock_pin" />
          <span>{target[0][1].info.working_hour}</span>
        </Clock>
      </Info>
      <PhotoGroup selected={selected}>
        {Object.entries(target[0][1].photo).map(([key, value], index) => {
          return <img src={value.url} alt="리뷰 사진" className="pixelated" />;
        })}
      </PhotoGroup>
    </ResDetailWrapper>
  );
}

export default ResDetail;
