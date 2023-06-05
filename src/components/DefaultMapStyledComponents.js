import styled from "styled-components";

// 음식점 추천
export const Respreivew = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 45px auto 5px auto;
  height: 18px;
  font-weight: 600;
  font-size: 20px;
`;

export const Card = styled.div`
  height: 400px;
  flex-direction: column;
  overflow: scroll;
  gap: 10px;
  align-items: center;
  margin-bottom: 69px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Restuarant = styled.div`
  cursor: pointer;
  margin: 0 auto;
  margin-top: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  width: 92%;

  div {
    height: 70px;
    padding: 13.5px 15px;
    line-height: 5px;
  }
  img {
    width: 70px;
    height: 70px;
  }
`;

export const ResName = styled.span`
  line-height: 18px;
  font-weight: 600;
  font-size: 15px;
`;

export const Price = styled.span`
  line-height: 20px;
  font-weight: 300;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 5px;
  img {
    width: 16px;
    height: 18px;
  }
  span {
    color: #ffc300;
  }
`;
