import React from 'react';
import styled from 'styled-components';
import { Container, PageTitle } from '../../styles/theme';
import Smile from '../assets/hello.gif';
import SocialLinks from '../components/SocialLinks';

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  & p {
    max-width:80%;
    text-align: justify;
    margin-top: 1rem;
  }

  & span {
    color: #FFA518;
    font-weight: 700;
  }
  
  & strong {
    border-bottom: 1px solid #FFA518;
    
  }

   & .links {
    font-weight: 700;
    color: #FFF;
    text-decoration: none;
    border-bottom: 1px solid #FFA518;;
   }

   & img {
    width: 80%;
    margin-top: 1rem;
    border-radius: 20px;
   }
`;

function Sobre() {
  return (
    <Container>
      <PageTitle>Olá 👋</PageTitle>

      <StyledAbout>
        <p>
          Meu nome é Vinicius Santos, tenho 24 anos, sou <span>designer</span> e{' '}
          <span>desenvolvedor fullstack</span> com foco em <span>frontend</span>
          .
        </p>
        <p>
          Comecei a estudar desenvolvimento em 2021 e desde então tenho
          adquirido bastante conhecimento nessa área, atualmente estou cursando
          graduação em Análise e Desenvolvimento de Sistemas.
        </p>
        <p>
          Minhas principais stacks são: <strong>Javascript</strong>,{' '}
          <strong>Pyhton</strong> e <strong>Node</strong>. Mas também tenho um
          bom conhecimento em outras tecnologias, como React, Next, Typescript,
          StyledComponents, GIT, HTML, CSS, MySQL, MongoDB, Metodologias Ágeis,
          e Figma.
        </p>
        <p>
          Além disso, tenho experiência com design, o que me ajuda a criar
          interfaces mais amigáveis e visualmente atraentes para os usuários.
          Estou sempre buscando me atualizar e aprender novas tecnologias para
          melhorar minhas habilidades em construir coisas na web.
        </p>
        <p>
          Fora do trabalho, gosto muito de videogames e sou apaixonado por
          música, você pode conferir mais sobre meus gostos musicais no meu{' '}
          <a
            href="https://www.last.fm/user/vxncvs"
            target="_blank"
            rel="noopener noreferrer"
            className="links"
          >
            Last.fm
          </a>
          .
        </p>
        <p>Tem alguma dúvida ou quer trocar uma ideia? É só chamar!</p>
        <img
          src={Smile}
          alt="Luffy, protagonista do anime One Piece sorrindo"
        />
        <SocialLinks />
      </StyledAbout>
    </Container>
  );
}

export default Sobre;
