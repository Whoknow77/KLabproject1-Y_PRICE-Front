import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Wrapper,
  MapContainer,
  Select,
  Header,
  Search,
} from "./MapStyledComponents";
import Foodmap from "./Foodmap";

function Map() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  return (
    <Wrapper>
      <MapContainer>
        <Header>
          <Select>
            <span className="city">Seoul</span>
            <span className="area">Gyeongbokgung</span>
          </Select>
          <Search>
            <img src="/img/searchbutton.png" alt="search" />
            <input
              type="text"
              className="searchinput"
              placeholder="Search food or restaurant"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <img src="/img/xbutton.png" alt="x" />
          </Search>
        </Header>
        <Foodmap />
      </MapContainer>
    </Wrapper>
  );
}

export default Map;
