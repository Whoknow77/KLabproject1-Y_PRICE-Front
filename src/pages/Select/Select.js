import React, { useState } from "react";
import * as S from "./SelectStyledComponents";
import { useNavigate } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { region } from "../../utils/region";
import SelectBackgroundStyledComponents from "./SelectBackgroundStyledComponents";

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
      <S.NextButton>
        <img src="/img/next.png" alt="" />
      </S.NextButton>
    ),
    prevArrow: (
      <S.BackButton>
        <img src="/img/back.png" alt="" />
      </S.BackButton>
    ),
  };

  return (
    <S.Wrapper>
      <S.StyledSlider {...settings}>
        {region.map((item) => {
          return (
            <SelectBackgroundStyledComponents
              img={process.env.PUBLIC_URL + `/img/${item.area}.jpg`}
              key={item.area}
              alt="지역 선택 이미지"
            />
          );
        })}
      </S.StyledSlider>
      <S.Title>
        <span>
          Choose the place
          <br />
          you want to visit
        </span>
      </S.Title>
      <S.SelectBox>
        <span className="city">{region[id].city}</span>
        <span className="area">{region[id].area}</span>
      </S.SelectBox>
      <S.GoButton
        onClick={() => {
          navigate(`/map/${Number(id)}`);
        }}
      >
        Go
      </S.GoButton>
    </S.Wrapper>
  );
}
