import styled from "styled-components";

export const CategoryWrapper = styled.div`
  display: block;
  width: 90%;
  margin: 30px auto 0 auto;
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
  gap: 10px;
  justify-content: space-evenly;
`;

export const CategoryBox = styled.button`
  background: none;
  &:focus {
    outline: none;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #d9d9d9;
  padding: 12px;
  width: 200px;
  height: 240px;
  border-radius: 10px;
  gap: 5px;
  img {
    width: 130px;
    height: 130px;
  }
`;

export const CategoryName = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
`;

export const CategoryExplain = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #818181;
`;
