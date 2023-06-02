import React, { useState } from "react";
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
const index = ["Menu", "Photo", "Info"];

function ResDetail({ ressearch, id, foodsearch, categorynum }) {
  const [selected, setSelected] = useState(0);

  return (
    <ResDetailWrapper
      ressearch={ressearch}
      foodsearch={foodsearch}
      categorynum={categorynum}
    >
      <ResTitleContainer>
        <ResImage />
        <ResTitle>
          <TitleBox>
            <Titlename>Xihongshi</Titlename>
            <Category>Asian food</Category>
          </TitleBox>
          <EmotionGroup>
            <EmotionBox>
              <img src="/img/thumbs-up.png" alt="thumbs-up" />
              <span style={{ color: "#fff" }}>Taste</span>
              <span style={{ color: "#fff" }}>7</span>
            </EmotionBox>
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
        {["3500₩", "3500₩", "3500₩", "3500₩", ""].map((item, index) => {
          return (
            <Menu key={index}>
              <MenuTotalContainer>
                <MenuInfoContainer>
                  <MenuTitle>Original Tteokbokki</MenuTitle>
                  <MenuPrice>3000₩</MenuPrice>
                </MenuInfoContainer>
                <MenuAverageContainer>
                  <AverageItem>
                    <span>Average Price</span>
                    <MenuAveragePrice>{item}</MenuAveragePrice>
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
        <Foodmap searchPlace={region[id].search} />

        <Location>
          <img src="/img/map_pin.png" alt="map_pin" />
          <span>1F, 5, Neungdong-ro 17-gil, Gwangjin-gu, Seoul</span>
        </Location>
        <Clock>
          <img src="/img/clock_pin.png" alt="clock_pin" />
          <div>
            {ressearch
              ? ressearch.info.map((item, index) => (
                  <span key={index}>{item}</span>
                ))
              : null}
          </div>
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
