import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 600px;
  min-width: 360px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
`;
export const MapContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 15px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(15px);
`;

export const Select = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px auto;
  cursor: pointer;

  .city {
    margin-right: 6px;
    font-weight: 300;
    font-size: 12px;
    color: #818181;
  }

  .area {
    font-weight: 500;
    font-size: 15px;
    color: #515151;
  }
`;

export const Search = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto 10px auto;
  padding: 8px 15px;
  gap: 8px;
  width: 90%;
  height: 40px;
  background: #ffffff;
  border: 1.5px solid #ffc300;
  border-radius: 27px;

  .searchinput {
    width: 90%;
    height: 24px;
    font-weight: 500;
    font-size: 18px;
    display: flex;
    align-items: center;
    color: #ffc300;
    border: none;
    outline: none;
    spellcheck="false";
}

img{
  cursor:pointer;
}
`;

export const MapWrapper = styled.div`
  display: ${({ input }) => (input ? "none" : "block")};
`;

export const ResInfo = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 1s ease-in-out;
  height: ${({ expand }) => (expand ? "294px" : "57px")};
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  gap: 10px;
  width: 97%;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 15px 15px 0px 0px;
`;

export const Button = styled.button`
  background: white;
  display: flex;
  justify-content: center;
  border: none;
  outline: none;
  img {
    transition: all 1s ease-in-out;
    transform: ${({ expand }) => (expand ? "rotate(0deg)" : "rotate(180deg)")};
    cursor: pointer;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  height: 18px;
  font-weight: 600;
  font-size: 20px;
`;

export const Card = styled.div`
  margin-top: 5px;
  width: 100%;
  display: flex;
  flex-direction: column;

  gap: 10px;
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

export const FoodRecommend = styled.div`
  display: ${({ input, flag }) => (input && !flag ? "block" : "none")};
  width: 92%;
  margin: 30px auto;
`;

export const RecommendTitle = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 18px;
  text-align: center;
  margin-bottom: 20px;
`;

export const RecommendCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 10px;
  img {
    padding: 5px;
  }
`;

export const RecommendImg = styled.div`
  border: 0.5px solid #d9d9d9;
  border-radius: 5px;
  cursor: pointer;
`;

export const RecommendName = styled.div`
  font-weight: 500;
  font-size: 13px;
  text-align: center;
  position: relative;
  top: -5px;
`;

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

export const FoodTransition = styled.div`
  margin: 0 auto;
  text-align: center;
  height: 283px;
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
  height: 250px;
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
