import React, { useEffect, useState } from "react";

import {
  Respreivew,
  Title,
  Card,
  Restuarant,
  ResName,
  Price,
} from "../styles/DefaultMapStyledComponents";
import Category from "./Category";
import regionexp from "../utils/regionexp";
import { useNavigate } from "react-router-dom";

import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";
import { firebaseConfig } from "../apis";

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
      <Respreivew>
        <Title>Looking for this restaurant?</Title>
        <Card>
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
        </Card>
      </Respreivew>
    </>
  );
}

export default DefaultMap;
