import React, { Fragment } from 'react';
import { Outlet } from 'react-router';
import GlobalStyle from "../styles/globals";
import Footer from './components/Footer';
import NavBar from './components/NavBar';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <NavBar />
      <Outlet />
      <Footer />
    </Fragment>
  );
}

export default App;
