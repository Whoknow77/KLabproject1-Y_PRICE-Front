import { useNavigate } from "react-router-dom";
import {
  ErrorExplain,
  ErrorTitle,
  ErrorWrapper,
  GotoCategoryButton,
} from "./ErrorStyledComoponents";

function Error({ input, id }) {
  const navigate = useNavigate();
  return (
    <ErrorWrapper>
      <div className="ErrorLogo">
        <img src="/img/errorlogo.png" alt="에러로고" />
      </div>
      <ErrorTitle>No Results</ErrorTitle>
      <ErrorExplain>
        Try a different search or browse
        <br />
        Korean food categories YPrice
        <br />
        offers in your area
      </ErrorExplain>
      <GotoCategoryButton
        onClick={() => {
          navigate(`/map/${id}/`);
        }}
      >
        Check Category
      </GotoCategoryButton>
    </ErrorWrapper>
  );
}

export default Error;
