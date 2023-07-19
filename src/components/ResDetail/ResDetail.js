import React, { useEffect, useState } from "react";
import * as S from "./ResDetailStyledComponents";
import { useParams } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";
import { firebaseConfig } from "../../utils/initfirebase";
import { category } from "../../utils/region";
import regionexp from "../../utils/regionexp";
import { Loading } from "../index";
import { DecideMenu } from "../../utils/DecideMenu";

initializeApp(firebaseConfig);

const ResDetail = ({ id, showModal, setShowmodal }) => {
  const [selected, setSelected] = useState(0);
  const { resId } = useParams();
  const [userData, setUserData] = useState([]);
  const [target, setTarget] = useState(null); // 식당
  const [averageprice, setAverageprice] = useState(0);
  const regex = regionexp(id);
  // 탭 메뉴
  const TabMenu = ["Menu", "Photo", "Info"];

  // 카테고리 아이디(떡볶이 => 0, 불고기 => 1, ...)
  let categoryid;
  category.forEach((item, index) => {
    if (resId.includes(item.korname)) {
      categoryid = index;
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getDatabase();
        const snapshot = await get(ref(db, "/restaurants"));

        if (snapshot.exists()) {
          const data = snapshot.val();
          setUserData(data);
          updateTarget(data);
          updateAvergaePrice(data);
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error(error);
      }
    };

    // 타겟 음식점
    const updateTarget = (data) => {
      const target = Object.entries(data).find(([resKey, res], index) => {
        return resId === resKey.slice(-5, resKey.length);
      });
      setTarget(target);
    };

    const updateAvergaePrice = (data) => {
      let totalprice = 0;
      let count = 0;
      Object.entries(data).forEach(([resKey, res], index) => {
        const isregion = resKey.match(regex); // 지역
        // 카테고리
        const iscategory = category[categoryid].category.includes(
          res.info.category
        );

        // 메뉴
        const isMenu =
          res.menu &&
          Object.values(res.menu).find((menu) => {
            return menu.name
              .toLowerCase()
              .includes(category[categoryid].encategory.toLowerCase());
          });

        if (isregion && iscategory && isMenu) {
          const menuprice = Number(
            Object.values(res.menu)
              .find((menu) => {
                return menu.name
                  .toLowerCase()
                  .includes(category[categoryid].encategory.toLowerCase());
              })
              .price.split(": ")[1]
              .replace(/,/g, "")
          ); // 문자열에서 콤마 제거하고 숫자로 변환
          totalprice += menuprice;
          count++;
        }
      });
      setAverageprice(parseInt(totalprice / count));
    };

    fetchData();
  }, []);

  // 음식점(target)을 찾기 전까지 로딩창 표시
  if (!target || target.length === 0) {
    return <Loading />;
  }

  // Menu Photo Info 중 하나를 렌더링 하는 컴포넌트
  const ComponentToRender = DecideMenu(
    selected,
    target,
    categoryid,
    id,
    averageprice,
    showModal,
    setShowmodal
  );

  return (
    <S.ResDetailWrapper>
      <S.ResTitleContainer>
        {target[1].info.main_img && (
          <S.ResTitleImg src={target[1].info.main_img} Loading="lazy" />
        )}
        <S.ResTitle>
          <S.TitleBox>
            {/* 제목  */}
            <S.Titlename>{target[1].info.name}</S.Titlename>
            {/* 평점  */}
            <S.Rating>
              <S.Star src="/img/star.png" alt="thumbs-up" />
              <S.RatingPoint> {target[1].info.rating} </S.RatingPoint>
            </S.Rating>
          </S.TitleBox>
          {/* 리뷰  */}
          <S.EmotionGroup>
            {target[1].review !== undefined &&
              Object.entries(target[1].review).map((reivewKey, review) => {
                return (
                  <S.EmotionBox key={review}>
                    <S.Thumbsup src="/img/thumbs-up.png" alt="thumbs-up" />
                    <S.ReviewName> {reivewKey[1].name} </S.ReviewName>
                    <S.ReviewNumber>{reivewKey[1].count} </S.ReviewNumber>
                  </S.EmotionBox>
                );
              })}
          </S.EmotionGroup>
        </S.ResTitle>
      </S.ResTitleContainer>
      <S.Tab>
        {TabMenu.map((item, idx) => {
          return (
            <S.IndexButton
              key={item}
              active={idx === selected}
              onClick={() => setSelected(idx)}
            >
              {item}
            </S.IndexButton>
          );
        })}
      </S.Tab>
      {ComponentToRender}
    </S.ResDetailWrapper>
  );
};

export default ResDetail;
