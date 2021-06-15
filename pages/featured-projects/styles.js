import styled from 'styled-components';

const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  position:relative;
  width:100vw;
  height:100vh;
  background-color:#FFFFFF;
`;

const ImageContainner = styled.div`
  width:1200px;
  display:grid;
  grid-template-columns:repeat(3,1fr);
  min-height:auto;
  /* background-color:yellow; */
`;

const ImageItem = styled.div`
  cursor:pointer;
  height:330px;
  background-color:white;
  background-image:url(${props => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  &:hover {
    background-color:black !important;
  }
`;

export { Container, ImageContainner, ImageItem };