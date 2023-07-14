import Foodmap from "../Foodmap/Foodmap";
import * as S from "./ResInfoStyledComponents";

function RseInfo({ selected, target }) {
  return (
    <S.Info selected={selected}>
      {<Foodmap searchPlace={target[0][1].info.name} />}
      <S.Location>
        <img src="/img/map_pin.png" alt="map_pin" />
        <span>{target[0][1].info.location}</span>
      </S.Location>
      <S.Clock>
        <img src="/img/clock_pin.png" alt="clock_pin" />
        <span>{target[0][1].info.working_hour}</span>
      </S.Clock>
    </S.Info>
  );
}

export default RseInfo;
