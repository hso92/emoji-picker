import React from "react";
import { Provider } from "./store";
import Layout from './components/Layout'
import EmojiList from './components/list';
import SoryList from './components/sort'

//===============================
// @Container
//===============================
const Container: React.FC = () => {
  return (
    <Layout>
      <SoryList />
      <EmojiList />
    </Layout>
  );
};

//===============================
// @Component
//===============================
const App: React.FC = () => (
  <Provider>
    <Container />
  </Provider>
);

export default App;
