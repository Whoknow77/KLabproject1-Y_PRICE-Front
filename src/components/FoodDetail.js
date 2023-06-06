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
} from "../styles/FoodDetailStyledComponents";
import { category } from "../region";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";
import Loading from "./Loading";
import regionexp from "../utils/regionexp";

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

  const regex = regionexp(id); // map 구별
  const { foodId } = useParams();
  const [userData, setUserData] = useState([]);
  const [frequencyPrice, setFrequencyPrice] = useState({}); // 가격 정보 담는 객체
  const moneyitem = ["€", "£", "¥", "$", "₩"]; // 화폐들
  const [moneychange, setMoneychange] = useState(false); // 환전
  const [exchangesign, setExchangesign] = useState("₩"); // 현재 화폐
  const [averageprice, setAverageprice] = useState(0);
  const location = useLocation();

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
        const isregion = resKey.match(regex); // 지역
        const iscategory = category[foodId].category.includes(
          res.info.category
        ); // 카테고리
        const isMenu = res.menu; // 메뉴
        let isPrice = false;
        if (isMenu) {
          isPrice = Object.values(res.menu).find((menu) => {
            console.log(menu.name.toLowerCase("bibimbab"));
            return menu.name
              .toLowerCase()
              .includes(category[foodId].encategory.toLowerCase());
          });
        }
        if (isregion && iscategory && isMenu && isPrice) {
          const menuprice = Number(
            Object.values(res.menu)
              .find((menu) => {
                return menu.name
                  .toLowerCase()
                  .includes(category[foodId].encategory.toLowerCase());
              })
              .price.split(": ")[1]
              .replace(/,/g, "")
          ); // 문자열에서 콤마 제거하고 숫자로 변환
          totalprice += menuprice;
          count++;

          // 가격 빈도수 계산
          newFrequencyPrice[menuprice.toString()] =
            (newFrequencyPrice[menuprice] || 0) + 1;
        }
      });
      setAverageprice(parseInt(totalprice / count));
      setFrequencyPrice(newFrequencyPrice);
    };
    fetchData();
  }, [location.pathname]);
  // 경로가 바뀔때마다 새로계산

  // 음식점(target)을 찾기 전까지 로딩창 표시
  if (!averageprice) {
    return <Loading />;
  }

  return (
    <FoodSearch ressearch={ressearch}>
      <FoodSection>
        <FoodInfo>
          <FoodInfoName>{category[foodId].enname}</FoodInfoName>
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

      {/* 가격 */}
      <ReswithFood>
        <ResTitle>
          <Title1>These restaurants have</Title1>
          <Title2>{category[foodId].name}</Title2>
        </ResTitle>
        <Restuarants>
          {Object.entries(userData).map(([resKey, res], index) => {
            // 가격은 useEffect에서 구한 객체로 검사하면 연산을 줄일 수 있음
            // 이미지 없을때 검사
            const Imgurl = res.info.main_img;
            const isImg = res.info.main_img.includes("None");
            const isregion = resKey.match(regex);
            const iscategory = category[foodId].category.includes(
              res.info.category
            ); // 카테고리
            const resId = resKey.slice(-5, resKey.length); // 떡볶이00, 떡볶이 01, ...

            return (
              isregion &&
              iscategory && (
                <Restuarant
                  key={index}
                  onClick={() => {
                    navigate(`/map/${id}/res/${resId}`);
                  }}
                >
                  {isImg ? (
                    <img src={"/img/default.png"} alt="" />
                  ) : (
                    <img src={`${Imgurl}`} alt="" />
                  )}
                  <div>
                    <ResName>{res.info.name}</ResName>
                    <br />
                    <Price>
                      <img src="/img/star.png" alt="별점 이미지" />
                      <span>{res.info.rating}</span>
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
