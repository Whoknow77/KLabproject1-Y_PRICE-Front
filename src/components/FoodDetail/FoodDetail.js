import { useEffect, useState } from "react";
import * as S from "./FoodDetailStyledComponents";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";
import regionexp from "../../utils/regionexp";
import { firebaseConfig } from "../../apis/index";
import { category } from "../../utils/region";
import { Loading } from "./../index";

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

  return (
    <S.FoodInfoPriceItem>{`${result}${exchangesign}`}</S.FoodInfoPriceItem>
  );
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
    <S.FoodSearch ressearch={ressearch}>
      <S.FoodSection>
        <S.FoodInfo>
          <S.FoodInfoName>{category[foodId].enname}</S.FoodInfoName>
          <S.FoodInfoNearby>Average Price Nearby</S.FoodInfoNearby>
          <S.FoodInfoPrice>
            <Exchange averageprice={averageprice} exchangesign={exchangesign} />
            <S.FoodExchangeButton
              onClick={() => {
                setMoneychange(!moneychange);
              }}
            >
              <span>{exchangesign}</span>
              <img src="/img/exchange_down.png" alt="exchange_down" />
              <S.MoneyList moneychange={moneychange + ""}>
                {moneyitem.map((sign, index) => {
                  return (
                    <S.MoneyItem
                      key={index}
                      changeinfo={sign}
                      onClick={() => {
                        setExchangesign(sign);
                      }}
                    >
                      {sign}
                    </S.MoneyItem>
                  );
                })}
              </S.MoneyList>
            </S.FoodExchangeButton>
          </S.FoodInfoPrice>
        </S.FoodInfo>
        {<img src={`/img/foodinfo${Number(foodId) + 1}.png`} alt="category" />}
        <S.FoodExplain>{category[foodId].explain}</S.FoodExplain>
      </S.FoodSection>
      <S.FoodTransition>
        <S.TransitionTitle>Now sold at this price!</S.TransitionTitle>
        <S.TransitionGraphBox>
          <S.TransitionGraph>
            {Object.entries(frequencyPrice).map(([key, values], index) => (
              <S.GraphItem key={index}>
                <S.SoldNumber>{values}</S.SoldNumber>
                <S.SoldBar count={values}></S.SoldBar>
                <S.SoldPrice>{Number(key).toLocaleString("en")}</S.SoldPrice>
              </S.GraphItem>
            ))}
          </S.TransitionGraph>
        </S.TransitionGraphBox>
      </S.FoodTransition>

      {/* 가격 */}
      <S.ReswithFood>
        <S.ResTitle>
          <S.Title1>These restaurants have</S.Title1>
          <S.Title2>{category[foodId].name}</S.Title2>
        </S.ResTitle>
        <S.Restuarants>
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
                <S.Restuarant
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
                    <S.ResName>{res.info.name}</S.ResName>
                    <br />
                    <S.Price>
                      <img src="/img/star.png" alt="별점 이미지" />
                      <span>{res.info.rating}</span>
                    </S.Price>
                  </div>
                </S.Restuarant>
              )
            );
          })}
        </S.Restuarants>
      </S.ReswithFood>
    </S.FoodSearch>
  );
}
export default FoodDetail;
