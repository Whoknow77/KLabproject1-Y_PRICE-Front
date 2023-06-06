import Foodmap from "./Foodmap";
import { Clock, Info, Location } from "./ResInfoStyledComponents";

function RseInfo({ selected, target }) {
  return (
    <Info selected={selected}>
      {<Foodmap searchPlace={target[0][1].info.name} />}
      <Location>
        <img src="/img/map_pin.png" alt="map_pin" />
        <span>{target[0][1].info.location}</span>
      </Location>
      <Clock>
        <img src="/img/clock_pin.png" alt="clock_pin" />
        <span>{target[0][1].info.working_hour}</span>
      </Clock>
    </Info>
  );
}

export default RseInfo;
