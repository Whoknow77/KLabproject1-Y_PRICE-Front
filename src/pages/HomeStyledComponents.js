import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 600px;
  min-width: 360px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
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
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 442px;
`;

export const MainTitle = styled.div`
  margin: 0 auto;
  line-height: 55px;
  font-size: 55px;
  font-weight: 800;
  span {
    font-weight: 700;
    color: #ffc300;
  }
`;

export const SubTitle = styled.div`
  position: relative;
  left: -10px;
  margin: 0 auto;
  font-weight: 500;
  font-size: 15px;
  line-height: 21px;
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
