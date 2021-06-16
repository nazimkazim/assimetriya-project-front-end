import styled from "styled-components";
import { motion } from 'framer-motion';

const Container = styled.div`
  display:flex;
  justify-content:center;
  position:relative;
  width:100vw;
  height:100vh;
`;

const ImageContainer = styled(motion.div)`
  width:100vw;
  background-color:white;
`;

export {
  Container, ImageContainer
};
