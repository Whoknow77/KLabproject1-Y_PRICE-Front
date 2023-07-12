import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  HomeContainer,
  MainTitle,
  SubTitle,
  Title,
  Wrapper,
  Button,
  Logo,
} from "../styles/HomeStyledComponents";

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
    <Wrapper>
      <HomeContainer>
        <Logo showcount={showcount[0]}>
          <img src="/img/homelogo.png" alt="homelogo" />
        </Logo>
        <Title showcount={showcount[1]}>
          <MainTitle>
            Looking for
            <br />
            the <span>Current</span>
            <br />
            <span>Food Prices</span>
            <br />
            of South
            <br />
            Korea?
          </MainTitle>
          <SubTitle>
            <span>Explore current local food costs and average</span>
            <br />
            <span>prices in South Korea effortlessly!</span>
          </SubTitle>
        </Title>
        <Button
          type="button"
          onClick={() => {
            navigate("/select");
          }}
          showcount={showcount[2]}
        >
          Start →
        </Button>
      </HomeContainer>
    </Wrapper>
  );
}

export default Home;
