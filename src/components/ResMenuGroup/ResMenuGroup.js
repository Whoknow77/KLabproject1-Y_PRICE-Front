import { useNavigate } from "react-router-dom";
import * as S from "./ResMenuGroupStyledComponets";
import { Modal } from "../index";

const ResMenuGroup = ({
  selected,
  target,
  id,
  foodtarget2,
  averageprice,
  showModal,
  setShowmodal,
}) => {
  const navigate = useNavigate();

  return (
    <S.ResMenuWrapper selected={selected}>
      {showModal && (
        <Modal
          onClose={() => setShowmodal(false)}
          setShowmodal={setShowmodal}
        />
      )}
      {target[1].menu &&
        Object.entries(target[1].menu).map(([key, value], index) => {
          const foodregex = /(tteokbokki|pork|bulgogi|bibimbap)/gi;
          let priceflag = foodregex.test(value.name.toLowerCase());
          return (
            <S.Menu key={index}>
              <S.MenuTotalContainer>
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
                    if (priceflag) {
                      navigate(`/map/${id}/food/${foodtarget2}`);
                    } else {
                      setShowmodal(true);
                    }
                  }}
                >
                  <S.AverageItem>
                    <span>Average Price</span>
                    <S.MenuAveragePrice>
                      {priceflag
                        ? averageprice.toLocaleString("en") + "₩"
                        : "---"}
                    </S.MenuAveragePrice>
                  </S.AverageItem>
                  <img src="/img/right.png" alt="right" />
                </S.MenuAverageContainer>
              </S.MenuTotalContainer>
            </S.Menu>
          );
        })}
    </S.ResMenuWrapper>
  );
};
export default ResMenuGroup;
