import React from "react";
import { SelectContainer, Wrapper } from "./SelectStyledComponents";

function Select() {
  return (
    <Wrapper>
      <SelectContainer>
        <img src="img/gung.png" alt="gung" />
        <div className="logo">
          <img src="img/selectLogo.png" alt="selectLogo" />
        </div>
        <div className="title">
          <span>Choose the place</span>
          <span>you want to visit</span>
        </div>
        <div className="selectBox" />
      </SelectContainer>
    </Wrapper>
  );
}

export default Select;
