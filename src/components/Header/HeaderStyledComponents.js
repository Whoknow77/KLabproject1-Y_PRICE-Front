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
  position: relative;
`;

export const City = styled.span`
  margin-right: 6px;
  font-weight: 300;
  font-size: 12px;
  color: #818181;
`;

export const Area = styled.span`
  font-weight: 500;
  font-size: 15px;
  color: #515151;
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
  img {
    cursor: pointer;
  }
`;

export const SearchInput = styled.input`
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
`;

export const Xbutton = styled.button`
  &:focus {
    border: none;
    outline: none;
  }
`;

export const RegionToggle = styled.div`
  display: flex;
  transform-origin: top;
  transform: scaleY(
    ${({ toggleflag }) => (toggleflag ? "1" : "0")}
  );
  transition: transform 0.3s ease-in-out;
  flex-direction: column;
  position: absolute;
  top: 25px;
  width:90%;
  gap: 3px;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(15px);
  border-radius: 5px;
  z-index:5;
}
`;

export const ToggleRegion = styled.button`
  padding: 5px;
  font-size: 12px;
  &:focus {
    border: none;
    outline: none;
  }
`;
