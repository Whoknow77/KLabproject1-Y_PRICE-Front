import styled from "styled-components";

export const ModalWrapper = styled.div`
  width: 286px;
  height: 150px;
  padding: 36px 33px 30px 33px;
  background: #ffffff;
  box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.1);
  border-radius: 15px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 8px;
  img {
    position: absolute;
    width: 24px;
    height: 24px;
    top: 12px;
    right: 12px;
  }
`;

export const Warn = styled.span`
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
`;

export const Description = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #818181;
`;
