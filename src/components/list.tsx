import React from "react";
import styled from "styled-components";
import { Store } from "../store";
import { TYPE_EMOJI } from "../types/types";
import { useCopyToClipboard } from "react-use";

//===============================
// @Component
//===============================
const View: React.FC = (props: any) => {
  const emojiRef = React.useRef<any>(null);
  React.useEffect(() => {}, [emojiRef]);
  const [text, copyToClipboard] = useCopyToClipboard();
  const [toggle, setToggle] = React.useState(false);

  const { state } = React.useContext(Store);
  const emoji = state.data;
  return (
    <div className={props.className}>
      <ul className="emoji-list">
        {emoji.map((item: TYPE_EMOJI) => (
          <li key={item.emoji} className="emoji">
            <button
              onClick={() => {
                copyToClipboard(item.emoji);
                setToggle(true);
                setTimeout(() => setToggle(false), 2000);
              }}
              ref={emojiRef}
            >
              {item.emoji}
            </button>
          </li>
        ))}
      </ul>
      <div className={`alert ${toggle ? "is-in" : ""}`}>
        <p>copied!</p>
      </div>
    </div>
  );
};

//===============================
// @Styled
//===============================
export default styled(View)`
  > .emoji-list {
    display: flex;
    align-items: center;
  }
  .emoji {
    font-size: 2.4rem;
    line-height: 1;
    &:hover {
      transform: scale(1.1);
    }
    > button {
      cursor: pointer;
      line-height: inherit;
    }
  }
  .alert {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 5em;
    margin: auto;
    border-radius: 5px;
    width: 30%;
    text-align: center;
    background: ${props => props.theme.colors.blue4};
    box-shadow: 0 0 10px ${props => props.theme.colors.gray};
    transition: .2s ease-in-out;
    visibility: hidden;
    opacity: 0;
    padding:.5em 0;
    letter-spacing:.05em;
    &.is-in {
      opacity: 1;
      visibility: visible;
    }
    > p {
      font-weight: 700;
      font-size: 2rem;
      letter-spacing: .05em;
      color: #fff;
    }
  }
`;
