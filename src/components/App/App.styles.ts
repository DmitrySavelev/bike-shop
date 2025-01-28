import { Theme } from "@/types";
import styled from "styled-components";

export const AppContainer = styled.div<{ $themeType: Theme }>`
  ${({ $themeType: themeType }) =>
    themeType === "light"
      ? `
          background-color: #eef1f2;
        `
      : `
          background-color: #161631;
          color: aliceblue;
        `};
  min-height: 100vh;
`;