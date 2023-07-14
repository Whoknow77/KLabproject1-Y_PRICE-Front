import React from "react";
import * as S from "./LoadingStyledComponents";

function Loading() {
  return (
    <S.LoadingWrapper>
      <div className="ErrorLogo">
        <img src="/img/errorlogo.png" alt="에러로고" />
      </div>
      <S.LoadingTitle>Looking for Prices</S.LoadingTitle>
      <S.LoadingExplain>
        <S.Dot color="#fff1c5" animation="bounce1" />
        <S.Dot color="#ffc300" animation="bounce2" />
        <S.Dot color="#818181" animation="bounce3" />
      </S.LoadingExplain>
    </S.LoadingWrapper>
  );
}

export default Loading;
