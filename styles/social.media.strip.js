import styled from 'styled-components';

export const Strip = styled.div`
  display:flex;
  padding:3px;
  justify-content:flex-start;
  align-items:center;
  width:100%;
  min-height:50px;
  margin-top:${props => props.marginTop && props.marginTop};
`;

export const Circle = styled.a`
  display:flex;
  margin-right:10px;
  justify-content:center;
  align-items:center;
  width:50px;
  height:50px;
  background-color:#eee;
  border-radius:50%;
  margin-right:15px;
  cursor:pointer;
  transition:background-color 0.8s;
  &:hover {
    background-color:#A9A9A9;
  }
`;