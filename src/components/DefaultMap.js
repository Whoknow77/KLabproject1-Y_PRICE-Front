import React from "react";

import Foodmap from "../Foodmap";
import { region } from "../region";
import {
  MapWrapper,
  Respreivew,
  Title,
  Card,
  Restuarant,
  ResName,
  Price,
  ButtonBox,
  Button,
} from "./DefaultMapStyledComponents";

function DefaultMap({ input, expand, setExpand, id }) {
  const Restaurant = [
    { name: "Junwoo's Lamb", price: "3000₩" },
    { name: "Junwoo's Lamb", price: "3000₩" },
    { name: "Junwoo's Lamb", price: "3000₩" },
    { name: "Junwoo's Lamb", price: "3000₩" },
    { name: "Junwoo's Lamb", price: "3000₩" },
    { name: "Junwoo's Lamb", price: "3000₩" },
  ];
  return (
    <MapWrapper input={input}>
      <Foodmap searchPlace={region[id].search}></Foodmap>
      <Respreivew expand={expand}>
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
      <ButtonBox expand={expand}>
        <Button expand={expand}>
          <img
            src="/img/toggle_down.png"
            alt="toggle_down"
            onClick={() => {
              setExpand(!expand);
            }}
          />
        </Button>
      </ButtonBox>
    </MapWrapper>
  );
}

export default DefaultMap;
