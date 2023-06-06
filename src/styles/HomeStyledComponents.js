import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const HomeContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 44px;
`;

export const Logo = styled.div`
  margin: 92px auto 0 auto;
  img {
    transition: opacity 1s ease-in-out;
    opacity: ${(props) => (props.showcount ? "1" : "0")};
  }
`;

export const Title = styled.div`
  margin: 0 auto;
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  transition: opacity 1s ease-in-out;
  opacity: ${(props) => (props.showcount ? "1" : "0")};
`;
export const Button = styled.button`
  margin-top: 85px;
  width: 191px;
  display: flex;
  justify-content: center;
  border: none;
  cursor: pointer;
  padding: 20px 40px;
  font-weight: 600;
  font-size: 30px;
  line-height: 21px;
  background: #ffc300;
  border-radius: 32px;
  outline: none;
  align-self: center;
  &:focus {
    outline: none;
  }
  transition: opacity 1s ease-in-out;
  opacity: ${(props) => (props.showcount ? "1" : "0")};
`;

export const MainTitle = styled.div`
  width: 100%;
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
  width: 100%;
  margin: 0 auto;
  font-weight: 500;
  font-size: 15px;
  line-height: 21px;
`;
