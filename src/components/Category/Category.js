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
            <S.CategoryBox
              key={index}
              onClick={() => {
                navigate(`/map/${id}/food/${index}`);
              }}
            >
              <img src={`/img/category${index + 1}.png`} alt="" />
              <S.CategoryName>{food.enname}</S.CategoryName>
              <S.CategoryExplain>{food.explain}</S.CategoryExplain>
            </S.CategoryBox>
          );
        })}
      </S.CategoryGroup>
    </S.CategoryWrapper>
  );
}

export default Category;
