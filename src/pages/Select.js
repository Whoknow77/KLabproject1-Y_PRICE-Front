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
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <NextButton>
        <img
          src="/img/next.png"
          alt=""
          onClick={() => {
            if (Number(id) === 5) {
              setId(Number(id) - 5);
            } else {
              setId(Number(id) + 1);
            }
          }}
        />
      </NextButton>
    ),
    prevArrow: (
      <BackButton>
        <img
          src="/img/back.png"
          alt=""
          onClick={() => {
            if (Number(id) === 0) {
              setId(Number(id) + 5);
            } else {
              setId(Number(id) - 1);
            }
          }}
        />
      </BackButton>
    ),
  };

  return (
    <Wrapper>
      <StyledSlider {...settings}>
        {[0, 0, 0, 0, 0, 0].map((item) => {
          return (
            <div>
              <Image img={`/img/selectbackground${Number(id) + 1}.jpg`} />
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
        <span className="city">{region[Number(id)].city}</span>
        <span className="area">{region[Number(id)].area}</span>
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
