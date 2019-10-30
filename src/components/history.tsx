import React from "react";
import styled from "styled-components";
import { Store } from "../store";

//===============================
// @Component
//===============================
const View: React.FC = (props: any) => {
  const { state, storage } = React.useContext(Store);
  const { copyToClipboard, setCurrentEmoji, setStorage, setToggle } = props.children;
  const List = () => (
    <ul>
      {storage.map((item: any, index: string) => (
        <li key={index}>
          <button
            onClick={
              ()=> {
                copyToClipboard(item.emoji);
                setCurrentEmoji(item.emoji);
                setStorage(item.emoji);
                setToggle(true);
                setTimeout(() => setToggle(false), 2000);
              }
            }
          >
            {item.emoji}
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    <div className={props.className}>
      {storage.length > 0 ? <List /> : null}
    </div>
  );
};

//===============================
// @Styled
//===============================
export default styled(View)`
  font-size: 2rem;
  letter-spacing: 0.1em;
  position: fixed;
  right: 2.5em;
  top: 0;
  bottom: 0;
  margin: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > ul {
    background: ${props => props.theme.colors.blue8};
    border-radius: 5px;
    padding: 10px;
    display: block;
    box-shadow: 0 0 5px #727d86;
  }
  button {
    cursor:pointer;
    display: block;
  }
`;
