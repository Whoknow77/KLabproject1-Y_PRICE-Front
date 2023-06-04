import React, { useEffect, useState } from "react";

import {
  Respreivew,
  Title,
  Card,
  Restuarant,
  ResName,
  Price,
} from "./DefaultMapStyledComponents";
import Category from "./Category";
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

function DefaultMap({ input, search, id }) {
  const [userData, setUserData] = useState([]);

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
    // 부산
    case "3":
      regex = /4[5-9]|5[0-9]/;
      break;

    // 제주
    case "4":
      regex = /6[0-9]|7[0-4]/;
      break;
    // 홍대
    case "5":
      break;
    default:
      regex = /7[5-9]|8[0-9]/;
  }

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
            const foodFlag = resKey.match(regex);

            return (
              foodFlag && (
                <Restuarant key={index}>
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
                      Rating <span>{res.info.rating}</span>
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
