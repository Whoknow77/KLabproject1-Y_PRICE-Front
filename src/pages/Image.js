import React from "react";
import styled from "styled-components";

export default function Image({ img }) {
  return (
    <div>
      <IMG src={img} />
    </div>
  );
}

const IMG = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: cover;

  width: 100%;
  height: 800px;
`;
