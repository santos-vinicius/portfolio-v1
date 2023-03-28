import React from 'react'
import styled from 'styled-components'
//import { Container } from '../../styles/theme'

const StyledFooter = styled.footer` 
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  &:before {
    margin-bottom: 1rem;
    background-color: rgba(185, 185, 185, 0.1);
    content: "";
    display: inline-block;
    height: 1px;
    width: 100%;
    }
`

function Footer() {
  return (
    <>
      <StyledFooter>
        Design e Código por Vinicius Santos © 2023
      </StyledFooter>
    </>
  )
}

export default Footer