import { Container } from "../../styles/featured.projects.styles";
import { HeaderComponent } from '../../sharedComponents/Header/index';
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import { ProjectInfoContainer, Image, ProjectName, ProjectLocation, ProjectDescription } from '../../styles/portfolio.styles';
import { SocialMediaStrip } from '../../sharedComponents/SocialMediaStrip';
import { createClient } from 'contentful';
import { PROJECTS_CONTENT_TYPE } from "../../constants";
import styles from '../../styles/Home.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';




export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  });

  const res = await client.getEntries({ content_type: PROJECTS_CONTENT_TYPE });

  return {
    props: {
      c_projects: res.items
    },
    revalidate: 1
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

  return (
    <Container>
      <HeaderComponent />
      <ProjectInfoContainer>
        <ProjectName>{ project && project.fields && project.fields.title }</ProjectName>
        <ProjectLocation>{ project && project.fields && project.fields.address }</ProjectLocation>
        <ProjectDescription>{ project && project.fields && project.fields.description && project.fields.description.content[0].content[0].value && project.fields.description.content[0].content[0].value }</ProjectDescription>
        <Image
          src={ project && project.fields && project.fields.mainPicture.fields.file.url }
          alt={ project && project.fields && project.fields.title }
        />
        { project && project.fields && project.fields.galleries && project.fields.galleries.length > 0 && project.fields.galleries.map(item => {
          //console.log(item);
          return <LazyLoadImage
            className={ styles.portFolioImage }
            height='auto'
            key={ item.sys.id }
            src={ item.fields.file.url } // use normal <img> attributes as props
            width='100%'
            effect="blur"
            placeholderSrc={ "https://res.cloudinary.com/nzmai/image/upload/v1627899961/assimetriya-project/logo_new.svg" }
          />;
        }) }
        <SocialMediaStrip />
      </ProjectInfoContainer>
    </Container>
  );
};

export default Portfolio;