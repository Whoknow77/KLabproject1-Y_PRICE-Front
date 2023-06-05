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

function ResMenuGroup({ selected, target, id, foodtarget2, averageprice }) {
  const navigate = useNavigate();
  return (
    <ResMenuWrapper selected={selected}>
      {target[0][1].menu &&
        Object.entries(target[0][1].menu).map(([key, value], index) => {
          const foodregex = /(tteokbokki|pork)/gi;
          let priceflag = foodregex.test(value.name.toLowerCase());
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
                    navigate(`/map/${id}/food/${foodtarget2}`);
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
