import styled from 'styled-components';
import { MAIN_WIDTH, MEDIA_QUERY_BREAKPOINTS, HEADER_HEIGHT } from '../constants';

const Strip = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  width:${MAIN_WIDTH};
  min-height:80px;
  margin-top:${HEADER_HEIGHT};
  /* background-color:red; */
  @media(max-width: ${MEDIA_QUERY_BREAKPOINTS.mobile}) {
    grid-template-columns:repeat(1,1fr);
    width:100%;
    flex-direction:column;
  }
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
  flex-wrap: wrap;
  /* background-color:blue; */
  padding-right:10px;
`;

const TypeItem = styled.a`
  margin-left:25px;
  cursor:pointer;
  color:grey;
  border-bottom:${({ chosen }) => chosen && '1px solid black'};
  transition: color 0.8s;
  transition: border-bottom 0.8s;
  &: hover {
  color: black;
}
`;

export { Strip, Title, TypesContainer, TypeItem };