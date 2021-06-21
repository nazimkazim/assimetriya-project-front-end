import { Container } from "../../styles/featured.projects.styles";
import { HeaderComponent } from '../../sharedComponents/Header/index';
import { useRouter } from 'next/router';
import { homeImages } from '../../home-images';
import { useEffect, useState } from "react";
import { ProjectInfoContainer, Image, ProjectName, ProjectLocation } from '../../styles/portfolio.styles';
import { SocialMediaStrip } from '../../sharedComponents/SocialMediaStrip';

const Portfolio = ({ homeImages }) => {
  const [projects, setProjects] = useState(homeImages);
  const [project, setProject] = useState({});
  const router = useRouter();
  const { pid } = router.query;


  useEffect(() => {
    setProjects(homeImages);
  }, [projects]);

  useEffect(() => {
    console.log(projects);
    const project = projects.find(project => project.id === pid);
    console.log(project);
    setProject(project);
  }, []);

  return (
    <Container>
      <HeaderComponent />
      <ProjectInfoContainer>
        <ProjectName>{ project && project.name }</ProjectName>
        <ProjectLocation>{ project && project.location }</ProjectLocation>
        <Image
          src={ project && project.src }
          alt={ project && project.name }
        />
        <SocialMediaStrip />
      </ProjectInfoContainer>
    </Container>
  );
};

export default Portfolio;