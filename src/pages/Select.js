import React, { useEffect, useState } from "react";
import {
  SelectBox,
  SelectContainer,
  Title,
  Wrapper,
  NextButton,
  BackButton,
  GoButton,
} from "./SelectStyledComponents";
import { region } from "../region";
import { useNavigate, useParams } from "react-router-dom";

function Select() {
  const navigate = useNavigate();
  const [fade, setFade] = useState(0);
  let { id } = useParams();

  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      setFade("");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Wrapper>
      <SelectContainer id={Number(id)} fade={fade}>
        <Title>
          <span>
            Choose the place
            <br />
            you want to visit
          </span>
        </Title>
        <SelectBox>
          <BackButton
            onClick={() => {
              if (Number(id) === 0) {
                navigate(`/select/${Number(id) + 5}`);
              } else {
                navigate(`/select/${Number(id) - 1}`);
              }
            }}
          />
          <div>
            <span className="city">{region[Number(id)].city}</span>
            <span className="area">{region[Number(id)].area}</span>
          </div>
          <NextButton
            onClick={() => {
              if (Number(id) === 5) {
                navigate(`/select/${Number(id) - 5}`);
              } else {
                navigate(`/select/${Number(id) + 1}`);
              }
            }}
          />
        </SelectBox>

        <GoButton
          onClick={() => {
            navigate(`/map/${Number(id)}`);
          }}
        >
          Go
        </GoButton>
      </SelectContainer>
    </Wrapper>
  );
}

export default Select;
