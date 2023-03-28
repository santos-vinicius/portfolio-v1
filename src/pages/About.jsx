import React from 'react'
import styled from 'styled-components'
import { Container, PageTitle } from '../../styles/theme'
import ops from '../assets/ops.gif'

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  & img {
    max-width:50%;
    margin-top: 1rem;
  }
`

function Sobre() {
  return (
    <Container>
      <StyledAbout>
        <PageTitle>Esta página ainda está em construção</PageTitle>
        <img src={ops} alt="Gif de construção" />
      </StyledAbout>
    </Container>
  )
}

export default Sobre


