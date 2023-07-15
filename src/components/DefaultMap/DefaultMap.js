import React, { useEffect, useState } from "react";
import * as S from "./DefaultMapStyledComponents";
import regionexp from "../../utils/regionexp";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";
import { firebaseConfig } from "../../apis/index";
import { Category } from "./../index";

initializeApp(firebaseConfig);

function DefaultMap({ input, id }) {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  const regex = regionexp(id); // map 구별

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
      <Category input={input} id={id} />

      {/* 음식점 추천  */}
      <S.Respreivew>
        <S.Title>Looking for this restaurant?</S.Title>
        <S.Card>
          {/* 음식점 정보 */}
          {Object.entries(userData).map(([resKey, res], index) => {
            // 이미지 없을때 검사
            const Imgurl = res.info.main_img;
            const ImgFlag = res.info.main_img.includes("None");
            // 지역별로 음식점 거르기
            const foodFlag = resKey.match(regex);
            const resId = resKey.slice(-5, resKey.length);

            return (
              foodFlag && (
                <S.Restuarant
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
                    <S.ResName>{res.info.name}</S.ResName>
                    <br />
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
        </S.Card>
      </S.Respreivew>
    </>
  );
}

export default DefaultMap;
