import React from 'react';
import styled from 'styled-components';

const Gradient = styled.div`
    width: 100%;
    height: 7px;
    background: linear-gradient(90deg, #E39600 0%, #EA4C89 30.21%, #8F48EB 66.67%, #1DA1F2 100%);
  `

const StyledNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2rem;
  margin: 16px 20px;
  padding: 1rem;
  
  & ul {
    display: flex;
    align-items: center;
    list-style: none;
  }
  
  & ul:last-child{
    padding-right: 1.5rem;
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
    margin-right: 1rem;   
  }

  & li:hover{
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
      link: 'work',
      href: '/'
    },
    {
      id: 2,
      link: 'about',
      href: '/about'
    }
  ]

  return (
    <>
      <Gradient />
      <StyledNav>
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