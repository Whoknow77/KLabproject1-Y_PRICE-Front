import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 360px;
  max-height: 800px;
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
`;
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Logo = styled.div`
  margin: 92px auto 44px auto;
`;

export const Title = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 442px;
`;

export const MainTitle = styled.div`
  line-height: 55px;
  font-family: "fantasy";
  font-size: 55px;
  font-weight: 800;
  margin-bottom: 30px;
  span {
    font-weight: 700;
    color: #ffc300;
  }
`;

export const Button = styled.button`
  margin: 129px auto 0 auto;
  border: none;
  cursor: pointer;
  padding: 20px 40px;
  font-weight: 600;
  font-size: 30px;
  line-height: 21px;
  width: 191px;
  height: 61px;
  background: #ffc300;
  border-radius: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SubTitle = styled.div`
  font-weight: 500;
  font-size: 15px;
  line-height: 21px;
`;
