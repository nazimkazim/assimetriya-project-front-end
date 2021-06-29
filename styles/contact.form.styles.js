import styled from "styled-components";
import { MEDIA_QUERY_BREAKPOINTS } from "../constants";

export const FORM = styled.form`
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
  width:100%;
  height:100%;
  /* background-color:red; */
`;

export const InputContainer = styled.div`
  display:flex;
  justify-content:center;
  flex-direction:column;
  width:60%;
  min-height:50px;
  /* background-color:yellow; */
  margin-bottom:3px;
  >input {
    width: 100%;
    padding: 12px 20px;
    margin: 4px 0;
    box-sizing: border-box;
    border-radius: 4px;
    border:1px solid black;
    font-size:18px;
  }
`;

export const TextArea = styled.textarea`
  max-width:100%;
  resize:none;
  height:100px !important;
  border-radius: 4px;
  border:1px solid black;
  font-size:18px;
`;

export const Button = styled.button`
  width:100px;
  align-self:center;
  height:30px;
  cursor:pointer;
  background-color:white;
  border-radius:3px;
  border:2px solid black;
  color:black;
  font-size:16px;
  font-weight:normal;
  transition:all .2s;
  &:hover {
    background-color:black;
    color:white;
  }
`;