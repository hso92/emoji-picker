/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import styled from "styled-components";
import { Store } from "../store";
import { TYPE_EMOJI, TYPE_INITIAL_TYPE } from "../types/types";

//===============================
// @Component
//===============================
const View : React.FC = (props:any) => {
  const { state , dispatch } = React.useContext(Store);
  const emoji = state.data;

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

`