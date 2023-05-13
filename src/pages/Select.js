import React, { useEffect, useState } from "react";
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

  let [index, setIndex] = useState(0);
  let [fade, setFade] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 10);
    return () => {
      setFade("");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    <Wrapper>
      <SelectContainer select={select} index={index} fade={fade}>
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
                  fade={fade}
                  onClick={() => {
                    let copy = [false, false, false, false, false, false];
                    copy.splice(index, 1, true);
                    setIndex(index);
                    isSelected(copy);
                  }}
                >
                  {item.section}
                  <span>{item.zone}</span>
                </SelectItem>
              );
            })}
          </SelectBox>
        </Title>
      </SelectContainer>
    </Wrapper>
  );
}

export default Select;
