import styled, { css, keyframes } from "styled-components";

export const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 119px;
  .ErrorLogo {
    margin: 0 auto;
    width: 72px;
    height: 82px;
    padding: 0 22px 22px 24px;
  }
  img {
    margin: 0 auto;
    display: flex;
    align-self: center;
    width: 27px;
    height: 56px;
  }
`;

export const LoadingTitle = styled.span`
  font-weight: 600;
  font-size: 24px;
  line-height: 20px;
  text-align: center;
`;

// 0 ~ 25 정지
// 25 ~ 50 상승
// 50 ~ 75 정지
// 75 ~ 100 하강
// 모든게 4분의 1씩 이뤄짐
// 만약 총 4초면 1초정지 1초상승 1초정지 1초하강
const bounce1 = keyframes`
  0%, 20% {
    transform: translateY(0);
  }
  30%, 55% {
    transform: translateY(-10px);
  }
  65% {
    transform: translateY(0);
  }
`;

const bounce2 = keyframes`
  0%, 30% {
    transform: translateY(0);
  }
  40%, 65% {
    transform: translateY(-10px);
  }
  75% {
    transform: translateY(0);
  }
`;

const bounce3 = keyframes`
  0%, 40% {
    transform: translateY(0);
  }
  50%, 75% {
    transform: translateY(-10px);
  }
  85% {
    transform: translateY(0);
  }
`;

export const Dot = styled.div`
  background-color: ${({ color }) => color};
  width: 22px;
  height: 22px;
  border-radius: 50%;
  animation: ${({ animation }) => {
    switch (animation) {
      case "bounce1":
        return css`
          ${bounce1} 2.0s linear infinite;
        `;
      case "bounce2":
        return css`
          ${bounce2} 2.0s linear infinite;
        `;
      case "bounce3":
        return css`
          ${bounce3} 2.0s linear infinite;
        `;
      default:
        return "";
    }
  }};
`;
export const LoadingExplain = styled.div`
  display: flex;
  gap: 11px;
  margin: 0 auto;
  margin-top: 53px;
`;
