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
  // 메인에서만 검색 버튼 나오게 함
  const searchbuttonflag = location.pathname.slice(-5, 4) === "map";
  const [toggleflag, setToggleFlag] = useState(0);
  const [userData, setUserData] = useState([]);
  // db 접근은 컴포넌트 마운트 최초 1회에만 해당하니 useEffect사용
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
        <S.City>{region[Number(id)].city}</S.City>
        <S.Area>{region[Number(id)].area}</S.Area>
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
        {searchbuttonflag ? (
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
        <S.SearchInput
          type="text"
          value={input}
          placeholder="Search food or restaurant"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              setSearch(e.target.value);
              // 카테고리 검색
              if (input.toLowerCase() === "tteokbokki") {
                navigate(`/map/${id}/food/0`);
              } else if (input.toLowerCase() === "bulgogi") {
                navigate(`/map/${id}/food/1`);
              } else if (input.toLowerCase() === "samgyeopsal") {
                navigate(`/map/${id}/food/2`);
              } else if (input.toLowerCase() === "bibimbab") {
                navigate(`/map/${id}/food/3`);
              }
              // 음식점 검색
              else {
                const target = Object.entries(userData).filter(
                  ([resKey, res], index) => {
                    return res.info.name === input;
                  }
                );
                // 검색어랑 맞지 않게 검색한 경우
                if (target.length > 0) {
                  const resId = target[0][0].slice(-5, target[0][0].length);
                  navigate(`/map/${id}/res/${resId}`);
                }
                // 아무것도 입력하지 않고 엔터를 친 경우
                else {
                  setInput("");
                  navigate(`/map/${id}/searcherror`);
                }
              }
            }
          }}
        ></S.SearchInput>

        <S.Xbutton>
          {
            <img
              src="/img/xbutton.png"
              alt="x"
              onClick={() => {
                setInput("");
              }}
            />
          }
        </S.Xbutton>
      </S.Search>
    </S.HeaderWrapper>
  );
}

export default Header;
