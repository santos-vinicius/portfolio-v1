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
    margin-right: 15px;
  }

  & h2 {
    margin-bottom: 15px;
  }

  & h3 {
    margin-bottom: 5px;
  }

  & p {
    margin-bottom: 5px;
  }

  & img {
    height: 180px;
  }

  @media (max-width: 720px ) {
   & img {
    height: 120px;
   }
    
  }
`

function Main() {
  return (
    <StyledMain>
      <div>
        <div className='content'>
          <h2>Olá! &#10024;</h2>
          <p>
            Eu sou Vinicius Santos, Desenvolvedor Frontend Jr e estudante. Amante de design e tecnologia construindo coisas pela internet.
          </p>
          <SocialLinks />
        </div>
        <img src={Avatar} alt="The person in the photo is wearing headphones and has short, curly hair. Their skin is brown and they are wearing a black t-shirt. " />
      </div>
    </StyledMain >
  )
}

export default Main