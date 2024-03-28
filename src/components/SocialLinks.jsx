import React from 'react';
import { FaEnvelope, FaGithubAlt, FaLinkedinIn } from 'react-icons/fa';
import styled from 'styled-components';

const StyledLinks = styled.div`
  margin: 1.5rem 0;

  & ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    list-style: none;
  }

  & li {
    padding: 10px;
    background: rgba(170, 170, 170, 0.062);
    margin-right: 10px;
    border-radius: 10px;
  }

  & li:last-child {
    margin-right: 0;
  }

`;

const GitHub = styled(FaGithubAlt)`
  font-size: 25px;
  font-weight: bold;
  color: #D9D9D9;
`;

const LinkedIn = styled(FaLinkedinIn)`
  font-size: 25px;
  font-weight: bold;
  color: #D9D9D9;
`;

const Email = styled(FaEnvelope)`
  font-size: 25px;
  font-weight: bold;
  color: #D9D9D9;
`;

function SocialLinks() {
  return (
    <StyledLinks>
      <ul>
        <li>
          <a
            href="https://github.com/santos-vinicius"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/santos-vinicius/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn />
          </a>
        </li>
        <li>
          <a
            href="mailto:santosviniv@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Email />
          </a>
        </li>
      </ul>
    </StyledLinks>
  );
}

export default SocialLinks;
