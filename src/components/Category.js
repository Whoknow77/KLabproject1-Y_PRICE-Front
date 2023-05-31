import React from "react";
import {
  CategoryWrapper,
  CategoryTitle,
  CategoryGroup,
  CategoryBox,
  CategoryName,
} from "./CetegoryStyledComponents";

function Category({ input, foodsearch, ressearch }) {
  return (
    <CategoryWrapper
      input={input}
      foodsearch={foodsearch}
      ressearch={ressearch}
    >
      <CategoryTitle>Categories</CategoryTitle>
      <CategoryGroup>
        {["Meat", "tteokbokki", "Chicken", "Bulgogi"].map((food, index) => {
          return (
            <CategoryBox key={index}>
              <img src="/img/meat.png" alt="food1" />
              <CategoryName>
                <span>{food}</span>
                <img src="/img/down.png" alt="down" />
              </CategoryName>
            </CategoryBox>
          );
        })}
      </CategoryGroup>
    </CategoryWrapper>
  );
}

export default Category;
