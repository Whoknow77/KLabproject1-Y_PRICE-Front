import React from "react";
import {
  LoadingWrapper,
  LoadingTitle,
  LoadingExplain,
  Dot,
} from "./LoadingStyledComponents";

function Loading() {
  return (
    <LoadingWrapper>
      <div className="ErrorLogo">
        <img src="/img/errorlogo.png" alt="에러로고" />
      </div>
      <LoadingTitle>Looking for Prices</LoadingTitle>
      <LoadingExplain>
        <Dot color="#fff1c5" animation="bounce1" />
        <Dot color="#ffc300" animation="bounce2" />
        <Dot color="#818181" animation="bounce3" />
      </LoadingExplain>
    </LoadingWrapper>
  );
}

export default Loading;
