import styled from "styled-components";

export const CategoryWrapper = styled.div`
  display: ${({ input, foodsearch, ressearch }) =>
    input && !foodsearch && !ressearch ? "block" : "none"};
  width: 90%;
  margin: 30px auto;
`;

export const CategoryTitle = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 18px;
  text-align: center;
  margin-bottom: 20px;
`;

export const CategoryGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
  img {
    padding: 5px;
  }
`;

export const CategoryBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  width: 155px;
  height: 144px;
  gap: 1px;
  background: #fff1c5;
  border-radius: 10px;
  img {
    padding: 0;
    width: 95px;
    height: 95px;
  }
`;

export const CategoryName = styled.button`
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  display: flex;
  align-items: center;
  gap: 5px;
  img {
    width: 24px;
    height: 24px;
  }
`;
