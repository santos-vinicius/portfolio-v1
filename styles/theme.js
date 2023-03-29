import styled from 'styled-components';

export const Container = styled.div`
  max-width: 48rem;
  padding: 0 2rem 0 2rem;
  margin: 1.5rem auto 0 auto;
`;

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
`;

export const DemoButton = styled.a`
 --border-radius: 5px;
 --border-width: 2px;
 appearance: none;
 position: relative;
 padding: 0.5em 1em;
 border: 0;
 background-color: transparent;
 z-index: 2;
 margin-left: 1.5rem;
font-family: Rubik, sans-serif;
font-size: 12px;
font-weight: 500;
color: #fff;
text-decoration: none;

@media (max-width: 600px) {
  margin-top: 0.5rem;
  margin-left: 0;
}


&::after {
 --m-i: linear-gradient(#000, #000);
 --m-o: content-box, padding-box;
 content: "";
 position: absolute;
 left: 0;
 top: 0;
 width: 100%;
 height: 100%;
 padding: var(--border-width);
 border-radius: var(--border-radius);
 background-image: conic-gradient(
		#488cfb,
		#29dbbc,
		#ddf505,
		#ff9f0e,
		#e440bb,
		#655adc,
		#488cfb
	);
 -webkit-mask-image: var(--m-i), var(--m-i);
 mask-image: var(--m-i), var(--m-i);
 -webkit-mask-origin: var(--m-o);
 mask-origin: var(--m-o);
 mask-clip: var(--m-o);
 mask-composite: exclude;
 -webkit-mask-composite: destination-out;
 filter: hue-rotate(0);
 animation: rotate-hue linear 500ms infinite;
 animation-play-state: paused;
}

&:hover::after {
 animation-play-state: running;
}

@keyframes rotate-hue {
 to {
  filter: hue-rotate(1turn);
 }
}

&,
&::after {
 box-sizing: border-box;
}

&:active {
 --border-width: 3px;
}
`;
export const PageTitle = styled.h1`
  text-align: center;
`;

export const SectionTitle = styled.h2`
`;
export const StyledPicture = styled.img`
    border-radius: 10px;
    height: 140px;
`;
