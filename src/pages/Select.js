import React, { useState } from "react";
import {
  Title,
  Wrapper,
  NextButton,
  BackButton,
  GoButton,
  SelectBox,
  StyledSlider,
} from "../styles/SelectStyledComponents";
import { useNavigate } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { region } from "../utils/region";
import SelectBackgroundStyledComponents from "./../styles/SelectBackgroundStyledComponents";

export default function Select() {
  const navigate = useNavigate();
  const [id, setId] = useState(0); // 현재 보고 있는 페이지 number

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // 애니메이션이 진행 중 일때
    beforeChange: (current, next) => {
      // back
      if (current - next === -5 || current - next === 1) {
        setId((prevId) => (prevId === 0 ? 5 : prevId - 1));
      }
      // next
      else {
        setId((prevId) => (prevId + 1) % 6);
      }
    },
    nextArrow: (
      <NextButton>
        <img src="/img/next.png" alt="" />
      </NextButton>
    ),
    prevArrow: (
      <BackButton>
        <img src="/img/back.png" alt="" />
      </BackButton>
    ),
  };

  return (
    <Wrapper>
      <StyledSlider {...settings}>
        {region.map((item) => {
          return (
            <SelectBackgroundStyledComponents
              img={`/img/${item.area}.jpg`}
              key={item.area}
            />
          );
        })}
      </StyledSlider>
      <Title>
        <span>
          Choose the place
          <br />
          you want to visit
        </span>
      </Title>
      <SelectBox>
        <span className="city">{region[id].city}</span>
        <span className="area">{region[id].area}</span>
      </SelectBox>
      <GoButton
        onClick={() => {
          navigate(`/map/${Number(id)}`);
        }}
      >
        Go
      </GoButton>
    </Wrapper>
  );
}
