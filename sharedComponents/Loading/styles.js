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

const appear = keyframes`
  from {
    transform: scale(0);
    opacity:0;
  }
  to {
    transform: scale(1);
    opacity:1;
  }
`;

const rightToLeft = keyframes`
  from {
    transform: translateX(0px);
    opacity:0.5;
  }
  to {
    transform: translateY(100px);
    opacity:0;
  }
`;

export const Logo = styled.img`
  width:300px;
  animation: ${appear} 1.5s ease-in-out, ${rightToLeft} 1.5s ease-in-out;
  animation-delay:0s, 2s;
`;



