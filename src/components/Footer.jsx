import React from 'react';
import styled from 'styled-components';
import { Container } from '../../styles/theme';
// import { Container } from '../../styles/theme'

const StyledFooter = styled.footer` 
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(170, 170, 170, 0.534);
  
  &:before {
    margin-bottom: 1rem;
    background-color: rgba(185, 185, 185, 0.1);
    content: "";
    display: inline-block;
    height: 1px;
    width: 100%;
    }

    & a {
      font-weight: 700;
      margin-left: 0.5rem;
      text-decoration: none;
      color:rgba(170, 170, 170, 0.534)
    }

    & a:hover{
      color: #D9D9D9;
    }
`;

function Footer() {
  const year = new Date().getFullYear();
  return (
    <Container>
      <StyledFooter>
        <div>
          &copy; {year} | Design e Código por
          <a
            href="https://github.com/santos-vinicius/portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vinicius Santos
          </a>
        </div>
      </StyledFooter>
    </Container>
  );
}

export default Footer;
