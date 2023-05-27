import React from "react";
import { Clock, Info, Location, Menu } from "./MapStyledComponents";
import {
  Category,
  Clockitem,
  EmotionBox,
  EmotionContainer,
  EmotionNumber,
  EmotionType,
  ImageBox,
  MenuAverageContainer,
  MenuAveragePrice,
  MenuInfoContainer,
  MenuPrice,
  ResDetailContainer,
  ResTitle,
  ResTitleContainer,
  TitleBox,
  Titlename,
} from "./ResDetailStyledComponents";
import { Res } from "../region";

function ResDetail({ target }) {
  console.log(target);
  return (
    <ResDetailContainer target={target}>
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
      <Menu>
        <MenuInfoContainer></MenuInfoContainer>
        <MenuPrice></MenuPrice>
        <MenuAverageContainer>
          <span>Average Price</span>
          <MenuAveragePrice></MenuAveragePrice>
          <img src="" alt="" />
        </MenuAverageContainer>
        <img src="" alt="" />
      </Menu>
      <Info>
        <Location>
          <img src="/img/map_pin.png" alt="map_pin" />
          <span>{Res.location}</span>
        </Location>
        <Clock>
          <img src="/img/clock_pin.png" alt="clock_pin" />
          <Clockitem>
            {target
              ? target.info.map((item, index) => (
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
