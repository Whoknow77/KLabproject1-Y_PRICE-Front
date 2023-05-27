import styled from "styled-components";

export const ResDetailContainer = styled.div`
  display: ${({ target }) => (target !== undefined ? "flex" : "none")};
  width: 90%;
  margin: 0 auto;
  flex-direction: column;
  text-align: center;
  gap: 20px;
`;

export const Menu = styled.div`
  display: flex;
  gap: 20px;
`;
export const Info = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  gap: 10;
  span {
    font-weight: 400;
    font-size: 13px;
    line-height: 17px;
  }
`;
export const Location = styled.div`
  display: flex;
  gap: 10;
`;

export const Clock = styled.div`
  display: flex;
  gap: 10;
  span {
    font-weight: 400;
    font-size: 13px;
    line-height: 17px;
  }
`;
export const Clockitem = styled.div``;

export const ResTitleContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export const ResTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Titlename = styled.span`
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;
  text-align: left;
`;

export const Category = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-align: left;
  color: #ffc300;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const EmotionContainer = styled.div`
  display: flex;
  gap: 7px;
  flex-wrap: wrap;
`;
export const EmotionBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 3px;
  padding: 4px 7px;
  height: 19px;
  background: #ff6c4b;
  border-radius: 10px;
  font-weight: 500;
  font-size: 11px;
  line-height: 11px;
`;
export const EmotionType = styled.div`
  color: #ffffff;
`;
export const EmotionNumber = styled.div`
  color: #ffffff;
`;
export const MenuInfoContainer = styled.div``;
export const MenuPrice = styled.div``;
export const MenuAverageContainer = styled.div``;
export const MenuAveragePrice = styled.div``;
export const ImageBox = styled.div`
  width: 70px;
  height: 70px;
  border: 0.5px solid #d9d9d9;
  border-radius: 5px;
`;
