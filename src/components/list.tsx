import React from 'react'
import styled from 'styled-components';
import { Store } from "../store";
import { TYPE_EMOJI } from "../types/types";

const View : React.FC = (props) => {
  const { state } = React.useContext<any>(Store);

  return (
    <ul>
      {state.data.map((item: TYPE_EMOJI) => (
        <li key={item.emoji}>{item.emoji}</li>
      ))}
    </ul>
  );
}

export default styled(View)`
  
`