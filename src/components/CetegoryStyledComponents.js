import styled from "styled-components";

export const FoodRecommend = styled.div`
  display: ${({ input, flag }) => (input && !flag ? "block" : "none")};
  width: 85%;
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
  img {
    width: 90px;
    height: 90px;
  }
`;

export const RecommendName = styled.div`
  font-weight: 500;
  font-size: 13px;
  text-align: center;
  position: relative;
  top: -5px;
`;
