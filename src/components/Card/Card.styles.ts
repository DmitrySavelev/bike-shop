import styled from "styled-components";

export const StyledCard = styled.div`
  width: 30%;
  margin: 20px auto 0;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;
export const StyledName = styled.p`
  font-size: 27px;
  font-weight: 500;
  text-align: center;
`;

export const StyledDescription = styled.p`
  margin: 20px 0;
`;

export const StyledImage = styled.img`
  width: 200px;
`;

export const StyledPrice = styled.p`
  margin-top: 40px;
  padding: 0 10px;
  cursor: pointer;
`;