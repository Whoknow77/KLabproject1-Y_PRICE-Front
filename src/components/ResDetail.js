import React from "react";
import {
  Menu,
  AverageItem,
  Category,
  Clockitem,
  EmotionBox,
  EmotionContainer,
  EmotionNumber,
  EmotionType,
  ImageBox,
  Index,
  Infoindex,
  MenuAverageContainer,
  MenuAveragePrice,
  MenuInfoContainer,
  MenuPrice,
  MenuTitle,
  MenuTotalContainer,
  Menuindex,
  ResDetailContainer,
  ResTitle,
  ResTitleContainer,
  TitleBox,
  Titlename,
  Clock,
  Info,
  Location,
} from "./ResDetailStyledComponents";
import { Res } from "../region";

function ResDetail({ ressearch }) {
  return (
    <ResDetailContainer ressearch={ressearch}>
      <ResTitleContainer>
        <ImageBox>
          <img src="/img/Xihongshi.png" alt="Xihongshi" />
        </ImageBox>
        <ResTitle>
          <TitleBox>
            <Titlename>Xihongshi</Titlename>
            <Category>Asian food</Category>
          </TitleBox>
          <EmotionContainer>
            <EmotionBox>
              <img src="/img/thumbs-up.png" alt="thumbs-up" />
              <EmotionType>Taste</EmotionType>
              <EmotionNumber>7</EmotionNumber>
            </EmotionBox>
            <EmotionBox>
              <img src="/img/thumbs-up.png" alt="thumbs-up" />
              <EmotionType>Sanitary</EmotionType>
              <EmotionNumber>4</EmotionNumber>
            </EmotionBox>
            <EmotionBox>
              <img src="/img/thumbs-up.png" alt="thumbs-up" />
              <EmotionType>Service</EmotionType>
              <EmotionNumber>1</EmotionNumber>
            </EmotionBox>
            <EmotionBox>
              <img src="/img/thumbs-up.png" alt="thumbs-up" />
              <EmotionType>Taste</EmotionType>
              <EmotionNumber>7</EmotionNumber>
            </EmotionBox>
          </EmotionContainer>
        </ResTitle>
      </ResTitleContainer>
      <Index>
        <Menuindex>Menu</Menuindex>
        <Infoindex>Info</Infoindex>
      </Index>

      {[1, 1, 1, 1, 1].map((item) => {
        return (
          <Menu>
            <img src="/img/gaji.png" alt="" />
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

      <Info>
        <Location>
          <img src="/img/map_pin.png" alt="map_pin" />
          <span>1F, 5, Neungdong-ro 17-gil, Gwangjin-gu, Seoul</span>
        </Location>
        <Clock>
          <img src="/img/clock_pin.png" alt="clock_pin" />
          <Clockitem>
            {ressearch
              ? ressearch.info.map((item, index) => (
                  <span key={index}>{item}</span>
                ))
              : null}
          </Clockitem>
        </Clock>
      </Info>
    </ResDetailContainer>
  );
}

export default ResDetail;
