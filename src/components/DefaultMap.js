import React from "react";

import Foodmap from "../pages/Foodmap";
import { region } from "../region";
import {
  MapWrapper,
  ResInfo,
  Title,
  Card,
  Restuarant,
  ResName,
  Price,
  ButtonBox,
  Button,
} from "./DefaultMapStyledComponents";

function DefaultMap({ input, flag, expand, setExpand, id }) {
  return (
    <MapWrapper input={input}>
      <Foodmap
        searchPlace={region[id].search}
        style={{ position: "absolute", width: "100%" }}
      ></Foodmap>
      <ResInfo expand={expand}>
        <Title>Looking for this restaurant?</Title>
        <Card>
          {/* 음식점 정보 */}
          <Restuarant>
            <img src="/img/res1.png" alt="res1" />
            <div>
              <ResName>Junwoo's Lamb</ResName>
              <br />
              <Price>3000₩</Price>
            </div>
          </Restuarant>
          <Restuarant>
            <img src="/img/res2.png" alt="res2" />
            <div>
              <ResName>Xihongshi</ResName>
              <br />
              <Price>4000₩</Price>
            </div>
          </Restuarant>
          <Restuarant>
            <img src="/img/res2.png" alt="res2" />
            <div>
              <ResName>Xihongshi</ResName>
              <br />
              <Price>4000₩</Price>
            </div>
          </Restuarant>
          <Restuarant>
            <img src="/img/res2.png" alt="res2" />
            <div>
              <ResName>Xihongshi</ResName>
              <br />
              <Price>4000₩</Price>
            </div>
          </Restuarant>
          <Restuarant>
            <img src="/img/res2.png" alt="res2" />
            <div>
              <ResName>Xihongshi</ResName>
              <br />
              <Price>4000₩</Price>
            </div>
          </Restuarant>
          <Restuarant>
            <img src="/img/res2.png" alt="res2" />
            <div>
              <ResName>Xihongshi</ResName>
              <br />
              <Price>4000₩</Price>
            </div>
          </Restuarant>
          <Restuarant>
            <img src="/img/res2.png" alt="res2" />
            <div>
              <ResName>Xihongshi</ResName>
              <br />
              <Price>4000₩</Price>
            </div>
          </Restuarant>
          <Restuarant>
            <img src="/img/res2.png" alt="res2" />
            <div>
              <ResName>Xihongshi</ResName>
              <br />
              <Price>4000₩</Price>
            </div>
          </Restuarant>
          <Restuarant>
            <img src="/img/res2.png" alt="res2" />
            <div>
              <ResName>Xihongshi</ResName>
              <br />
              <Price>4000₩</Price>
            </div>
          </Restuarant>
        </Card>
      </ResInfo>
      <ButtonBox>
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
