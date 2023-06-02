import styled from "styled-components";

export const ResDetailWrapper = styled.div`
  display: ${({ foodsearch, categorynum, ressearch }) =>
    (foodsearch === undefined && ressearch !== undefined) || categorynum >= 0
      ? "flex"
      : "none"};
  width: 90%;
  flex-direction: column;
  margin: 0 auto;
`;

export const ResTitleContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 16px;
  margin-bottom: 17px;
`;

export const ResImage = styled.div`
  width: 90px;
  height: 90px;
  border: 0.5px solid #d9d9d9;
  border-radius: 5px;
  background: url(${process.env.PUBLIC_URL + "/img/Xihongshi.png"}) no-repeat;
  background-size: cover;
`;

export const ResTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Titlename = styled.span`
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;
`;

export const Category = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #ffc300;
`;

export const EmotionGroup = styled.div`
  display: flex;
  gap: 7px;
  flex-wrap: wrap;
`;
export const EmotionBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 7px;
  height: 19px;
  background: #ff6c4b;
  border-radius: 10px;
  font-weight: 500;
  font-size: 11px;
  line-height: 11px;
`;

export const Index = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 130px;
  gap: 40px;

  width: 100%;
  height: 48px;

  background: rgba(255, 255, 255, 0.5);
  border-top: 0.5px solid #d9d9d9;
  backdrop-filter: blur(15px);
`;

export const IndexButton = styled.button`
  &:focus {
    outline: none;
  }
  cursor: pointer;
  outline: none;
  background: none;
  font-weight: ${({ active }) => (active ? "700" : "500")};
  border: none;
  border-bottom: ${({ active }) => (active ? "2px solid #515151" : "")};
  font-size: 15px;
  line-height: 18px;
`;

export const MenuGroup = styled.div`
  display: ${({ selected }) => (selected === 0 ? "flex" : "none")};
  flex-direction: column;
  gap: 10px;
`;

// Menu
export const Menu = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 84px;

  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
`;

export const MenuTotalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuInfoContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const MenuTitle = styled.div`
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  color: #515151;
`;
export const MenuPrice = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #515151;
`;
export const MenuAverageContainer = styled.button`
  &:focus {
    outline: none;
  }
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 10px;
  justify-content: space-between;
  width: 52%;
  height: 63px;
  background: #fff1c5;
  border-radius: 5px;

  span {
    font-weight: 500;
    font-size: 13px;
    line-height: 18px;
    color: #818181;
  }
`;
export const AverageItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const MenuAveragePrice = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  text-align: left;
  color: #ffc300;
`;

// Info
export const Info = styled.div`
  display: ${({ selected }) => (selected === 2 ? "flex" : "none")};
  flex-direction: column;
  gap: 10px;
  span {
    font-weight: 400;
    font-size: 13px;
    line-height: 17px;
    display: flex;
    align-items: center;
    color: #515151;
  }
`;
export const Location = styled.div`
  display: flex;
  gap: 10px;
`;
export const Clock = styled.div`
  img {
    width: 20px;
    height: 20px;
  }
  display: flex;
  gap: 10px;
  div {
    display: flex;
    flex-direction: column;
  }
  span {
    font-weight: 400;
    font-size: 13px;
    line-height: 17px;
  }
`;

// Photo
export const PhotoGroup = styled.div`
  margin-top: 15px;
  width: 90%;
  height: 529px;
  display: ${({ selected }) => (selected === 1 ? "flex" : "none")};
  flex-wrap: wrap;
  gap: 8px;
`;

export const Photo = styled.div`
  background-image: url(${(props) => `/img/${props.url}.png`});
  width: 140px;
  height: 211px;
  border-radius: 10px;
`;
