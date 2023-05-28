import styled from "styled-components";

export const MapWrapper = styled.div`
  display: ${({ input }) => (input ? "none" : "block")};
  position: relative;
`;

export const ResInfo = styled.div`
  background: white;
  top: ${({ expand }) => (expand ? "600px" : "726px")};
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
  height: ${({ expand }) => (expand ? "500px" : "74px")};
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
  top: ${({ expand }) => (expand ? "604px" : "730px")};
`;

export const Button = styled.button`
  top: -20px;
  background: #ffc300;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  width: 40px;
  height: 40px;
  position: absolute;
  z-index: 9999;
  left: 45%;
  transform: ${({ expand }) => (expand ? "rotate(0deg)" : "rotate(180deg)")};
  filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));
  border-radius: 20px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  height: 18px;
  font-weight: 600;
  font-size: 20px;
`;

export const Card = styled.div`
  margin-top: 5px;
  width: 100%;
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
    text-align: left;
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
