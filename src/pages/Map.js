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
  Restuarants,
  TransitionGraphBox,
  SoldBar,
  SoldNumber,
  SoldPrice,
  GraphItem,
  Food,
  Menu,
  Info,
  Clock,
  Location,
} from "./MapStyledComponents";
import { region, food, Res } from "../region";

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

  let target = Res.find((item) => item.name === "Xihongshi");

  return (
    <Wrapper>
      <MapContainer>
        {/* 검색 바 */}
        <Header>
          <Select
            onClick={() => {
              navigate("/select/0");
            }}
          >
            <span className="city">{region[Number(id)].city}</span>
            <span className="area">{region[Number(id)].area}</span>
            <img src="/img/exchange_down.png" alt="exchange_down" />
            <img src="" alt="" />
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

        {/* map 기본 페이지(지도 + 음식점 추천) */}
        <MapWrapper input={input} flag={flag}>
          <Foodmap searchPlace={region[id].search}>
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
          </Foodmap>
        </MapWrapper>

        {/* 음식추천 */}
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

        {/* 음식정보 */}
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
            <TransitionGraphBox>
              <TransitionGraph>
                <GraphItem>
                  <SoldNumber>0</SoldNumber>
                  <SoldBar count={1}></SoldBar>
                  <SoldPrice>1000₩</SoldPrice>
                </GraphItem>
                <GraphItem>
                  <SoldNumber>1</SoldNumber>
                  <SoldBar count={2}></SoldBar>
                  <SoldPrice>2000₩</SoldPrice>
                </GraphItem>
                <GraphItem>
                  <SoldNumber>2</SoldNumber>
                  <SoldBar count={2}></SoldBar>
                  <SoldPrice>3000₩</SoldPrice>
                </GraphItem>
                <GraphItem>
                  <SoldNumber>3</SoldNumber>
                  <SoldBar count={3}></SoldBar>
                  <SoldPrice>4000₩</SoldPrice>
                </GraphItem>
                <GraphItem>
                  <SoldNumber>3</SoldNumber>
                  <SoldBar count={3}></SoldBar>
                  <SoldPrice>4000₩</SoldPrice>
                </GraphItem>
                <GraphItem>
                  <SoldNumber>4</SoldNumber>
                  <SoldBar count={4}></SoldBar>
                  <SoldPrice>5000₩</SoldPrice>
                </GraphItem>
                <GraphItem>
                  <SoldNumber>3</SoldNumber>
                  <SoldBar count={3}></SoldBar>
                  <SoldPrice>6000₩</SoldPrice>
                </GraphItem>
                <GraphItem>
                  <SoldNumber>2</SoldNumber>
                  <SoldBar count={2}></SoldBar>
                  <SoldPrice>7000₩</SoldPrice>
                </GraphItem>
                <GraphItem>
                  <SoldNumber>1</SoldNumber>
                  <SoldBar count={1}></SoldBar>
                  <SoldPrice>8000₩</SoldPrice>
                </GraphItem>
                <GraphItem>
                  <SoldNumber>0</SoldNumber>
                  <SoldBar count={0}></SoldBar>
                  <SoldPrice>9000₩</SoldPrice>
                </GraphItem>
                <GraphItem>
                  <SoldNumber>1</SoldNumber>
                  <SoldBar count={1}></SoldBar>
                  <SoldPrice>10000₩</SoldPrice>
                </GraphItem>
              </TransitionGraph>
            </TransitionGraphBox>
          </FoodTransition>

          <ReswithFood>
            <ResTitle>
              <Title1>These restaurants have</Title1>
              <Title2>Lamb Skewers</Title2>
            </ResTitle>
            <Restuarants>
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
            </Restuarants>
          </ReswithFood>
        </FoodSearch>

        {/* 음식추천 */}
        <Food>
          <Menu></Menu>
          <Info>
            <Location>
              <img src="/img/map_pin.png" alt="map_pin" />
              <span>서울 광진구 능동로 17길 5 1층 (우)05010</span>
            </Location>
            <Clock>
              {target
                ? target.info.map((item, index) => <span>{item}</span>)
                : null}
            </Clock>
          </Info>
        </Food>
      </MapContainer>
    </Wrapper>
  );
}

export default Map;
