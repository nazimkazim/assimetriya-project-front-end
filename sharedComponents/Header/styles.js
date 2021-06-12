import styled from "styled-components";
import { HEADER_HEIGHT } from '../../constants';

const Header = styled.div`
  position:absolute !important;
  top:0;
  left:0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: ${HEADER_HEIGHT};
  z-index:1000;
  background-color:rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px 1px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 2px 2px 1px rgba(0,0,0,0.75);
  box-shadow: 0px 2px 2px 1px rgba(0,0,0,0.75);
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 1200px;
  height: 100%;
  /* background-color: blue; */
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex:0.3;
  /* background-color: red; */
  height: 100%;
  > img {
    width:200px;
  }
`;

const Menu = styled.div`
  display: flex;
  padding:3px;
  justify-content: space-between;
  align-items: center;
  flex:0.6;
  /* background-color: lightblue; */
  height: 100%;
`;

const Link = styled.li`
  list-style-type: none;
  text-transform:uppercase;
  cursor:pointer;
  /* background-color:black; */
  color:white;
  padding:3px;
  border-radius:3px;
  transition: background-color 0.8s;
  &:hover {
    background-color:rgba(0, 0, 0, 0.3);
  }
`;

export {
  Header, Content, Logo, Menu, Link
};
