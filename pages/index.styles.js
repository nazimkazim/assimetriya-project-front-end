import styled from "styled-components";


const Container = styled.div`
  position:relative;
  width:100vw;
  height:100vh;
`;

const ImageContainer = styled.div`
  width:100vw;
  background-color:yellow;
`;

const ArrowLeft = styled.div`
  position:absolute;
  top:50%;
  left:30px;
  min-width:30px;
  height:30px;
  background-color:red;
  z-index:999;
`;

const ArrowRight = styled.div`
  position:absolute;
  top:50%;
  right:30px;
  min-width:30px;
  height:30px;
  background-color:red;
  z-index:999;
`;

export {
  Container, ImageContainer, ArrowLeft, ArrowRight
};
