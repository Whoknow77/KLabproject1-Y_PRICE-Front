import styled from "styled-components";
// Info
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  span {
    font-weight: 400;
    font-size: 13px;
    line-height: 17px;
    display: flex;
    align-items: center;
    color: #515151;
  }
  margin-bottom: 23px;
`;
export const Location = styled.div`
  display: flex;
  gap: 10px;
`;
export const Clock = styled.div`
  img {
    width: 20px;
    height: 20px;
  }
  display: flex;
  gap: 10px;
  div {
    display: flex;
    flex-direction: column;
  }
  span {
    font-weight: 400;
    font-size: 13px;
    line-height: 17px;
  }
`;
