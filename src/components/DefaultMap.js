import React from "react";

import {
  MapWrapper,
  Respreivew,
  Title,
  Card,
  Restuarant,
  ResName,
  Price,
} from "./DefaultMapStyledComponents";
import Category from "./Category";

function DefaultMap({ input, foodsearch, ressearch }) {
  const Restaurant = [
    { name: "Junwoo's Lamb", price: "3000₩" },
    { name: "Junwoo's Lamb", price: "3000₩" },
    { name: "Junwoo's Lamb", price: "3000₩" },
    { name: "Junwoo's Lamb", price: "3000₩" },
  ];
  return (
    <MapWrapper input={input}>
      {/* 카테고리 추천 */}
      <Category input={input} foodsearch={foodsearch} ressearch={ressearch} />
      <Respreivew>
        <Title>Looking for this restaurant?</Title>
        <Card>
          {/* 음식점 정보 */}
          {Restaurant.map((res, index) => {
            return (
              <Restuarant key={index}>
                <img src="/img/res1.png" alt="res1" />
                <div>
                  <ResName>{res.name}</ResName>
                  <br />
                  <Price>{res.price}</Price>
                </div>
              </Restuarant>
            );
          })}
        </Card>
      </Respreivew>
    </MapWrapper>
  );
}

export default DefaultMap;
