import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 auto;
`;

export const Select = styled.div`
  display: flex;
  align-items: center;
  margin: 10px auto;
  cursor: pointer;

  .city {
    margin-right: 6px;
    font-weight: 300;
    font-size: 12px;
    color: #818181;
  }

  .area {
    font-weight: 500;
    font-size: 15px;
    color: #515151;
  }
`;

export const Search = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto 10px auto;
  padding: 8px 15px;
  gap: 8px;
  width: 100%;
  height: 40px;
  background: #ffffff;
  border: 1.5px solid #ffc300;
  border-radius: 27px;

  .searchinput {
    width: 90%;
    height: 24px;
    font-weight: 500;
    font-size: 18px;
    display: flex;
    align-items: center;
    color: #ffc300;
    border: none;
    outline: none;
    spellcheck="false";
}
img{
  cursor:pointer;
}
`;
