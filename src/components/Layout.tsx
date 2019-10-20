import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";
import theme from "../styles/theme";

const layout: React.FC = props => {
  return (
    <ThemeProvider theme={theme}>
      <>
        {props.children}
        <GlobalStyle />
      </>
    </ThemeProvider>
  );
};

export default layout;
