import styled from "styled-components";

const Header = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 133px;
  background-color: black;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 1200px;
  height: 100%;
  background-color: blue;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex:0.3;
  background-color: red;
  height: 100%;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex:0.6;
  background-color: lightblue;
  height: 100%;
`;

const Link = styled.li`
  
`;

export {
  Header, Content, Logo, Menu, Link
};
