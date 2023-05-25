import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Title,
  Wrapper,
  NextButton,
  BackButton,
  GoButton,
  SelectBox,
} from "../components/SelectStyledComponents";
import { region } from "../region";
import { useNavigate, useParams } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "./Image";

const StyledSlider = styled(Slider)`
  height: 100%;
  width: 100%;
  position: relative;
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
`;

export default function Select() {
  const navigate = useNavigate();
  const [id, setId] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = React.useRef(null); // 슬라이더에 사용할 ref를 생성합니다.

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // 애니메이션이 진행 중 일때
    beforeChange: (next) => {
      setId(next);
      setIsAnimating(true);
    },
    // 애니메이션이 끝났을때
    afterChange: () => setIsAnimating(false),
    nextArrow: (
      <NextButton
        disabled={isAnimating} // 애니메이션 동작중일때는 클릭 비활성화
        onClick={() => {
          if (!isAnimating) {
            if (Number(id) === 5) {
              sliderRef.current.slickGoTo(0); // 슬라이드 이동
            } else {
              sliderRef.current.slickGoTo(id + 1); // 슬라이드 이동
            }
          }
        }}
      >
        <img src="/img/next.png" alt="" />
      </NextButton>
    ),
    prevArrow: (
      <BackButton
        disabled={isAnimating}
        onClick={() => {
          if (!isAnimating) {
            if (Number(id) === 0) {
              sliderRef.current.slickGoTo(5);
            } else {
              sliderRef.current.slickGoTo(id - 1);
            }
          }
        }}
      >
        <img src="/img/back.png" alt="" />
      </BackButton>
    ),
  };

  return (
    <Wrapper>
      <StyledSlider ref={sliderRef} {...settings}>
        {[1, 2, 3, 4, 5, 6].map((item, idx) => {
          return (
            <div key={idx}>
              <Image img={`/img/selectbackground${item}.jpg`} />
            </div>
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
