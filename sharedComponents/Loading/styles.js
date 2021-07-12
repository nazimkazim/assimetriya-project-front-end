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

const scale = keyframes`
  from {
    transform: translateX(-200px);
    opacity:0;
  }

  to {
    transform: translateX(0x);
    opacity:1;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Logo = styled.img`
  width:300px;
  animation: ${scale} 1s ease-in-out infinite, ${rotate} 2s ease-in-out;
  animation-delay: 0s, 1s;
`;



