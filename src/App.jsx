import React from 'react';
import { Outlet } from 'react-router';
import GlobalStyle from '../styles/globals';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
