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
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";
import Loading from "./Loading";

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

function Exchange({ averageprice, exchangesign }) {
  let result = averageprice;
  switch (exchangesign) {
    case "€":
      result = parseFloat(averageprice * 0.0007).toFixed(2);
      break;
    case "£":
      result = parseFloat(averageprice * 0.0000061).toFixed(2);
      break;
    case "¥":
      result = parseFloat(averageprice * 0.0053).toFixed(2);
      break;
    case "$":
      result = parseFloat(averageprice * 0.00076).toFixed(2);
      break;
    case "₩":
      result = averageprice.toLocaleString("en");
      break;
    default:
      result = averageprice;
  }

  return <FoodInfoPriceItem>{`${result}${exchangesign}`}</FoodInfoPriceItem>;
}

function FoodDetail({ ressearch, id }) {
  const navigate = useNavigate();

  // 지역
  // 경복궁 00 ~ 14
  // 이태원 15 ~ 29
  // 강남 30 ~ 44
  // 부산 45 ~ 59
  // 제주 60 ~ 74
  // 홍대 75 ~ 89
  let regex;
  switch (id) {
    // 경복궁
    case "0":
      regex = /0[0-9]|1[0-4]/;
      break;
    // 이태원
    case "1":
      regex = /1[5-9]|2[0-9]/;
      break;
    // 강남
    case "2":
      regex = /3[0-9]|4[0-4]/;
      break;
    // 해운대
    case "3":
      regex = /4[5-9]|5[0-9]/;
      break;
    // 제주
    case "4":
      regex = /6[0-9]|7[0-4]/;
      break;
    // 홍대
    case "5":
      regex = /7[5-9]|8[0-9]/;
      break;
    default:
      regex = 0;
  }

  const { foodId } = useParams();

  // 라우터 foodid에 따른 음식
  let foodtarget;
  if (Number(foodId) === 0) {
    foodtarget = "떡볶이";
  }
  if (Number(foodId) === 2) {
    foodtarget = "삼겹살";
  }

  const [userData, setUserData] = useState([]);
  const [frequencyPrice, setFrequencyPrice] = useState({});
  const [moneychange, setMoneychange] = useState(false);
  const moneyitem = ["€", "£", "¥", "$", "₩"];
  const [exchangesign, setExchangesign] = useState("₩");
  const location = useLocation();

  const [averageprice, setAverageprice] = useState(0);
  // 가격 빈도 수

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 데이터베이스 가져오기
        const db = getDatabase();
        const snapshot = await get(ref(db, "/restaurants"));

        if (snapshot.exists()) {
          const data = snapshot.val(); // 데이터 가져오기
          setUserData(data);
          updateFrequencyPrice(data);
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error(error);
      }
    };

    const updateFrequencyPrice = (data) => {
      const newFrequencyPrice = {};
      let totalprice = 0;
      let count = 0;
      Object.entries(data).forEach(([resKey, res], index) => {
        // 지역과 음식 채택
        const foodFlag = resKey.match(regex);
        const flag =
          res.info.category === foodtarget && res.menu && res.menu.menu1;
        if (flag && foodFlag) {
          const price = parseInt(
            res.menu.menu1.price.split(": ")[1].replace(/,/g, "")
          ); // 문자열에서 콤마 제거하고 숫자로 변환
          totalprice += price;
          count++;
          newFrequencyPrice[price.toString()] =
            (newFrequencyPrice[price] || 0) + 1;
        }
      });
      setAverageprice(parseInt(totalprice / count));
      setFrequencyPrice(newFrequencyPrice);
    };

    fetchData();
  }, [location.pathname]);

  // 음식점(target)을 찾기 전까지 로딩창 표시
  if (!averageprice) {
    return <Loading />;
  }

  return (
    <FoodSearch ressearch={ressearch}>
      <FoodSection>
        <FoodInfo>
          <FoodInfoName>{category[foodId].name}</FoodInfoName>
          <FoodInfoNearby>Average Price Nearby</FoodInfoNearby>
          <FoodInfoPrice>
            <Exchange averageprice={averageprice} exchangesign={exchangesign} />
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
            {Object.entries(frequencyPrice).map(([key, values], index) => (
              <GraphItem key={index}>
                <SoldNumber>{values}</SoldNumber>
                <SoldBar count={values}></SoldBar>
                <SoldPrice>{Number(key).toLocaleString("en")}</SoldPrice>
              </GraphItem>
            ))}
          </TransitionGraph>
        </TransitionGraphBox>
      </FoodTransition>

      {/* 빈도수 빈도수 가격 */}

      <ReswithFood>
        <ResTitle>
          <Title1>These restaurants have</Title1>
          <Title2>{category[foodId].name}</Title2>
        </ResTitle>
        <Restuarants>
          {Object.entries(userData).map(([resKey, res], index) => {
            // 이미지 없을때 검사
            const Imgurl = res.info.main_img;
            const ImgFlag = res.info.main_img.includes("None");
            const foodFlag = resKey.match(regex);
            const menuFlag = res.info.category === foodtarget;
            const resId = resKey.slice(-5, resKey.length);

            return (
              menuFlag &&
              foodFlag && (
                <Restuarant
                  key={index}
                  onClick={() => {
                    navigate(`/map/${id}/res/${resId}`);
                  }}
                >
                  {ImgFlag ? (
                    <img src={"/img/default.png"} alt="" />
                  ) : (
                    <img src={`${Imgurl}`} alt="" />
                  )}
                  <div>
                    <ResName>{res.info.name}</ResName>
                    <br />
                    <Price>
                      Rating <span>{res.info.rating}</span>
                    </Price>
                  </div>
                </Restuarant>
              )
            );
          })}
        </Restuarants>
      </ReswithFood>
    </FoodSearch>
  );
}
export default FoodDetail;
