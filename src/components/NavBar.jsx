import React from 'react';
import styled from 'styled-components';

const Gradient = styled.div`
    width: 100%;
    height: 7px;
    background: linear-gradient(90deg, #E39600 0%, #EA4C89 30.21%, #8F48EB 66.67%, #1DA1F2 100%);
  `

const StyledNav = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 2rem;
  margin: 16px;
  padding: 1rem;
  
  @media (max-width: 960px) {
    justify-content: space-between;
  }
  
  & h1 {
    font-size: 22px;
    font-weight: bold;
    color: #FAFAFA;
  }

  & span {
    margin: 0 5px;
  }

  & ul {
    display: flex;
    align-items: center;
    list-style: none;
  }
  
  & ul:last-child {
    padding-right: 0;
  }

  & li {
    background: none;
    border: none;
    border-radius: 10px;
    padding: 12px;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    text-transform: capitalize;
    margin-right: 0;   
  }

  & li:hover {
    background: rgba(170, 170, 170, 0.062);
    transition: 0.5s;
  }
 
  & a {
    text-decoration: none;
    color: #FAFAFA;
  }

  
`


function NavBar() {
  const links = [
    {
      id: 1,
      link: 'projetos',
      href: '/'
    },
    {
      id: 2,
      link: 'sobre',
      href: '/about'
    }
  ]

  return (
    <>
      <Gradient />
      <StyledNav>
        <h1>
          <span>{"<"}</span>
          Vinicius
          <span>{"/>"}</span>
        </h1>
        <ul>
          {links.map(({ id, link, href }) => (
            <li key={id}>
              <a href={href}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      </StyledNav>
    </>
  )
}

export default NavBar