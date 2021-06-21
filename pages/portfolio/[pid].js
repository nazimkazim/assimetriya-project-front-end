import { Container } from "../../styles/featured.projects.styles";
import { HeaderComponent } from '../../sharedComponents/Header/index';
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import { ProjectInfoContainer, Image, ProjectName, ProjectLocation } from '../../styles/portfolio.styles';
import { SocialMediaStrip } from '../../sharedComponents/SocialMediaStrip';
import { createClient } from 'contentful';



export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  });

  const res = await client.getEntries({ content_type: 'asymetriya' });

  return {
    props: {
      c_projects: res.items
    }
  };
}

export const getStaticPaths = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking' //indicates the type of fallback
  };
};


const Portfolio = ({ c_projects }) => {
  const [project, setProject] = useState({});
  const router = useRouter();
  const { pid } = router.query;


  useEffect(() => {
    const project = c_projects.find(project => project.sys.id === pid);
    setProject(project);
  }, []);

  console.log(project);

  return (
    <Container>
      <HeaderComponent />
      <ProjectInfoContainer>
        <ProjectName>{ project && project.fields && project.fields.title }</ProjectName>
        <ProjectLocation>{ project && project.fields && project.fields.address }</ProjectLocation>
        <Image
          src={ project && project.fields && project.fields.mainPicture.fields.file.url }
          alt={ project && project.fields && project.fields.title }
        />
        { project && project.fields && project.fields.galleries.map(item => (
          <Image
            src={ item.fields.file.url }
            alt={ item.fields.id }
            key={ item.fields.id }
          />
        )) }
        <SocialMediaStrip />
      </ProjectInfoContainer>
    </Container>
  );
};

export default Portfolio;