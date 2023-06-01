import React from "react";
import {
  Menu,
  AverageItem,
  Category,
  EmotionBox,
  EmotionGroup,
  EmotionNumber,
  EmotionType,
  ResImage,
  Index,
  Infoindex,
  MenuAverageContainer,
  MenuAveragePrice,
  MenuInfoContainer,
  MenuPrice,
  MenuTitle,
  MenuTotalContainer,
  Menuindex,
  ResDetailWrapper,
  ResTitle,
  ResTitleContainer,
  TitleBox,
  Titlename,
  Clock,
  Info,
  Location,
  MenuGroup,
} from "./ResDetailStyledComponents";
import Foodmap from "../Foodmap";
import { region } from "../region";

function ResDetail({ ressearch, id }) {
  return (
    <ResDetailWrapper ressearch={ressearch}>
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
      {/* <Foodmap searchPlace={region[id].search}></Foodmap>  */}
      <Index>
        <Menuindex>Menu</Menuindex>
        <Infoindex>Info</Infoindex>
      </Index>

      <MenuGroup>
        {[1, 1, 1, 1, 1].map((item) => {
          return (
            <Menu>
              <img
                src="/img/gaji.png"
                alt=""
                styled={{ width: "100px", height: "100px" }}
              />
              <MenuTotalContainer>
                <MenuInfoContainer>
                  <MenuTitle>Tomato Egg Fried Rice</MenuTitle>
                  <MenuPrice>10000₩</MenuPrice>
                </MenuInfoContainer>
                <MenuAverageContainer>
                  <AverageItem>
                    <span>Average Price</span>
                    <MenuAveragePrice>10000₩</MenuAveragePrice>
                  </AverageItem>
                  <img src="/img/right.png" alt="right" />
                </MenuAverageContainer>
              </MenuTotalContainer>
            </Menu>
          );
        })}
      </MenuGroup>

      <Info>
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
    </ResDetailWrapper>
  );
}

export default ResDetail;
