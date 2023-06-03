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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getDatabase();
        const snapshot = await get(ref(db, "/restaurants"));

        if (snapshot.exists()) {
          const data = snapshot.val();
          const dataArray = Object.values(data); // 배열 변환
          setUserData(dataArray);
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
          {userData.map((res, index) => {
            // 이미지 없을때 검사
            const Imgflag = res.info.main_img.includes("None");

            return (
              <Restuarant key={index}>
                {Imgflag ? (
                  <img src={"/img/default.png"} alt="" />
                ) : (
                  <img src={`${res.info.main_img}`} alt="" />
                )}
                <div>
                  <ResName>{res.info.name}</ResName>
                </div>
              </Restuarant>
            );
          })}
        </Card>
      </Respreivew>
    </>
  );
}

export default DefaultMap;
