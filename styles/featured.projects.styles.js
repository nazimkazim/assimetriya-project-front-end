import styled from 'styled-components';
import { MAIN_WIDTH, MEDIA_QUERY_BREAKPOINTS } from '../constants';

const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  position:relative;
  max-width:100vw;
  height:100vh;
  background-color:#FFFFFF;
`;

const ImageContainner = styled.div`
  width:${MAIN_WIDTH};
  display:grid;
  grid-template-columns:repeat(3,1fr);
  min-height:auto;
  @media(max-width: ${MEDIA_QUERY_BREAKPOINTS.mobile}) {
    grid-template-columns:repeat(1,1fr);
  }

`;

const Cover = styled.div`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:0;
  background-color:rgba(0, 0, 0, 0.95);
  transition:height 0.3s ease;
`;

const Type = styled.p`
  transform:translateY(400px);
  color:white;
  font-size:19px;
  margin-left:20px;
  transition:transform 0.3s ease;
`;

const Name = styled.p`
  transform:translateY(400px);
  color:white;
  font-size:24px;
  margin-left:20px;
  transition:transform 0.3s ease;
`;

const ImageItem = styled.div`
  position:relative;
  cursor:pointer;
  height:330px;
  background-color:rgba(0, 0, 0, 0.6);
  background-image:url(${props => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow:hidden;
  &:hover ${Cover} {
    height:100%;
  }
  &:hover ${Type} {
    transform:translateY(250px);
  }
  &:hover ${Name} {
    transform:translateY(240px);
  }
`;

export { Container, ImageContainner, ImageItem, Cover, Type, Name };