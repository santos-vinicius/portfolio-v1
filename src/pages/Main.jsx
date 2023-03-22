import React from 'react'
import styled from 'styled-components'
import Avatar from '../assets/avatar.png'
import SocialLinks from '../components/SocialLinks'

const StyledMain = styled.div`
  max-width: 48rem;
  padding: 0 2rem 0 2rem;
  margin: 3rem auto 0 auto;

  & div {
    display: flex;
  }

  & .content {
    display: flex;
    flex-direction: column;
  }

  & h2 {
    margin-bottom: 10px;
  }

  & p {
    margin-bottom: 25px;
  }
`

function Main() {
  return (
    <StyledMain>
      <div>
        <div className='content'>
          <h2>Vinicius Santos</h2>
          <h3>Hey there! &#10024;</h3>
          <p>
            I am a self-taught software developer, designer and student who really likes music, animes and videogames.
          </p>
          <SocialLinks />
        </div>
        <img src={Avatar} alt="" />
      </div>
    </StyledMain >
  )
}

export default Main