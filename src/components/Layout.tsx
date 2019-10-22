import React from "react";
import styled , { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";
import theme from "../styles/theme";

//===============================
// @Component
//===============================
const Wrapper = styled.div`
  max-width: ${props => props.theme.sizes.maxWidth};
  position: relative;
  margin: 0 auto;
  padding: 5em ${props => props.theme.sideSpace.large};
  @media screen and (max-width: ${props => props.theme.responsive.large}) {
    max-width: 760px;
  }
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    padding: 0 ${props => props.theme.sideSpace.small};
  }
`;

const layout: React.FC = props => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        {props.children}
        <GlobalStyle />
      </Wrapper>
    </ThemeProvider>
  );
};

export default layout;
