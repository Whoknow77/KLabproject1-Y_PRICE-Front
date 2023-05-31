import styled from "styled-components";

export const MapWrapper = styled.div`
  display: ${({ input }) => (input ? "none" : "block")};
`;

// 하단 토글 컴포넌트
export const Respreivew = styled.div`
  background: white;
  top: ${({ expand }) => (expand ? "400px" : "726px")};
  height: ${({ expand }) => (expand ? "500px" : "74px")};
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  gap: 10px;
  width: 100%;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 15px 15px 0px 0px;
`;

export const ButtonBox = styled.div`
  position: absolute;
  width: 100%;
  transition: all 0.3s ease-in-out;
  top: ${({ expand }) => (expand ? "404px" : "730px")};
`;

export const Button = styled.button`
  background: #ffc300;
  top: -20px;
  border: none;
  outline: none;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  width: 40px;
  height: 40px;
  position: absolute;
  z-index: 3;
  left: 47%;
  transform: ${({ expand }) => (expand ? "rotate(0deg)" : "rotate(180deg)")};
  border-radius: 20px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px auto 5px auto;
  height: 18px;
  font-weight: 600;
  font-size: 20px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Restuarant = styled.div`
  cursor: pointer;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  height: 90px;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  width: 93%;
  div {
    padding: 13.5px 5px;
  }
`;

export const Price = styled.span`
  line-height: 20px;
  font-weight: 700;
  font-size: 20px;
`;

export const ResName = styled.span`
  line-height: 18px;
  font-weight: 500;
  font-size: 15px;
`;
