import React from "react";
import styled from "styled-components";
import { Store } from "../store";

//===============================
// @Component
//===============================
const View: React.FC = (props: any) => {
  const { state, storage } = React.useContext(Store);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const {
    copyToClipboard,
    setCurrentEmoji,
    setStorage,
    setToggle
  } = props.children;
  const history = storage.filter(
    (item: any, index: number) => index > storage.length - 6
  );
  const List = () => {
    return (
      <ul>
        {history.map((item: { emoji: React.ReactNode }, index: string) => (
          <li key={index}>
            <button
              onClick={() => {
                copyToClipboard(item.emoji);
                setCurrentEmoji(item.emoji);
                setStorage(item.emoji);
                setToggle(true);
                setTimeout(() => setToggle(false), 2000);
              }}
              role="img"
            >
              {item.emoji}
            </button>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className={props.className}>
      {storage.length > 0 ? (
        <>
          {isOpen && <List />}
          <button
            className={isOpen ? "toggleButton open" : "toggleButton"}
            onClick={() => setIsOpen(!isOpen)}
          ></button>
        </>
      ) : null}
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
  @media screen and (max-width: ${props => props.theme.responsive.medium}) {
    top: auto;
    right: 20px;
    bottom: 20px;
    height: auto;
  }
  > ul {
    background: ${props => props.theme.colors.blue8};
    border-radius: 5px;
    padding: 10px;
    display: flex;
    flex-direction: column-reverse;
    box-shadow: 0 0 5px #727d86;

    + .toggleButton {
      margin-top: 0.5em;
    }
  }
  button {
    cursor: pointer;
    display: block;
    margin: 0;
    padding: 0;
  }
  .toggleButton {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: ${props => props.theme.colors.blue5};
    position: relative;
    box-shadow: 0 0 5px #727d86;
    transition: 0.2s ease-in-out;
    &::before,
    &::after {
      content: "";
      display: inline-block;
      width: 25%;
      height: 2px;
      background: #fff;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      transition: inherit;
    }
    &::after {
      transform: rotate(-90deg);
    }
    &.open {
      background: ${props => props.theme.colors.blue8};
      &::after {
        transform: none;
      }
    }
  }
`;
