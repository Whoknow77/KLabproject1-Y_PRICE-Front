import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 600px;
  min-width: 360px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
`;

export const SelectContainer = styled.div`
  display: flex;
  transition: ${({ fade }) => fade && "opacity 0.5s ease-in-out;"} 
  background: ${({ id }) =>
    `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../img/selectbackground${
      id + 1
    }.jpg)`};
  flex-direction: column;
  opacity:${({ fade }) => (fade ? "1" : "0")};
  width: 100%;
  height: 100%;
`;

export const Title = styled.div`
  padding: 0 37.5px;
  margin-top: 120px;
  span {
    justify-content: center;
    display: flex;
    color: #fff;
    font-weight: 700;
    font-size: 32px;
    text-align: center;
  }
`;

export const SelectBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 203px auto 0 auto;
  font-weight: 300;
  font-size: 15px;
  line-height: 24px;
  span {
    justify-content: center;
    display: flex;
    color: #fff;
  }

  .area {
    font-weight: 600;
    font-size: 20px;
  }
`;

export const BackButton = styled.button`
  background: url(/img/back.png);
  margin-left: 20px;
  width: 48px;
  border: none;
  cursor: pointer;
`;
export const NextButton = styled.button`
  background: url(/img/next.png);
  width: 48px;
  border: none;
  cursor: pointer;
  margin-right: 20px;
`;

export const GoButton = styled.button`
  background: #ffc300;
  border-radius: 27px;
  width: 89%;
  height: 54px;
  margin: 234px auto 63px auto;
  font-size: 20px;
  font-weight: 600;
  border: none;
  cursor: pointer;
`;
