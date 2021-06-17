import styled from "styled-components";
import { HEADER_HEIGHT } from '../../constants';
import { MEDIA_QUERY_BREAKPOINTS, MAIN_WIDTH } from '../../constants';

const Content = styled.div`
  position:absolute;
  background-color: ${props => props && props.pathName === '/' ? 'rgba(0, 0, 0, 0.3)' : 'transparent'};
  display: flex;
  z-index:1000;
  height: ${HEADER_HEIGHT};
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
/* background-color: red; */
display: flex;
justify-content: flex-start;
align-items: center;
flex: 0.4;
height: 100%;
padding:3px;
& > img {
  width: 100px;
}

@media(max-width: ${MEDIA_QUERY_BREAKPOINTS.mobile}) {
  img {
    width: 50px;
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
  Content, Logo, Menu, LinkItem
};
