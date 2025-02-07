import styled from "styled-components";
import { Theme } from "@/types";

export const StyledCard = styled.div`
  width: 30%;
  margin: 0 auto;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;
export const StyledRatingAndNew = styled.div`
  
`;
export const StyledName = styled.p`
  font-size: 27px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 20px;
`;

export const StyledDescription = styled.p`
  margin: 20px 0;
`;

export const StyledImage = styled.img`
  max-width: 90%;
  margin-bottom: 20px;
`;

export const StyledPriceAndCart = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const StyledPrice = styled.span`
  padding: 0 10px;
  cursor: pointer;
`;

export const StyledRating = styled.span``;

export const StyledCart = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
  &:hover{
    opacity: 0.3
  }
`;

export const StyledNew = styled.span<{ $themeType: Theme }>`
  background-color: yellow;
  margin-top: 10px;
  margin-left: 15px;
  padding: 5px;
  border-radius: 20px;
  ${({ $themeType: themeType }) =>
    themeType === "light"
      ? `
        `
      : `
      color: black;
        `};
  min-height: 100vh;
`;
