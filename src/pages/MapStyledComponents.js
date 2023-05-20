import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 360px;
  max-height: 800px;
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
`;
export const MapContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  color: #fff;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
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

  width: 320px;
  height: 40px;

  background: #ffffff;
  border: 1.5px solid #ffc300;
  border-radius: 27px;

  .searchinput {
    width: 226px;
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
  width: 100%;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 15px 15px 0px 0px;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  border: none;
  outline: none;
  img {
    transition: all 1s ease-in-out;
    transform: ${({ expand }) => (expand ? "rotate(180deg)" : "rotate(0deg)")};
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
  width: 90%;
  height: 90px;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  div {
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
  width: 90%;
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
`;

export const FoodSection = styled.div`
  height: 356px;
`;

export const FoodInfo = styled.div`
  background: #fff1c5;
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
  margin: 45px auto 15px auto;
  text-align: center;
  height: 283px;
  font-weight: 600;
  font-size: 20px;
`;

export const TransitionTitle = styled.div``;

export const TransitionGraph = styled.div``;
export const ReswithFood = styled.div`
  height: 353px;
`;

export const ResTitle = styled.div``;
export const Title1 = styled.div``;
export const Title2 = styled.div``;
