import styled from "styled-components";

export const StyledArticle = styled.h1`
  margin: 30px auto 0;
`;

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  margin: 40px auto 0;
  padding: 20px;
  border: 1px solid;
`;

export const StyledPersonalInfo = styled.div`
  margin-bottom: 30px;
  align-self: center;
  label {
    display: block;
  }
`;

export const StyledButton = styled.button`
  margin-top: 30px;
  width: 40%;
  height: 35px;
  display: inline-block;
  align-self: center;
  &:hover {
    background-color: #c2eced;
  }
  cursor: pointer;
`;

export const StyledAllOptions = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledDeliveryOptions = styled.div`
  > *:first-child {
    font-weight: 700;
    margin-bottom: 20px;
    display: block;
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  gap: 10px;
  cursor: pointer;
`;

export const StyledBack = styled.button`
  position: fixed;
  right: 150px;
  top: 15px;
  opacity: 0.3;
  border-radius: 15px;
  z-index: 99999;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

export const StyledBackImage = styled.img`
  width: 50px;
  height: 50px;
`;
