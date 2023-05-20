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
} from "./HomeStyledComponents";

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
            of South Korea?
          </MainTitle>
          <SubTitle>
            Discover local food costs in South Korea
            <br />
            with ease using our service.
          </SubTitle>
          <Button
            type="button"
            className="button"
            onClick={() => {
              navigate("/select/0");
            }}
          >
            Start →
          </Button>
        </Title>
      </HomeContainer>
    </Wrapper>
  );
}

export default Home;
