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
        <Dot color="#fff1c5" animation="bounce1" delay="0s" />
        <Dot color="#ffc300" animation="bounce2" delay="0.3s" />
        <Dot color="#818181" animation="bounce3" delay="0.6s" />
      </LoadingExplain>
    </LoadingWrapper>
  );
}

export default Loading;
