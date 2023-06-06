import { useNavigate } from "react-router-dom";
import {
  ResMenuWrapper,
  Menu,
  MenuTotalContainer,
  MenuInfoContainer,
  MenuTitle,
  MenuPrice,
  MenuAverageContainer,
  AverageItem,
  MenuAveragePrice,
} from "./ResMenuGroupStyledComponets";
import Modal from "./Modal";
import { useState } from "react";

function ResMenuGroup({ selected, target, id, foodtarget2, averageprice }) {
  const navigate = useNavigate();
  const [showModal, setShowmodal] = useState(false);

  return (
    <ResMenuWrapper selected={selected}>
      {showModal && (
        <Modal
          onClose={() => setShowmodal(false)}
          setShowmodal={setShowmodal}
        />
      )}
      {target[0][1].menu &&
        Object.entries(target[0][1].menu).map(([key, value], index) => {
          const foodregex = /(tteokbokki|pork|bulgogi|bibimbap)/gi;
          console.log(value.name);
          let priceflag = foodregex.test(value.name.toLowerCase());
          console.log(priceflag);
          return (
            <Menu key={index}>
              <MenuTotalContainer>
                <MenuInfoContainer>
                  <MenuTitle>{value.name}</MenuTitle>
                  <MenuPrice>
                    {Number(
                      value.price.split(": ")[1].replace(/,/g, "")
                    ).toLocaleString("en")}
                    ₩
                  </MenuPrice>
                </MenuInfoContainer>
                <MenuAverageContainer
                  onClick={() => {
                    if (priceflag) {
                      navigate(`/map/${id}/food/${foodtarget2}`);
                    } else {
                      setShowmodal(true);
                    }
                  }}
                >
                  <AverageItem>
                    <span>Average Price</span>
                    <MenuAveragePrice>
                      {priceflag
                        ? averageprice.toLocaleString("en") + "₩"
                        : "---"}
                    </MenuAveragePrice>
                  </AverageItem>
                  <img src="/img/right.png" alt="right" />
                </MenuAverageContainer>
              </MenuTotalContainer>
            </Menu>
          );
        })}
    </ResMenuWrapper>
  );
}
export default ResMenuGroup;
