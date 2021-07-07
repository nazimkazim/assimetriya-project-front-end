import { HEADER_HEIGHT, MAIN_WIDTH, MEDIA_QUERY_BREAKPOINTS } from "../constants";
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProjectInfoContainer = styled(motion.div)`
  display:flex;
  flex-direction:column;
  width:${MAIN_WIDTH};
  margin-top:${HEADER_HEIGHT};
  min-height:auto;
  padding:6px;
  flex-wrap: wrap;
  @media(max-width: ${MEDIA_QUERY_BREAKPOINTS.mobile}) {
    grid-template-columns:repeat(1,1fr);
    width:100%;
  }
`;

export const Image = styled.img`
  margin-top:60px;
  width:100%;
  margin-bottom:40px;
  @media(max-width: ${MEDIA_QUERY_BREAKPOINTS.mobile}) {
    margin-top:10px;
    margin-bottom:10px;
  }
`;

export const ProjectName = styled.h3`
  margin-top:50px;
  font-size:26px;
  color:#303030;
`;

export const ProjectLocation = styled.h3`
  margin-top:40px;
  font-size:16px;
  color:#777777;
`;

export const ProjectDescription = styled.p`
  margin-top:30px;
  color: #6d6d6d;
  font-size: 16px;
  line-height: 26px;
`;