import styled from "styled-components";
import { HEADER_HEIGHT, MAIN_WIDTH, MEDIA_QUERY_BREAKPOINTS } from "../constants";


export const Title = styled.h1`
  margin-top:calc(${HEADER_HEIGHT} + 60px);
  text-align:center;
  font-weight:normal;
  text-transform:uppercase;
  font-size:60px;
`;

export const ContactInfoContainer = styled.div`
  display:flex;
  flex-direction:row;
  width:${MAIN_WIDTH};
  margin-top:${HEADER_HEIGHT};
  min-height:500px;
  padding:6px;
  flex-wrap: wrap;
  @media(max-width: ${MEDIA_QUERY_BREAKPOINTS.mobile}) {
    grid-template-columns:repeat(1,1fr);
    width:100%;
  }
`;

export const AddressAndFormContainer = styled.div`
  display:flex;
  width:100%;
  height:auto;
  /* background-color:blue; */
  margin-bottom:${HEADER_HEIGHT} !important;
  @media(max-width: ${MEDIA_QUERY_BREAKPOINTS.mobile}) {
    flex-direction:column;
  }
`;

export const OneSecondSection = styled.div`
  display:flex;
  flex-direction:column;
  flex:0.5;
  padding-top:40px;
  /* background-color:red; */
  &:li {
    list-style-type: none;
  }
`;

export const Item = styled.span`
  display:inline-block;
  margin-bottom:10px;
`;