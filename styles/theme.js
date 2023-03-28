import styled from 'styled-components';

export const Container = styled.div`
  max-width: 48rem;
  padding: 0 2rem 0 2rem;
  margin: 3rem auto 0 auto;
`

export const GithubButton = styled.button`
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5;
  text-decoration: none;
  text-transform: uppercase;
  outline: 0;
  border: 0;

  & a{
    text-decoration: none;
    color: rgba(185, 185, 185, 0.29);
  }
  
  & a:hover {
    color:#D9D9D9;
  }

  &:before {
  background-color: rgba(185, 185, 185, 0.29);
  content: "";
  display: inline-block;
  height: 1px;
  margin-right: 10px;
  transition: all .42s cubic-bezier(.25,.8,.25,1);
  width: 0;
}

&:hover:before {
  background-color: #D9D9D9;
  width: 3rem;
}
`

export const SectionTitle = styled.h2`
`
export const StyledPicture = styled.img`
    border-radius: 10px;
    height: 140px;
    @media (max-width: 720px ) {
      & img {
        height: 120px;
      }
    }
`

