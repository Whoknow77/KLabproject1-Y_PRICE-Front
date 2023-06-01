import styled from "styled-components";

export const MapWrapper = styled.div`
  display: ${({ input }) => (input ? "none" : "block")};
`;

// 하단 토글 컴포넌트
export const Respreivew = styled.div`
  background: white;
  height: 390px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  gap: 10px;
  width: 100%;
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
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  width: 92%;

  div {
    height: 70px;
    padding: 13.5px 15px;
  }
  img {
    width: 70px;
    height: 70px;
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
