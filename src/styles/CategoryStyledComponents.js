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
  justify-content: space-between;
  gap: 10px;
  img {
    padding: 5px;
  }
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
  width: 155px;
  height: 236px;
  border-radius: 10px;
  img {
    padding: 0;
    width: 130px;
    height: 130px;
  }
`;

export const CategoryName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1px;
  gap: 5px;
  display: flex;
  align-items: center;
  text-align: center;
  .categorytitle {
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
  }
  .categoryexplain {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #818181;
  }
`;
