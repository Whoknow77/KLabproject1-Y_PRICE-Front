import {
  CategoryWrapper,
  CategoryTitle,
  CategoryGroup,
  CategoryBox,
  CategoryName,
} from "../styles/CetegoryStyledComponents";
import { category } from "../region";
import { useNavigate } from "react-router-dom";

function Category({ input, id }) {
  const navigate = useNavigate();

  return (
    <CategoryWrapper input={input}>
      <CategoryTitle>Categories</CategoryTitle>
      <CategoryGroup>
        {category.map((food, index) => {
          return (
            // 페이지 클릭 시 음식 정보 보여주기
            <CategoryBox
              key={index}
              onClick={() => {
                navigate(`/map/${id}/food/${index}`);
              }}
            >
              <img src={`/img/category${index + 1}.png`} alt="" />
              <CategoryName>
                <span className="categorytitle">{food.enname}</span>
                <span className="categoryexplain">{food.explain}</span>
              </CategoryName>
            </CategoryBox>
          );
        })}
      </CategoryGroup>
    </CategoryWrapper>
  );
}

export default Category;
