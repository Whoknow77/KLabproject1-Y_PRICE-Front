import { useState } from "react";
import {
  FoodSearch,
  FoodSection,
  FoodInfo,
  FoodInfoName,
  FoodInfoNearby,
  FoodInfoPrice,
  FoodExchangeButton,
  MoneyList,
  MoneyItem,
  FoodTransition,
  TransitionTitle,
  TransitionGraphBox,
  TransitionGraph,
  GraphItem,
  SoldNumber,
  SoldBar,
  SoldPrice,
  ReswithFood,
  ResTitle,
  Title1,
  Title2,
  Restuarants,
  Restuarant,
  ResName,
  Price,
  FoodInfoPriceItem,
} from "./FoodDetailStyledComponents";
import { category } from "../region";

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

function FoodDetail({ foodsearch, categorynum }) {
  const [moneychange, setMoneychange] = useState(false);
  const moneyitem = ["€", "£", "¥", "$", "₩"];
  const [exchangesign, setExchangesign] = useState("W");
  let beginprice = 3800;
  return (
    <FoodSearch foodsearch={foodsearch} categorynum={categorynum}>
      <FoodSection>
        <FoodInfo>
          <FoodInfoName>
            {categorynum < 0 ? category[0].name : category[categorynum].name}
          </FoodInfoName>
          <FoodInfoNearby>Average Price Nearby</FoodInfoNearby>
          <FoodInfoPrice>
            <Exchange beginrpice={beginprice} exchangesign={exchangesign} />
            <FoodExchangeButton
              onClick={() => {
                setMoneychange(!moneychange);
              }}
            >
              <span>{exchangesign}</span>
              <img src="/img/exchange_down.png" alt="exchange_down" />
              <MoneyList moneychange={moneychange + ""}>
                {moneyitem.map((sign, index) => {
                  return (
                    <MoneyItem
                      key={index}
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
        <img src={`/img/foodinfo1.png`} alt="category" />
      </FoodSection>
      <FoodTransition>
        <TransitionTitle>Now sold at this price!</TransitionTitle>
        <TransitionGraphBox>
          <TransitionGraph>
            {[
              [0, 0, "1000₩"],
              [1, 1, "2000₩"],
              [2, 2, "3000₩"],
              [3, 3, "4000₩"],
              [4, 4, "5000₩"],
              [5, 5, "6000₩"],
              [6, 6, "7000₩"],
              [7, 7, "8000₩"],
              [8, 8, "9000₩"],
              [2, 2, "10000₩"],
              [2, 2, "11000₩"],
            ].map((item, index) => {
              return (
                <GraphItem key={index}>
                  <SoldNumber>{item[0]}</SoldNumber>
                  <SoldBar count={item[1]}></SoldBar>
                  <SoldPrice>{item[2]}</SoldPrice>
                </GraphItem>
              );
            })}
          </TransitionGraph>
        </TransitionGraphBox>
      </FoodTransition>

      <ReswithFood>
        <ResTitle>
          <Title1>These restaurants have</Title1>
          <Title2>
            {categorynum < 0 ? category[0].name : category[categorynum].name}
          </Title2>
        </ResTitle>
        <Restuarants>
          {[0, 0, 0, 0, 0, 0, 0].map((item, index) => {
            return (
              <Restuarant key={index}>
                <img src="/img/res1.png" alt="res1" />
                <div>
                  <ResName>Junwoo's Lamb</ResName>
                  <br />
                  <Price>3000₩</Price>
                </div>
              </Restuarant>
            );
          })}
        </Restuarants>
      </ReswithFood>
    </FoodSearch>
  );
}
export default FoodDetail;
