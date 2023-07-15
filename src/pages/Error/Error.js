import { useNavigate } from "react-router-dom";
import * as S from "./ErrorStyledComponents";

function Error({ input, id }) {
  const navigate = useNavigate();
  return (
    <S.ErrorWrapper>
      <div className="ErrorLogo">
        <img src="/img/errorlogo.png" alt="에러로고" />
      </div>
      <S.ErrorTitle>No Results</S.ErrorTitle>
      <S.ErrorExplain>
        Try a different search or browse
        <br />
        Korean food categories YPrice
        <br />
        offers in your area
      </S.ErrorExplain>
      <S.GotoCategoryButton
        onClick={() => {
          navigate(`/map/${id}/`);
        }}
      >
        Check Category
      </S.GotoCategoryButton>
    </S.ErrorWrapper>
  );
}

export default Error;
