import React, { Fragment } from 'react';
import GlobalStyle from "../styles/globals";
import NavBar from './components/NavBar';
import Main from './pages/Main';

function App() {
  return (
    <Fragment>
      <GlobalStyle/>
      <NavBar/>
      <Main/>
    </Fragment>
  );
}

export default App;
