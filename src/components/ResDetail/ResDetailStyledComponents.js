import styled from "styled-components";

export const ResDetailWrapper = styled.div`
  display: flex;
  width: 94%;
  flex-direction: column;
  margin: 0 auto;
`;

export const ResTitleContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 16px;
  margin-bottom: 17px;
  .Restitleimg {
    width: 90px;
    height: 90px;
    border: 0.5px solid #d9d9d9;
    border-radius: 5px;
  }
`;

export const ResTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Titlename = styled.span`
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;
`;

export const Rating = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  display: flex;
  gap: 5px;
  align-items: center;
  color: #ffc300;
  img {
    width: 16px;
    height: 18px;
  }
`;

export const EmotionGroup = styled.div`
  display: flex;
  gap: 7px;
  flex-wrap: wrap;
`;
export const EmotionBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 7px;
  height: 19px;
  background: #ff6c4b;
  border-radius: 10px;
  font-weight: 500;
  font-size: 11px;
  line-height: 11px;
`;

export const Index = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 130px;
  gap: 40px;
  width: 100%;
  height: 48px;
  background: rgba(255, 255, 255, 0.5);
  border-top: 0.5px solid #d9d9d9;
  backdrop-filter: blur(15px);
`;

export const IndexButton = styled.button`
  &:focus {
    outline: none;
  }
  font-weight: ${({ active }) => (active ? "700" : "500")};
  border-bottom: ${({ active }) => (active ? "2px solid #515151" : "")};
  font-size: 15px;
  line-height: 18px;
`;
