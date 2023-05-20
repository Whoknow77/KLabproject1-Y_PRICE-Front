import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Wrapper,
  MapContainer,
  Select,
  Header,
  Search,
  ResInfo,
  Title,
  Button,
  Card,
  Restuarant,
  ResName,
  Price,
  MapWrapper,
  FoodRecommend,
  RecommendTitle,
  RecommendCard,
  RecommendName,
  RecommendImg,
  FoodSearch,
  Title1,
  ResTitle,
  ReswithFood,
  TransitionGraph,
  TransitionTitle,
  FoodTransition,
  FoodInfo,
  FoodSection,
  Title2,
  FoodInfoName,
  FoodInfoNearby,
  FoodInfoPrice,
  FoodExchangeButton,
  FoodInfoPriceItem,
} from "./MapStyledComponents";
import { region, food } from "../region";

import Foodmap from "./Foodmap";

function Map() {
  let { id } = useParams();
  const navigate = useNavigate();
  let [input, setInput] = useState("");
  const [expand, setExpand] = useState(0);
  let [search, setSearch] = useState("");

  let flag = food.find((item) => {
    return item.name === search;
  });

  return (
    <Wrapper>
      <MapContainer>
        <Header>
          <Select
            onClick={() => {
              navigate("/select/0");
            }}
          >
            <span className="city">{region[Number(id)].city}</span>
            <span className="area">{region[Number(id)].area}</span>
          </Select>
          <Search>
            <img src="/img/searchbutton.png" alt="search" />
            <input
              type="text"
              className="searchinput"
              placeholder="Search food or restaurant"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setSearch("");
              }}
              onKeyDown={(e) => {
                if (e.code === "Enter") {
                  setSearch(e.target.value);
                }
              }}
            />
            <img
              src="/img/xbutton.png"
              alt="x"
              onClick={() => {
                setInput("");
              }}
            />
          </Search>
        </Header>
        <MapWrapper input={input} flag={flag}>
          <Foodmap searchPlace={region[id].search}></Foodmap>
          <ResInfo expand={expand}>
            <Button expand={expand}>
              <img
                src="/img/toggle_down.png"
                alt="toggle_down"
                onClick={() => {
                  setExpand(!expand);
                }}
              />
            </Button>
            <Title>이런 식당은 어때요?</Title>
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
        </MapWrapper>
        <FoodRecommend input={input} flag={flag}>
          <RecommendTitle>이런 음식은 어때요?</RecommendTitle>
          <RecommendCard>
            <RecommendImg>
              <img src="/img/food1.png" alt="food1" />
              <RecommendName>냉면</RecommendName>
            </RecommendImg>
            <RecommendImg>
              <img src="/img/food1.png" alt="food1" />
              <RecommendName>냉면</RecommendName>
            </RecommendImg>
            <RecommendImg>
              <img src="/img/food1.png" alt="food1" />
              <RecommendName>냉면</RecommendName>
            </RecommendImg>
            <RecommendImg>
              <img src="/img/food1.png" alt="food1" />
              <RecommendName>냉면</RecommendName>
            </RecommendImg>
            <RecommendImg>
              <img src="/img/food1.png" alt="food1" />
              <RecommendName>냉면</RecommendName>
            </RecommendImg>
            <RecommendImg>
              <img src="/img/food1.png" alt="food1" />
              <RecommendName>냉면</RecommendName>
            </RecommendImg>
            <RecommendImg>
              <img src="/img/food1.png" alt="food1" />
              <RecommendName>냉면</RecommendName>
            </RecommendImg>
            <RecommendImg>
              <img src="/img/food1.png" alt="food1" />
              <RecommendName>냉면</RecommendName>
            </RecommendImg>
            <RecommendImg>
              <img src="/img/food1.png" alt="food1" />
              <RecommendName>냉면</RecommendName>
            </RecommendImg>
            <RecommendImg>
              <img src="/img/food1.png" alt="food1" />
              <RecommendName>냉면</RecommendName>
            </RecommendImg>
            <RecommendImg>
              <img src="/img/food1.png" alt="food1" />
              <RecommendName>냉면</RecommendName>
            </RecommendImg>
            <RecommendImg>
              <img src="/img/food1.png" alt="food1" />
              <RecommendName>냉면</RecommendName>
            </RecommendImg>
            <RecommendImg>
              <img src="/img/food1.png" alt="food1" />
              <RecommendName>냉면</RecommendName>
            </RecommendImg>
            <RecommendImg>
              <img src="/img/food1.png" alt="food1" />
              <RecommendName>냉면</RecommendName>
            </RecommendImg>
            <RecommendImg>
              <img src="/img/food1.png" alt="food1" />
              <RecommendName>냉면</RecommendName>
            </RecommendImg>
            <RecommendImg>
              <img src="/img/food1.png" alt="food1" />
              <RecommendName>냉면</RecommendName>
            </RecommendImg>
            <RecommendImg>
              <img src="/img/food1.png" alt="food1" />
              <RecommendName>냉면</RecommendName>
            </RecommendImg>
            <RecommendImg>
              <img src="/img/food1.png" alt="food1" />
              <RecommendName>냉면</RecommendName>
            </RecommendImg>
            <RecommendImg>
              <img src="/img/food1.png" alt="food1" />
              <RecommendName>냉면</RecommendName>
            </RecommendImg>
          </RecommendCard>
        </FoodRecommend>
        <FoodSearch flag={flag}>
          <FoodSection>
            <FoodInfo>
              <FoodInfoName>Lamb Skewers</FoodInfoName>
              <FoodInfoNearby>Average Price Nearby</FoodInfoNearby>
              <FoodInfoPrice>
                <FoodInfoPriceItem>3800₩</FoodInfoPriceItem>
                <FoodExchangeButton>
                  <span>₩</span>
                  <img src="/img/exchange_down.png" alt="exchange_down" />
                </FoodExchangeButton>
              </FoodInfoPrice>
            </FoodInfo>
            <img src="/img/foodinfo1.png" alt="foodinfo1" />
          </FoodSection>

          <FoodTransition>
            <TransitionTitle>Now sold at this price!</TransitionTitle>
            <TransitionGraph></TransitionGraph>
          </FoodTransition>

          <ReswithFood>
            <ResTitle>
              <Title1>These restaurants have</Title1>
              <Title2>Lamb Skewers</Title2>
            </ResTitle>
            <Restuarant>
              <img src="/img/res1.png" alt="res1" />
              <div>
                <ResName>Junwoo's Lamb</ResName>
                <br />
                <Price>3000₩</Price>
              </div>
            </Restuarant>
            <Restuarant>
              <img src="/img/res1.png" alt="res1" />
              <div>
                <ResName>Junwoo's Lamb</ResName>
                <br />
                <Price>3000₩</Price>
              </div>
            </Restuarant>
            <Restuarant>
              <img src="/img/res1.png" alt="res1" />
              <div>
                <ResName>Junwoo's Lamb</ResName>
                <br />
                <Price>3000₩</Price>
              </div>
            </Restuarant>
            <Restuarant>
              <img src="/img/res1.png" alt="res1" />
              <div>
                <ResName>Junwoo's Lamb</ResName>
                <br />
                <Price>3000₩</Price>
              </div>
            </Restuarant>
            <Restuarant>
              <img src="/img/res1.png" alt="res1" />
              <div>
                <ResName>Junwoo's Lamb</ResName>
                <br />
                <Price>3000₩</Price>
              </div>
            </Restuarant>
          </ReswithFood>
        </FoodSearch>
      </MapContainer>
    </Wrapper>
  );
}
export default Map;
