import * as S from "./CategoryStyledComponents";
import { useNavigate } from "react-router-dom";
import { category } from "../../utils/region";
function Category({ input, id }) {
  const navigate = useNavigate();

  return (
    <S.CategoryWrapper input={input}>
      <S.CategoryTitle>Categories</S.CategoryTitle>
      <S.CategoryGroup>
        {category.map((food, index) => {
          return (
            // 페이지 클릭 시 음식 정보 보여주기
            <S.CategoryBox
              key={index}
              onClick={() => {
                navigate(`/map/${id}/food/${index}`);
              }}
            >
              <img src={`/img/category${index + 1}.png`} alt="" />
              <S.CategoryName>
                <span className="categorytitle">{food.enname}</span>
                <span className="categoryexplain">{food.explain}</span>
              </S.CategoryName>
            </S.CategoryBox>
          );
        })}
      </S.CategoryGroup>
    </S.CategoryWrapper>
  );
}

export default Category;
