import { Theme, ThemeType } from "@/types";
import styled from "styled-components";

export const AppContainer = styled.div<{ $themeType: Theme }>`
  background-color: #eef1f2;
  min-height: 100vh;
  ${({ $themeType: themeType }) =>
    themeType === ThemeType.Dark && "background-color: #161631; color: aliceblue;"};
`;
