import React, { Fragment } from 'react';
import { Outlet } from 'react-router';
import GlobalStyle from "../styles/globals";
import NavBar from './components/NavBar';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <NavBar />
      <Outlet />
    </Fragment>
  );
}

export default App;
