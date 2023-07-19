import { useNavigate } from "react-router-dom";
import * as S from "./ResMenuGroupStyledComponets";
import { Modal } from "../index";

const ResMenuGroup = ({
  menu,
  target,
  mapid,
  categoryid,
  averageprice,
  showModal,
  setShowmodal,
}) => {
  const navigate = useNavigate();
  return (
    <S.ResMenuWrapper>
      {showModal && (
        <Modal
          onClose={() => setShowmodal(false)}
          setShowmodal={setShowmodal}
        />
      )}

      {target[1].menu &&
        Object.entries(target[1].menu).map(([key, value], index) => {
          // 카테고리 메뉴 인지
          const foodregex = /(tteokbokki|pork|bulgogi|bibimbap)/gi;
          let isPrice = foodregex.test(value.name.toLowerCase());
          return (
            <S.Menu key={index}>
              <S.MenuInfoContainer>
                <S.MenuTitle>{value.name}</S.MenuTitle>
                <S.MenuPrice>
                  {Number(
                    value.price.split(": ")[1].replace(/,/g, "")
                  ).toLocaleString("en")}
                  ₩
                </S.MenuPrice>
              </S.MenuInfoContainer>
              <S.MenuAverageContainer
                onClick={() => {
                  if (isPrice) {
                    navigate(`/map/${mapid}/food/${categoryid}`);
                  } else {
                    setShowmodal(true);
                  }
                }}
              >
                <S.AverageItem>
                  <span>Average Price</span>
                  <S.MenuAveragePrice>
                    {isPrice ? averageprice.toLocaleString("en") + "₩" : "---"}
                  </S.MenuAveragePrice>
                </S.AverageItem>
                <S.RightButton img src="/img/right.png" alt="right" />
              </S.MenuAverageContainer>
            </S.Menu>
          );
        })}
    </S.ResMenuWrapper>
  );
};
export default ResMenuGroup;
