import React from "react";
import { Provider } from "./store";
import Layout from './components/Layout'
import EmojiList from './components/list';
import Title from './components/title'
import SortList from './components/sort'
import SearchBox from './components/search'

//===============================
// @Container
//===============================
const Container: React.FC = () => {
  console.log('render')
  return (
    <Layout>
      <Title />
      <SearchBox />
      <SortList />
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
