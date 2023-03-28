import React from 'react';
import styled from 'styled-components';
import { DemoButton } from '../../../styles/theme';

const CardContainer = styled.div`
  background-color: #191818;
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  
  & .project-title-section {
    display: flex;
    align-items: center;
  }

  & .project-title {
    text-decoration: none;
    color: #D9D9D9;
    font-weight: 700;
    font-size: 1.3rem;
  }

  & p {
    margin-top: 0.5rem;
    font-size: 14px;
  }

  & ul {
    display: flex;
    margin: 0.5rem 0
  }

  & li {
    margin-right: 0.5rem;
    padding: 5px;
    border: 1px solid rgba(185, 185, 185, 0.29);
    border-radius: 8px;
    font-size: 12px;
  }

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & .project-title-section {
      align-items: baseline;
      justify-content: center;
    }

    & .project-title {
      margin-right: 0.5rem ;
      white-space: nowrap;
      font-size: 1.2rem;
    }

    & ul {
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
    }

    & li {
      margin-top: 0.5rem;
    }
   
  }
`

const ImageContainer = styled.img`
  background-color: ${props => props.color};  
  width: 85px;
  height: 85px;
  margin-right: 1.5rem;
  border-radius: 10px;
  padding: 10px;

  @media (max-width: 960px) {
    width: 70px;
    height: 70px;
    margin-right: 0;
    margin-bottom: 0.2rem;
  }
`


function Card(props) {
  return (
    <>
      {props.details.map((value, index) => (
        <CardContainer key={index}>
          <ImageContainer src={value.icon} alt={value.alt} color={value.color} />
          <div>
            <div className='project-title-section'>
              <a href={value.gitUrl} className="project-title" target="_blank" rel="noopener noreferrer">
                {value.title}
              </a>
              <DemoButton href={value.demoUrl} target="_blank" rel="noopener noreferrer">
                Demo
              </DemoButton>
            </div>
            <p>
              {value.description}
            </p>
            <div>
              <ul>
                {value.tags.map((tag) => (<li>{tag}</li>))}
              </ul>
            </div>
          </div>

        </CardContainer>
      ))}

    </>

  )
}

export default Card