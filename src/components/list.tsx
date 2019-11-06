import React from "react";
import styled from "styled-components";
import { Store } from "../store";
import { TYPE_EMOJI } from "../types/types";
import { useCopyToClipboard } from "react-use";
import History from './history'

//===============================
// @Component
//===============================
const View: React.FC = (props: any) => {
  const emojiRef = React.useRef<any>(null);
  React.useEffect(() => {}, [emojiRef]);
  const [text , copyToClipboard] = useCopyToClipboard();
  const [toggle, setToggle] = React.useState(false);
  const [currentEmoji , setCurrentEmoji] = React.useState('');
  const { state , storage , storageDispatch } = React.useContext(Store);
  const emoji = state.data;
  const setStorage = (item: string) => {
    const target = {emoji: item}
    const some = storage.some((item: { emoji: string; },index: number) => {
      if (item.emoji === target.emoji) {
        storage.splice(index, 1);
        storage.push(item)
        return true
      }
    });
    if (some) return;
      storageDispatch({
        type: "SET_LOCAL",
        storage: item
      });
    window.localStorage.setItem("EMOJI", JSON.stringify(storage));
  }

  return (
    <div className={props.className}>
      <ul className="emoji-list">
        {emoji.map((item: TYPE_EMOJI) => (
          <li key={item.emoji} className="emoji">
            <button
              onClick={() => {
                copyToClipboard(item.emoji);
                setCurrentEmoji(item.emoji);
                setStorage(item.emoji);
                setToggle(true);
                setTimeout(() => setToggle(false), 2000);
              }}
              ref={emojiRef}
              role="img"
              aria-label={item.ja}
            >
              {item.emoji}
            </button>
          </li>
        ))}
      </ul>
      <div className={`alert ${toggle ? "is-in" : ""}`}>
        <p>COPY {currentEmoji}</p>
      </div>
      <History
        children={{
          currentEmoji,
          copyToClipboard,
          setCurrentEmoji,
          setStorage,
          setToggle
        }}
      />
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
    flex-wrap: wrap;
    > li {
      margin-top: 0.25em;
    }
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
    transition: 0.2s ease-in-out;
    visibility: hidden;
    opacity: 0;
    padding: 0.5em 0;
    letter-spacing: 0.05em;
    &.is-in {
      opacity: 1;
      visibility: visible;
    }
    > p {
      font-weight: 700;
      font-size: 2rem;
      letter-spacing: 0.05em;
      color: #fff;
    }
  }
`;
