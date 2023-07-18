import React, { useEffect, useState } from "react";
import * as S from "./DefaultMapStyledComponents";
import regionexp from "../../utils/regionexp";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";
import { firebaseConfig } from "../../apis/index";
import { Category } from "./../index";

initializeApp(firebaseConfig);

function DefaultMap() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  const mapid = window.location.pathname.slice(-2, -1);
  const regex = regionexp(mapid); // map 구별

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getDatabase();
        const snapshot = await get(ref(db, "/restaurants"));

        if (snapshot.exists()) {
          const data = snapshot.val();
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
    <>
      {/* 카테고리 추천 */}
      <Category />

      {/* 음식점 추천  */}
      <S.Respreivew>
        <S.Title>Looking for this restaurant?</S.Title>
        <S.Card>
          {/* 음식점 정보 */}
          {Object.entries(userData).map(([resKey, res], index) => {
            // 음식점 이미지 여부 검사
            const Imgurl = res.info.main_img;
            const Hasnotimg = res.info.main_img.includes("None");
            // 메뉴 있는 가게만
            const HasMenu = res.menu;

            // 지역별로 음식점 거르기
            const HasCategory = resKey.match(regex);
            const resId = resKey.slice(-5, resKey.length);
            let Rating = res.info.rating;
            if (res.info.rating === "0.0") {
              Rating = "Not privided";
            }

            return (
              HasCategory &&
              HasMenu && (
                <S.ResPreivew
                  key={index}
                  onClick={() => {
                    navigate(`${window.location.pathname}/res/${resId}`);
                  }}
                >
                  {Hasnotimg ? (
                    <S.ResImg src={"/img/default/png"} alt="" />
                  ) : (
                    <S.ResImg src={`${Imgurl}`} alt="" />
                  )}
                  <S.ResInfo>
                    <S.ResName>{res.info.name}</S.ResName>
                    <S.ResRatingBox>
                      <S.RatingImg src="/img/star.png" alt="별점 이미지" />
                      <S.Ratingpoint>{Rating}</S.Ratingpoint>
                    </S.ResRatingBox>
                  </S.ResInfo>
                </S.ResPreivew>
              )
            );
          })}
        </S.Card>
      </S.Respreivew>
    </>
  );
}

export default DefaultMap;
