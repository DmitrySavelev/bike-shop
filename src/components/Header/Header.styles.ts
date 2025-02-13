import { Theme, ThemeType } from "@/types";
import styled from "styled-components";

export const StyledHeader = styled.div<{ $themeType: Theme }>`
  height: 50px;
  background-color: #c2eced;
  display: grid;
  grid-template-columns: 70px 150px 1fr 50px;
  padding-right: 30px;
  align-items: center;
  ${({ $themeType: themeType }) =>
    themeType === ThemeType.Dark && "background-color: #a2a78d;"};
`;

export const StyledLogo = styled.img`
  margin-left: 10px;
  width: 30px;
  cursor: pointer;
`;

export const StyledSpan = styled.span`
  font-weight: 700;
`;

export const StyledCartIcon = styled.img`
  height: 27px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const StyledThemeToggle = styled.button<{ $themeType: Theme }>`
  background-color: #c2eced;
  color: #262621;
  padding: 4px;
  border-radius: 7px;
  font-weight: bolder;
  cursor: pointer;
  width: 100px;
  height: 30px;
  ${({ $themeType: themeType }) =>
    themeType === ThemeType.Dark && "background-color: #252528; color: #c6e31e;"};
`;
