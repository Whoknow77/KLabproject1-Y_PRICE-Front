import Slider from "react-slick";
import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 600px;
  min-width: 360px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

export const Title = styled.div`
  padding: 0 37.5px;
  position: absolute;
  top: 120px;
  justify-content: center;
  display: flex;
  span {
    color: #fff;
    font-weight: 700;
    font-size: 32px;
    text-align: center;
  }
`;

export const SelectBox = styled.div`
  position: absolute;
  top: 47%;
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
  width: 48px;
  height: 48px;
  left: 5%;
  z-index: 3;
`;
export const NextButton = styled.button`
  width: 48px;
  height: 48px;
  right: 5%;
  z-index: 3;
`;

export const GoButton = styled.button`
  position: absolute;
  bottom: 100px;
  top: 700px;
  width: 85%;
  margin: 0 auto;
  background: #ffc300;
  border-radius: 27px;
  height: 54px;
  font-size: 20px;
  font-weight: 600;
  &:focus {
    outline: none;
  }
`;

export const StyledSlider = styled(Slider)`
  height: 100%;
  width: 100%;
  position: relative;
  .slick-prev::before,
  .slick-next::before {
    opacity: 1;
    display: none;
  }
`;
