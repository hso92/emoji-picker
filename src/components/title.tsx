import React from "react";
import styled from "styled-components";
//===============================
// @Component
//===============================
const View: React.FC = (props: any) => (
  <h1 className={props.className}>
    EMOJI PICKER <span role="img" aria-label="人差し指">👈</span>
  </h1>
);

//===============================
// @Styled
//===============================
export default styled(View)`
  font-size: 2rem;
  letter-spacing: 0.1em;
  font-weight: 700;
  text-align: center;
  margin-bottom: .25em;
  color: ${props => props.theme.colors.blue8};
`;
