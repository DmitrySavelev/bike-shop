import { Theme } from "@/types";
import styled from "styled-components";

export const ThemeToggle = styled.button<{ $themeType: Theme }>`
  ${({ $themeType: themeType }) =>
    themeType === "light"
      ? `
          background-color: #c2eced;
          color: #262621;
        `
      : `
          background-color: #252528;
          color: #c6e31e;
        `};
  padding: 4px;
  border-radius: 7px;
  font-weight: bolder;
`;

export const StyledSpan = styled.span`
  margin-right: 10px;
`;
