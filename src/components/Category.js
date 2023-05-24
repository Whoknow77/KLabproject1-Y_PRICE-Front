import React from "react";
import {
  FoodRecommend,
  RecommendTitle,
  RecommendCard,
  RecommendImg,
  RecommendName,
} from "./CetegoryStyledComponents";

function Category({ input, flag }) {
  return (
    <FoodRecommend input={input} flag={flag}>
      <RecommendTitle>How about these restaurants?</RecommendTitle>
      <RecommendCard>
        {[
          "냉면",
          "떡볶이",
          "냉면",
          "떡볶이",
          "냉면",
          "냉면",
          "냉면",
          "냉면",
          "냉면",
          "냉면",
          "냉면",
          "냉면",
          "냉면",
          "냉면",
          "냉면",
          "냉면",
          "냉면",
        ].map((food) => {
          return (
            <RecommendImg>
              <img
                src="https://t1.kakaocdn.net/thumb/T800x0.q80/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fplace%2F2DE73AF5AD944EE995B4D12A8CD9D107"
                alt="food1"
              />
              <RecommendName>{food}</RecommendName>
            </RecommendImg>
          );
        })}
      </RecommendCard>
    </FoodRecommend>
  );
}

export default Category;
