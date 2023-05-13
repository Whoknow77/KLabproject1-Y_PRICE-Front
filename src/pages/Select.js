import React, { useEffect, useState } from "react";
import {
  Logo,
  SelectBox,
  SelectItem,
  SelectContainer,
  Title,
  Wrapper,
  Back,
  BackAndLogo,
} from "./SelectStyledComponents";
import { region } from "../region";
import { useNavigate } from "react-router-dom";

function Select() {
  const navigate = useNavigate();
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
    }, 100);
    return () => {
      setFade("");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    <Wrapper>
      <SelectContainer select={select} index={index} fade={fade}>
        <BackAndLogo>
          <Back
            onClick={() => {
              navigate("/");
            }}
          >
            <img src="/img/back.png" alt="Back" />
          </Back>
          <Logo>
            <img src="/img/selectlogo.png" alt="selectlogo" />
          </Logo>
        </BackAndLogo>
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
