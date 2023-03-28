import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Gradient = styled.div`
    width: 100%;
    height: 7px;
    background: linear-gradient(90deg, #E39600 0%, #EA4C89 30.21%, #8F48EB 66.67%, #1DA1F2 100%);
  `

const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2rem;
  margin: 16px;
  padding: 1rem;
  
  & h1 {
    font-size: 22px;
    font-weight: bold;
    color: #FAFAFA;
  }

  & span {
    margin: 0 5px;
    color:rgba(170, 170, 170, 0.534);
  }

  & nav {
    display: flex;
    align-items: center;
    flex-direction: row;
    list-style: none;
  }
  
  & nav:last-child {
    padding-right: 0;
  }

  & a {
    background: none;
    border: none;
    border-radius: 10px;
    padding: 12px;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    text-transform: capitalize;
    margin-right: 0;   
    text-decoration: none;
    color: #FAFAFA;
  }

  & a:hover {
    background: rgba(170, 170, 170, 0.062);
    transition: 0.5s;
  }

  @media (max-width: 370px) {
    justify-content: center;

    & h1 {
      font-size: 20px;
    }
  }
`


function NavBar() {
  return (
    <>
      <Gradient />
      <StyledNav>
        <h1>
          <span>{"<"}</span>
          Vinicius
          <span>{"/>"}</span>
        </h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">Sobre</Link>
        </nav>
      </StyledNav>
    </>
  )
}

export default NavBar