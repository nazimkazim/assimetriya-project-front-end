import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width:100%;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  background-color:black;
  color:white;
`;

const leftToRight = keyframes`
  from {
    transform: translateX(-1000px);
    opacity:0;
  }
  to {
    transform: translateX(0px);
    opacity:1;
  }
`;

const rightToLeft = keyframes`
  from {
    transform: translateX(0px);
    opacity:1;
  }
  to {
    transform: translateX(1000px);
    opacity:0;
  }
`;

/* const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`; */

export const Logo = styled.img`
  width:300px;
  animation: ${leftToRight} 1s ease-in-out, ${rightToLeft} 2s ease-in-out;
  animation-delay:0s, 2s;
`;



