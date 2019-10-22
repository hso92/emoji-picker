import React from "react";
import styled from "styled-components";
import { Store } from "../store";
import { TYPE_INITIAL_TYPE } from "../types/types";

//===============================
// @Component
//===============================
const View: React.FC = (props: any) => {
  const { dispatch, emojiState } = React.useContext(Store);
  const searchRef = React.useRef<any>('');

  const emoji = emojiState;

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement> |
    React.FormEvent<HTMLInputElement>
    ) => {
      event.preventDefault()
    }
  const handleSearch = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, data: TYPE_INITIAL_TYPE) => {
      event.preventDefault();
      dispatch({
        type: "SEARCH",
        payload: data,
        text: searchRef.current.value
      });
    },
    [dispatch, searchRef]
  );

  return (
    <form className={props.className} onSubmit={e => handleSubmit(e)}>
      <input
        type="text"
        placeholder="search emoji"
        onChange={e => handleSearch(e, emoji)}
        ref={searchRef}
      />
    </form>
  );
};

//===============================
// @Styled
//===============================
export default styled(View)`
  > input {
    width: 100%;
    display: block;
    font-size: 1.6rem;
    padding: 0.5em 1em;
    margin: 0 0 1em;
    border-radius: 25px;
    box-shadow: 0 0 5px ${props => props.theme.colors.gray} inset;
    transition: 0.2s ease;
    color: ${props => props.theme.colors.blue8};
    opacity: 0.5;
    &:focus {
      padding: 0.5em 1em;
      box-shadow: 0 0 8px ${props => props.theme.colors.gray} inset;
      opacity: 1;
      border-radius: 15px;
      &::placeholder {
        color: transparent;
      }
    }
  }
`;
