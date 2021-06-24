import styled from "styled-components";
import { MEDIA_QUERY_BREAKPOINTS, MAIN_WIDTH, HEADER_HEIGHT } from '../../constants';


const Container = styled.div`
  position:absolute;
  top:0;
  left:0;
  display: flex;
  flex-direction:row;
  justify-content:center;
  background-color: ${props => props && props.pathName === '/' ? 'rgba(0, 0, 0, 0.3)' : 'transparent'};
  z-index:1000;
  height: ${HEADER_HEIGHT};
  width:100%;
  border-bottom: ${props => props && props.pathName === '/' ? 'none' : 'solid 1px gray'};
`;

const Content = styled.div`
  display: flex;
  height:100%;
  justify-content: center;
  align-items: center;
  width: ${MAIN_WIDTH};
  /* background-color: blue; */
  @media (max-width: ${MEDIA_QUERY_BREAKPOINTS.mobile}) {
    display: flex;
    flex-direction:column;
    justify-content:flex-start;
    width: 100%;
    transition:height 0.8s;
    height:${props => props.openMenu ? '100vh' : '10vh'};
  }
`;

const Logo = styled.div`;
cursor:pointer;
display: flex;
justify-content: flex-start;
align-items: center;
flex: 0.4;
height: 100%;
padding:3px;
& > img {
  width: 200px;
}

@media(max-width: ${MEDIA_QUERY_BREAKPOINTS.mobile}) {
  img {
    width: 100px;
  }
  align-items: center;
  width:100%;
  justify-content:space-between;
  flex:0.01;
}
`;

const Menu = styled.div`;
display: flex;
padding: 3px;
justify-content: space-between;
align-items: center;
flex: 0.6;
/* background-color: lightblue; */
height: 100%;
@media(max-width: ${MEDIA_QUERY_BREAKPOINTS.mobile}) {
  flex-direction: column;
  justify-content: space-around;
  display:${props => props.openMenu ? 'flex' : 'none'};
  transition:display 0.8s 1s;
  width:100%;
  background-color:${props => props && props.pathName === '/' ? 'transparent' : 'white'};
  flex: 1;
}
`;

const LinkItem = styled.li`;
list-style-type: none;
text-transform: uppercase;
cursor: pointer;
/* background-color:black; */
color: ${props => props.pathName === '/' ? 'white' : 'black'};
padding: 3px;
border-radius: 3px;
border-bottom:${({ chosen }) => chosen ? '1px solid gray' : ''};
transition: background-color 0.8s;
  &: hover {
  background-color: rgba(0, 0, 0, 0.3);
}
`;

export {
  Content, Logo, Menu, LinkItem, Container
};
