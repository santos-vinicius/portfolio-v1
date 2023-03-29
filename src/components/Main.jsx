import React from 'react';
import styled from 'styled-components';
import { StyledPicture } from '../../styles/theme.js';
import ProfilePicture from '../assets/profilepicture.jpg';
import SocialLinks from './SocialLinks';

const StyledMain = styled.div`
  max-width: 48rem;
  padding: 0 2rem 0 2rem;
  margin: 3rem auto 0 auto;

  & div {
    display: flex;
    margin-bottom: 1rem;
  }

  & .content {
    display: flex;
    flex-direction: column;
    margin-right: 15px;
  }

  & h2 {
    margin-bottom: 15px;
  }
  
  & p {
    margin-bottom: 5px;
  }

  &:after {
    background-color: rgba(185, 185, 185, 0.1);
    content: "";
    display: inline-block;
    height: 1px;
    width: 100%;
  }

  @media (max-width: 600px ) {
    margin: 2rem auto 0 auto;
    
    & div {
      order: 2;
      flex-direction: column;
      align-items: center;
      margin-bottom: 0.5rem;
    }

    & .img {
      order: 1;
      max-height: 60%;
      max-width: 60%;
      margin-bottom: 1rem;
    }

    & .content {
      margin-right: 0;
    }

    & p {
      text-align: justify;
    }
  }
`;

function Main() {
  return (
    <StyledMain>
      <div>
        <div className="content">
          <h2 className="title">Olá! &#10024;</h2>
          <p>
            Eu sou Vinicius Santos, Desenvolvedor Frontend Jr e
            estudante. Amante de design e tecnologia construindo
            coisas pela internet.
          </p>
          <SocialLinks />
        </div>
        <StyledPicture
          className="img"
          src={ProfilePicture}
          alt="Vinicius Santos"
        />
      </div>
    </StyledMain>
  );
}

export default Main;
