import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width:100%;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  background-color:white;
  color:white;
`;

const appear = keyframes`
  from {
    transform: scale(0.98);
    opacity:0;
  }
  to {
    transform: scale(1);
    opacity:1;
  }
`;

export const Logo = styled.img`
  width:300px;
  animation: ${appear} 3s ease-in-out;
`;



