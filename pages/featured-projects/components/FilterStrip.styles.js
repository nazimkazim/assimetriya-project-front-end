import styled from 'styled-components';
import { MAIN_WIDTH } from '../../../constants';

const Strip = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  width:${MAIN_WIDTH};
  min-height:80px;
  /* background-color:red; */
`;

const Title = styled.p`
  font-size:26px;
  margin-left:10px;
`;

const TypesContainer = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  min-width:300px;
  height:100%;
  /* background-color:blue; */
  padding-right:10px;
`;

const TypeItem = styled.a`
  margin-left:25px;
  cursor:pointer;
  color:grey;
`;

export { Strip, Title, TypesContainer, TypeItem };