/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import styled from "styled-components";
import { Store } from "../store";
import { TYPE_EMOJI, TYPE_INITIAL_TYPE } from "../types/types";

//===============================
// @Component
//===============================
const View : React.FC = (props:any) => {
  const { state , dispatch, emojiState } = React.useContext(Store);
  const emoji = emojiState;

  const handleChangeReset = (data: TYPE_INITIAL_TYPE) => ({
    type: "READY",
    payload: data
  });
  const handleChangePeople = (data: TYPE_INITIAL_TYPE) => ({
    type: "PEOPLE",
    payload: data
  });
  const handleChangeAnimals = (data: TYPE_INITIAL_TYPE) => ({
    type: "ANIMALS",
    payload: data
  });
  return (
    <ul className={props.className}>
      <li>
        <button
          aria-label="ALL"
          onClick={() => dispatch(handleChangeReset(emoji))}
        >
          ALL
        </button>
      </li>
      <li>
        <button
          aria-label="people"
          onClick={() => dispatch(handleChangePeople(emoji))}
        >
          😊
        </button>
      </li>
      <li>
        <button
          aria-label="animals"
          onClick={() => dispatch(handleChangeAnimals(emoji))}
        >
          🐋
        </button>
      </li>
    </ul>
  );
}

//===============================
// @Styled
//===============================
export default styled(View)`
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 1em;
  > li {
    width: 100%;
    border-radius: 5px;
    transition: 0.2s ease;
    text-align: center;
    &:hover {
      cursor: pointer;
      transform: translateY(-2.5px);
      box-shadow: 0 1.5px 3px ${props => props.theme.colors.gray};
    }
    + li {
      margin-left: 2em;
    }
    > button {
      font-size: 1.5rem;
      letter-spacing: 0.1em;
      font-weight: 700;
      line-height: 1.5;
      padding: 0.5em 0;
      cursor: inherit;
      display: block;
      width: 100%;
    }
  }
`;