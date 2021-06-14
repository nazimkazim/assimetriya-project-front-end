import styled from "styled-components";
import { HEADER_HEIGHT } from '../../constants';

const Content = styled.div`
  position:absolute !important;
  background-color:rgba(0, 0, 0, 0.3);
  top:0;
  left:0;
  display: flex;
  z-index:1000;
  height: ${HEADER_HEIGHT};
  justify-content: center;
  align-items: center;
  width: 100%;
  transition:box-shadow 0.8s;
  &:hover {
    -webkit-box-shadow: 0px 2px 2px 1px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 2px 2px 1px rgba(0,0,0,0.75);
    box-shadow: 0px 2px 2px 1px rgba(0,0,0,0.75);
  }
  /* background-color: blue; */
  @media (max-width: 414px) {
    display: flex;
    flex-direction:column;
    width: 100%;
    transition:height 0.8s;
    height:${props => props.openMenu ? '100vh' : '10vh'};
    justify-content: flex-start;
  }
`;

const Logo = styled.div`;
display: flex;
justify-content: center;
align-items: center;
flex: 0.3;
/* background-color: red; */
height: 100%;
  > img {
  width: 200px;
  margin-top:10px;
}

@media(max-width: 414px) {
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
@media(max-width: 414px) {
  flex-direction: column;
  justify-content: space-between;
  display:${props => props.openMenu ? 'flex' : 'none'};
  transition:display 0.8s 1s;
  width:100%;
}
`;

const Link = styled.li`;
list-style-type: none;
text-transform: uppercase;
cursor: pointer;
/* background-color:black; */
color: white;
padding: 3px;
border-radius: 3px;
transition: background-color 0.8s;
  &: hover {
  background-color: rgba(0, 0, 0, 0.3);
}
`;

export {
  Content, Logo, Menu, Link
};
