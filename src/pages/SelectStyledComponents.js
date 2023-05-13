import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 360px;
  max-height: 800px;
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
`;

export const SelectContainer = styled.div`
  background-image: url("../img/gung.png");
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Logo = styled.div`
  margin: 116px auto 0 auto;
`;

export const Title = styled.div`
  padding: 0 37.5px;
  margin-top: 20px;
  span {
    color: #fff;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    text-align: center;
  }
`;

export const SelectBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px auto 0 auto;
  gap: 20px;
`;

export const SelectItem = styled.button`
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border: none;
  width: 285px;
  height: 54px;
  background: rgba(184, 184, 184, 0.5);
  backdrop-filter: blur(25px);
  border-radius: 28.5px;
  font-weight: 300;
  font-size: 15px;
  display: flex;
  color: #fff;
  span {
    margin-left: 7px;
    color: #fff;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
  }
`;

export const SelectItem2 = styled.button`
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border: none;
  width: 285px;
  height: 54px;
  background: rgba(184, 184, 184, 0.5);
  backdrop-filter: blur(25px);
  border-radius: 28.5px;
  color: #fff;
  font-weight: 300;
  font-size: 15px;
  display: flex;
  span {
    margin-left: 7px;
    color: #fff;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
  }
`;

// .start{
//   opcaity:0;
// }

// .end{
//   opacity:1;
//   transition: opacity:0.5s;
// }
