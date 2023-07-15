import { useNavigate, useLocation } from "react-router-dom";
import * as S from "./HeaderStyledComponents";

import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";
import { useEffect, useState } from "react";
import { firebaseConfig } from "../../apis/index";
import { region } from "../../utils/region";

initializeApp(firebaseConfig);

function Header({ input, setInput, setSearch, id }) {
  const navigate = useNavigate();
  const location = useLocation();
  // 음식과 음식점 정보를 보여줄때는 헤더의 뒤로가기 버튼을 생성
  const foodflag = !location.pathname.includes("food");
  const resflag = !location.pathname.includes("res");
  const errorflag = !location.pathname.includes("error");
  const [toggleflag, setToggleFlag] = useState(0);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 데이터베이스 가져오기
        const db = getDatabase();
        const snapshot = await get(ref(db, "/restaurants"));

        if (snapshot.exists()) {
          const data = snapshot.val(); // 데이터 가져오기
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
    <S.HeaderWrapper input={input}>
      {/* 지역 선택 토글 */}
      <S.Select
        onClick={() => {
          setToggleFlag(!toggleflag);
        }}
      >
        <span className="city">{region[Number(id)].city}</span>
        <span className="area">{region[Number(id)].area}</span>
        <img src="/img/down.png" alt="down" />
        <S.RegionToggle toggleflag={toggleflag}>
          {region.map((item, index) => {
            return (
              <S.ToggleRegion
                onClick={() => {
                  navigate(`/map/${index}`);
                }}
              >
                {item.area}
              </S.ToggleRegion>
            );
          })}
        </S.RegionToggle>
      </S.Select>
      <S.Search>
        {foodflag && resflag && errorflag ? (
          <img
            src={"/img/searchbutton.png"}
            alt=""
            onClick={() => {
              setSearch("");
              setInput("");
            }}
          />
        ) : (
          <img
            src={"/img/leftbutton.png"}
            alt=""
            onClick={() => {
              setSearch("");
              setInput("");
              // 뒤로가기
              navigate(-1);
            }}
          />
        )}
        <input
          type="text"
          className="searchinput"
          value={input}
          placeholder="Search food or restaurant"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              setSearch(e.target.value);
              if (input.toLowerCase() === "tteokbokki") {
                navigate(`/map/${id}/food/0`);
              } else if (input.toLowerCase() === "bulgogi") {
                navigate(`/map/${id}/food/1`);
              } else if (input.toLowerCase() === "samgyeopsal") {
                navigate(`/map/${id}/food/2`);
              } else if (input.toLowerCase() === "bibimbab") {
                navigate(`/map/${id}/food/3`);
              } else {
                const target = Object.entries(userData).filter(
                  ([resKey, res], index) => {
                    return res.info.name === input;
                  }
                );
                if (target.length > 0) {
                  const resId = target[0][0].slice(-5, target[0][0].length);
                  navigate(`/map/${id}/res/${resId}`);
                } else {
                  setInput("");
                  navigate(`/map/${id}/searcherror`);
                }
              }
            }
          }}
        />
        <img
          src="/img/xbutton.png"
          alt="x"
          onClick={() => {
            setInput("");
          }}
        />
      </S.Search>
    </S.HeaderWrapper>
  );
}

export default Header;
