import { useEffect, useState } from "react";
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
  FoodExplain,
} from "./FoodDetailStyledComponents";
import { category } from "../region";
import { useParams } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAlaS2RB7V3YmLAzMV5TKVsHJT8eckYNFE",
  authDomain: "yprice-e94af.firebaseapp.com",
  projectId: "yprice-e94af",
  storageBucket: "yprice-e94af.appspot.com",
  messagingSenderId: "196673935529",
  appId: "1:196673935529:web:d99b393272e3e5e65231b8",
  measurementId: "G-QZ2SL0REKC",
};

initializeApp(firebaseConfig);

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

function FoodDetail({ foodsearch, ressearch, location }) {
  const regex = /0[0-9]|1[0-4]/;
  let numberPattern = /\d+[,]*\d*/g; // 숫자와 콤마에 해당하는 정규 표현식

  const barArray = [
    1, 3, 2, 1, 1, 2, 1, 2, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1,
  ];
  const { foodId } = useParams();
  let foodtarget;
  if (Number(foodId) === 0) {
    foodtarget = "떡볶이";
  }
  if (Number(foodId) === 2) {
    foodtarget = "삼겹살";
  }

  const [userData, setUserData] = useState([]);

  const [moneychange, setMoneychange] = useState(false);
  const moneyitem = ["€", "£", "¥", "$", "₩"];
  const [exchangesign, setExchangesign] = useState("₩");
  let beginprice = 9000;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getDatabase();
        const snapshot = await get(ref(db, "/restaurants"));

        if (snapshot.exists()) {
          const data = snapshot.val(); // 데이터 가져오기
          // 지역에 해당하는 데이터만 뽑기

          // const dataArray = Object.values(data); // 배열 변환
          setUserData(data);
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <FoodSearch foodsearch={foodsearch} ressearch={ressearch}>
      <FoodSection>
        <FoodInfo>
          <FoodInfoName>{category[foodId].name}</FoodInfoName>
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
        {<img src={`/img/foodinfo${Number(foodId) + 1}.png`} alt="category" />}
        <FoodExplain>{category[foodId].explain}</FoodExplain>
      </FoodSection>
      <FoodTransition>
        <TransitionTitle>Now sold at this price!</TransitionTitle>
        <TransitionGraphBox>
          <TransitionGraph>
            {Object.entries(userData)
              .filter(
                ([resKey, res]) =>
                  res.info.category === foodtarget && res.menu && res.menu.menu1
              )
              .sort((a, b) => {
                // 문자열에서 숫자만 추출
                const priceA = parseFloat(
                  a[1].menu.menu1.price
                    .match(numberPattern)
                    .join("")
                    .replace(/,/g, "")
                );
                const priceB = parseFloat(
                  b[1].menu.menu1.price
                    .match(numberPattern)
                    .join("")
                    .replace(/,/g, "")
                );

                return priceA - priceB; // 숫자를 오름차순으로 정렬
              })
              .filter(
                (item, index, self) =>
                  index ===
                  self.findIndex(
                    (t) => t[1].menu.menu1.price === item[1].menu.menu1.price
                  )
              )
              .map(
                ([resKey, res], index) =>
                  resKey.match(regex) && (
                    <GraphItem key={index}>
                      <SoldNumber>{barArray[index]}</SoldNumber>
                      <SoldBar count={barArray[index]}></SoldBar>
                      <SoldPrice>
                        {Number(
                          res.menu.menu1.price
                            .match(numberPattern)
                            .join("")
                            .replace(/,/g, "")
                        ).toLocaleString("en")}
                      </SoldPrice>
                    </GraphItem>
                  )
              )}
          </TransitionGraph>
        </TransitionGraphBox>
      </FoodTransition>

      {/* 빈도수 빈도수 가격 */}

      <ReswithFood>
        <ResTitle>
          <Title1>These restaurants have</Title1>
          <Title2>{category[0].name}</Title2>
        </ResTitle>
        <Restuarants>
          {[0, 0, 0, 0, 0, 0, 0, 0].map((item, index) => {
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
