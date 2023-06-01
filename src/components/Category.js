import React from "react";
import {
  CategoryWrapper,
  CategoryTitle,
  CategoryGroup,
  CategoryBox,
  CategoryName,
} from "./CetegoryStyledComponents";

function Category({ input, foodsearch, ressearch }) {
  const category = [
    { name: "TTeokbokki", explain: "Spicy rice cakes in a gochujang sauce." },
    {
      name: "Bulgogi",
      explain: "Thinly sliced marinated beef, grilled or stir-fried.",
    },
    {
      name: "Samgyeopsal",
      explain: "Grilled pork belly wrapped in lettuce leaves.",
    },
    {
      name: "Bibimbab",
      explain: "Mixed rice bowl with veggies, meat, and a fried-egg.",
    },
  ];
  return (
    <CategoryWrapper
      input={input}
      foodsearch={foodsearch}
      ressearch={ressearch}
    >
      <CategoryTitle>Categories</CategoryTitle>
      <CategoryGroup>
        {category.map((food, index) => {
          return (
            <CategoryBox key={index}>
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
