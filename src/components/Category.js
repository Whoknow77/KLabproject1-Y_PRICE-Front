import React from "react";
import {
  CategoryWrapper,
  CategoryTitle,
  CategoryGroup,
  CategoryBox,
  CategoryName,
} from "./CetegoryStyledComponents";

import { category } from "../region";

function Category({ input, onChangecategorynum }) {
  return (
    <CategoryWrapper input={input}>
      <CategoryTitle>Categories</CategoryTitle>
      <CategoryGroup>
        {category.map((food, index) => {
          return (
            // 페이지 클릭 시 음식 정보 보여주기
            <CategoryBox
              key={index}
              onClick={() => {
                onChangecategorynum(index);
              }}
            >
              <img src={`/img/category${index + 1}.png`} alt="" />
              <CategoryName>
                <span className="categorytitle">{food.name}</span>
                <span className="categoryexplain">{food.explain}</span>
              </CategoryName>
            </CategoryBox>
          );
        })}
      </CategoryGroup>
    </CategoryWrapper>
  );
}

export default Category;
