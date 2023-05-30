import React from "react";
import styled from "styled-components";

const Background = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.img});
  background-size: cover;
  height: 800px;
`;

export default function Image({ img }) {
  return <Background img={img} />;
}
