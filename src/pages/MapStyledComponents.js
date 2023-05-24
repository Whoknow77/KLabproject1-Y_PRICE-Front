import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 600px;
  min-width: 360px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
`;
export const MapContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Food = styled.div`
  display: none;
`;
export const Menu = styled.div``;
export const Info = styled.div``;
export const Location = styled.div``;
export const Clock = styled.div``;

// 기본이랑 겹침
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
