import React from "react";
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
  return (
    <Wrapper>
      <HomeContainer>
        <Logo>
          <img src="/img/homelogo.png" alt="homelogo" />
        </Logo>
        <Title>
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
        >
          Start →
        </Button>
      </HomeContainer>
    </Wrapper>
  );
}

export default Home;
