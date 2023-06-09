import styled from "styled-components";
// Photo
export const PhotoGroup = styled.div`
  margin-top: 15px;
  width: 90%;
  justify-content: space-evenly;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  img {
    object-fit: contain;
    width: 140px;
    height: 100%;
    border-radius: 10px;
    image-rendering: pixelated;
  }
`;
