import React, { useState } from "react";
import {
  Logo,
  SelectBox,
  SelectItem,
  SelectContainer,
  Title,
  Wrapper,
} from "./SelectStyledComponents";
import { region } from "../region";

function Select() {
  let [select, isSelected] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  return (
    <Wrapper>
      <SelectContainer>
        <Logo>
          <img src="/img/selectlogo.png" alt="selectlogo" />
        </Logo>
        <Title>
          <span>Choose the place</span>
          <br />
          <span>you want to visit</span>
          <SelectBox>
            {region.map((item, index) => {
              return (
                <SelectItem
                  select={select}
                  index={index}
                  key={index}
                  onClick={() => {
                    let copy = [false, false, false, false, false, false];
                    copy.splice(index, 1, true);
                    isSelected(copy);
                  }}
                >
                  {item.section}
                  <span>{item.zone}</span>
                </SelectItem>
              );
            })}
            ;
          </SelectBox>
        </Title>
      </SelectContainer>
    </Wrapper>
  );
}

export default Select;
