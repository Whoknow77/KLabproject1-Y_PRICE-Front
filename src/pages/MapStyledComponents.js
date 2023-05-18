import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 360px;
  max-height: 800px;
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
`;
export const MapContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  color: #fff;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const Select = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px auto;

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
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto 10px auto;
  padding: 8px 15px;
  gap: 8px;

  width: 320px;
  height: 40px;

  background: #ffffff;
  border: 1.5px solid #ffc300;
  border-radius: 27px;

  .searchinput {
    width: 226px;
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
`;
