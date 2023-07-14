import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./HomeStyledComponents";

function Home() {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [showcount, setShowcount] = useState([0, 0, 0]);

  // [0,0,0], [1,0,0], [1,1,0], [1,1,1]
  useEffect(() => {
    const timer = setTimeout(() => {
      // 마지막 showcount값이 1일 경우 타이머 종료
      if (showcount[showcount.length - 1] === 1) {
        clearTimeout(timer);
      } else {
        const copy = [...showcount];
        copy[count] = 1;
        setShowcount(copy);
        setCount((prev) => prev + 1);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <S.Wrapper>
      <S.HomeContainer>
        <S.Logo showcount={showcount[0]}>
          <img src="/img/homelogo.png" alt="homelogo" />
        </S.Logo>
        <S.Title showcount={showcount[1]}>
          <S.MainTitle>
            Looking for
            <br />
            the <span>Current</span>
            <br />
            <span>Food Prices</span>
            <br />
            of South
            <br />
            Korea?
          </S.MainTitle>
          <S.SubTitle>
            <span>Explore current local food costs and average</span>
            <br />
            <span>prices in South Korea effortlessly!</span>
          </S.SubTitle>
        </S.Title>
        <S.Button
          type="button"
          onClick={() => {
            navigate("/select");
          }}
          showcount={showcount[2]}
        >
          Start →
        </S.Button>
      </S.HomeContainer>
    </S.Wrapper>
  );
}

export default Home;
