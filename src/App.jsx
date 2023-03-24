import React, { Fragment } from 'react';
import GlobalStyle from "../styles/globals";
import NavBar from './components/NavBar';
import Main from './pages/Main';
import Works from './pages/Works';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <NavBar />
      <Main />
      <Works />
    </Fragment>
  );
}

export default App;
