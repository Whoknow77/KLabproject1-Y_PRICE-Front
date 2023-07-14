import styled from "styled-components";

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 119px;
  .ErrorLogo {
    margin: 0 auto;
    width: 72px;
    height: 82px;
    padding: 0 22px 22px 24px;
  }
  img {
    margin: 0 auto;
    display: flex;
    align-self: center;
    width: 27px;
    height: 56px;
  }
`;

export const ErrorTitle = styled.span`
  font-weight: 600;
  font-size: 24px;
  line-height: 20px;
  text-align: center;
`;

export const ErrorExplain = styled.div`
  margin-top: 14px;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
`;

export const GotoCategoryButton = styled.button`
  margin: 0 auto;
  background: #ffc300;
  width: 149px;
  height: 49px;
  &:focus {
    outline: none;
  }
  border-radius: 20px;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  margin-top: 34px;
`;
