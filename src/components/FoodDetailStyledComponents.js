import styled from "styled-components";
export const FoodSearch = styled.div`
  display: ${({ flag }) => (flag !== undefined ? "flex" : "none")};
  width: 90%;
  margin: 0 auto;
  flex-direction: column;
  text-align: center;
  gap: 45px;
`;

export const FoodSection = styled.div`
  img {
    width: 100%;
  }
`;

export const FoodInfo = styled.div`
  background: #fff1c5;
  border-radius: 10px 10px 0px 0px;
  padding: 20px 48.5px;
  height: 126px;
`;

export const FoodInfoName = styled.div`
  color: #ffc300;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
`;

export const FoodInfoNearby = styled.div`
  color: #818181;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
`;

export const FoodInfoPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
export const FoodInfoPriceItem = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  display: inline-block;
`;

export const FoodExchangeButton = styled.div`
  cursor: pointer;
  position: relative;
  padding: 4px 10px;
  background: #ffc300;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 3px;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  img {
    border: none;
    outline: none;
  }
`;

export const MoneyList = styled.div`
  transform: scaleY(
    ${({ moneychange }) => (moneychange === "true" ? "1" : "0")}
  );
  transform-origin: top;
  transition: transform 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 12px 23px;
  gap: 10px;
  position: absolute;
  width: 68px;
  top: 30px;
  left: 0;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(15px);
  border-radius: 5px;
`;

export const MoneyItem = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
`;

export const FoodTransition = styled.div`
  margin: 0 auto;
  text-align: center;
  font-weight: 600;
  font-size: 20px;
  width: 100%;
`;

export const TransitionTitle = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 18px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const TransitionGraphBox = styled.div`
  margin-top: 15px;
  height: 100%;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
`;

export const TransitionGraph = styled.div`
  padding: 15px;
  height: 100%;
  display: flex;
  align-items: flex-end;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  gap: 10px;
`;

export const GraphItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SoldNumber = styled.div`
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
`;

export const SoldBar = styled.div`
  background: rgba(255, 195, 0, 0.7);
  border-radius: 15px;
  margin: 3px 7.5px;
  height: ${({ count }) => count * 30}px}};
  width: 30px;
`;

export const SoldPrice = styled.div`
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
`;

export const ReswithFood = styled.div`
  overflow: scroll;
  height: 353px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ResTitle = styled.div`
  margin-bottom: 15px;
`;
export const Title1 = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
`;
export const Title2 = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #ffc300;
`;

export const Restuarants = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Restuarant = styled.div`
  cursor: pointer;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  height: 90px;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  width: 93%;
  div {
    text-align: left;
    padding: 13.5px 5px;
  }
`;

export const Price = styled.span`
  line-height: 20px;
  font-weight: 700;
  font-size: 20px;
`;

export const ResName = styled.span`
  line-height: 18px;
  font-weight: 500;
  font-size: 15px;
`;
