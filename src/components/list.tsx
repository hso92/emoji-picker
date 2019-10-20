import React from 'react'
import styled from 'styled-components';
import { Store } from "../store";
import { TYPE_EMOJI } from "../types/types";

const View : React.FC = (props:any) => {
  const { state } = React.useContext(Store);
  const emoji = state.data;
  return (
    <div className={props.className}>
      <h1 className="title">EMOJI LIST</h1>
      <ul className="emoji-list">
        {emoji.map((item: TYPE_EMOJI) => (
          <li key={item.emoji}>{item.emoji}</li>
        ))}
      </ul>
    </div>
  );
}

export default styled(View)`
  .title {
    font-weight: 700;
    font-size:2.4rem;
  }
  .emoji-list {
    display:flex;
    align-items:center;
  }
`