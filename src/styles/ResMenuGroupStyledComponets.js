import styled from "styled-components";

// Menu

export const ResMenuWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  @media (max-width: 595px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Menu = styled.div`
  padding: 15px;
  gap: 10px;
  width: 270px;
  height: 137px;

  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 10px;

  @media (max-width: 595px) {
    width: 100%;
    height: 84px;
  }
`;

export const MenuTotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 107px;
  @media (max-width: 595px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
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
  height: 54px;
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
  text-align: left;
`;
export const MenuAveragePrice = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  text-align: left;
  color: #ffc300;
`;
