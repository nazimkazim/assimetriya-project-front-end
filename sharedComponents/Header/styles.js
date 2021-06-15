import styled from "styled-components";
import { HEADER_HEIGHT } from '../../constants';
import { MEDIA_QUERY_BREAKPOINTS } from '../../constants';

const Content = styled.div`
  position:${props => props && props.pathName === '/featured-projects' ? 'relative' : 'absolute'};
  background-color: ${props => props && props.pathName === '/featured-projects' ? 'transparent' : 'rgba(0, 0, 0, 0.3)'};
  display: flex;
  z-index:1000;
  height: ${HEADER_HEIGHT};
  justify-content: center;
  align-items: center;
  width: 1200px;
  /* background-color: blue; */
  @media (max-width: ${MEDIA_QUERY_BREAKPOINTS.mobile}) {
    display: flex;
    flex-direction:column;
    width: 100%;
    transition:height 0.8s;
    height:${props => props.openMenu ? '100vh' : '10vh'};
    justify-content: flex-start;
  }
`;

const Logo = styled.div`;
/* background-color: red; */
display: flex;
justify-content: center;
align-items: center;
flex: 0.4;
height: 100%;
padding:3px;
  > img {
  width: 100px;
}

@media(max-width: ${MEDIA_QUERY_BREAKPOINTS.mobile}) {
  img {
    width: 50px;
  }
  align-items: center;
  width:100%;
  justify-content:center;
  flex:0.1;
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
  justify-content: space-between;
  display:${props => props.openMenu ? 'flex' : 'none'};
  transition:display 0.8s 1s;
  width:100%;
}
`;

const LinkItem = styled.li`;
list-style-type: none;
text-transform: uppercase;
cursor: pointer;
/* background-color:black; */
color: ${props => props.pathName === '/featured-projects' ? 'black' : 'white'};
padding: 3px;
border-radius: 3px;
transition: background-color 0.8s;
  &: hover {
  background-color: rgba(0, 0, 0, 0.3);
}
`;

export {
  Content, Logo, Menu, LinkItem
};
