import React from "react";
import styled from "styled-components";

//===============================
// @Component
//===============================
const View: React.FC = (props: any) => {
  const {currentEmoji} = props

  console.log(document.cookie);
  return (
  <div className={props.className}>
    {currentEmoji}
  </div>
);
}

//===============================
// @Styled
//===============================
export default styled(View)`
  font-size: 2rem;
  letter-spacing: 0.1em;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.25em;
  color: ${props => props.theme.colors.blue8};
`;
