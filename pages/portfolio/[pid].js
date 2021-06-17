import { Container } from "../../styles/featured.projects.styles";
import { HeaderComponent } from '../../sharedComponents/Header/index';
import { useRouter } from 'next/router';
import { homeImages } from '../../home-images';
import { useEffect, useState } from "react";

const Portfolio = () => {
  const [project, setProject] = useState('');
  const router = useRouter();
  const { pid } = router.query;
  useEffect(() => {
    const project = homeImages.find(project => project.id === pid);
    setProject(project);
  }, [pid]);
  console.log(project);

  return (
    <Container>
      <HeaderComponent />
      <div>{ project.name }</div>
      <div>{ project.type }</div>
      <img src={ project.src } />
    </Container>
  );
};

export default Portfolio;