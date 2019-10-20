import React from "react";
import { Provider } from "./store";
import EmojiList from './components/list';

//===============================
// @Container
//===============================
const Container: React.FC = () => {
  return (
    <>
      <EmojiList />
    </>
  );
};

//===============================
// @Component
//===============================
const App: React.FC = () => (
  <Provider>
    <Container />
  </Provider>
)

export default App;
