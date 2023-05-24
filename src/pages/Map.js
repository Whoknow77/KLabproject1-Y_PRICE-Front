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
  ButtonBox,
  MoneyList,
  MoneyItem,
} from "./MapStyledComponents";
import { region, food, Res } from "../region";

import Foodmap from "./Foodmap";

function Exchange({ beginrpice, exchangesign }) {
  let result = beginrpice;
  switch (exchangesign) {
    case "€":
      result = parseFloat(beginrpice * 0.0007).toFixed(2);
      break;
    case "£":
      result = parseFloat(beginrpice * 0.0000061).toFixed(2);
      break;
    case "¥":
      result = parseFloat(beginrpice * 0.0053).toFixed(2);
      break;
    case "$":
      result = parseFloat(beginrpice * 0.00076).toFixed(2);
      break;
    case "₩":
      result = beginrpice;
      break;
    default:
      result = beginrpice;
  }

  return <FoodInfoPriceItem>{`${result}${exchangesign}`}</FoodInfoPriceItem>;
}

function Map() {
  let { id } = useParams();
  const navigate = useNavigate();
  let [input, setInput] = useState("");
  const [expand, setExpand] = useState(0);
  let [search, setSearch] = useState("");
  const [moneychange, setMoneychange] = useState(false);
  const [moneyitem, setMoneyitem] = useState(["€", "£", "¥", "$", "₩"]);
  const [exchangesign, setExchangesign] = useState("W");

  let flag = food.find((item) => {
    return item.name === search;
  });

  let target = Res.find((item) => item.name === "Xihongshi");

  let beginprice = 3800;

  return (
    <Wrapper>
      <MapContainer>
        {/* 검색 바 */}
        <Header input={input} flag={flag}>
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

        {/* 카테고리 추천 */}
        <FoodRecommend input={input} flag={flag}>
          <RecommendTitle>이런 음식은 어때요?</RecommendTitle>
          <RecommendCard>
            <RecommendImg>
              <img
                src="https://t1.kakaocdn.net/thumb/T800x0.q80/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fplace%2F2DE73AF5AD944EE995B4D12A8CD9D107"
                alt="food1"
              />
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
                <Exchange beginrpice={beginprice} exchangesign={exchangesign} />
                <FoodExchangeButton
                  onClick={(e) => {
                    setMoneychange(!moneychange);
                  }}
                >
                  <span>{exchangesign}</span>
                  <img src="/img/exchange_down.png" alt="exchange_down" />
                  <MoneyList moneychange={moneychange + ""}>
                    {moneyitem.map((sign) => {
                      return (
                        <MoneyItem
                          changeinfo={sign}
                          onClick={() => {
                            setExchangesign(sign);
                          }}
                        >
                          {sign}
                        </MoneyItem>
                      );
                    })}
                  </MoneyList>
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
                  <SoldBar count={0}></SoldBar>
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
