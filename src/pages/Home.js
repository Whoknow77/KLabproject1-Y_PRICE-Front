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
} from "../components/HomeStyledComponents";

function Home() {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [showcount, setShowcount] = useState([0, 0, 0]);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (showcount[showcount.length - 1] === 1) {
        clearTimeout(timer);
      } else {
        // showcount[count]의 값을 1로 바꾼다.
        // [0,0,0], [1,0,0], [1,1,0], [1,1,1]
        const copy = [...showcount];
        copy[count] = 1;
        setShowcount(copy);
        setCount((prev) => prev + 1);
      }
    }, 800);
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
          className="button"
          onClick={() => {
            navigate("/select/0");
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
