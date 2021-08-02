import { useEffect, useState, Fragment } from 'react';
import { HeaderComponent } from '../../sharedComponents/Header/index';
import { Container, ImageContainer, ImageItem, Cover, Type, Name } from '../../styles/featured.projects.styles';
import FilterStrip from '../../sharedComponents/FilterStrip';
import Link from 'next/link';
import { createClient } from 'contentful';
import { PROJECTS_CONTENT_TYPE } from '../../constants';


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

const FeaturedPage = ({ c_projects }) => {
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('All');
  const [projects, setProjects] = useState([]);

  //console.log(c_projects);

  useEffect(() => {
    const allTypes = c_projects.map(item => item.fields.projectType);
    const uniqueTypes = ['All', ...new Set(allTypes)];
    setTypes(uniqueTypes);
  }, []);

  useEffect(() => {
    const projects = [...c_projects];
    setProjects(projects);
  }, []);

  useEffect(() => {
    const projects = [...c_projects];
    if (selectedType === 'All') {
      setProjects(projects);
    } else {
      const filteredProjects = projects.filter(project => project.fields.projectType === selectedType);
      setProjects(filteredProjects);
    }

  }, [selectedType]);

  return (
    <Container>
      <Fragment>
        <HeaderComponent />
        <FilterStrip types={ types } setSelectedType={ setSelectedType } selectedType={ selectedType } />
        <ImageContainer
          initial={ { x: -100, opacity: 0 } }
          animate={ {
            scale: 1,
            opacity: 1,
            x: 0,
            transition: {
              duration: 1
            }
          } }
        >
          { projects.length > 0 && projects.map((image) => (
            <Link href={ `/portfolio/${[image.sys.id]}` }>
              <ImageItem
                initial={ { scale: 0.8, opacity: 0 } }
                animate={ {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    duration: 1.5
                  }
                } }
                image={ image.fields.mainPicture.fields.file.url }
                key={ image.sys.id }>
                <Cover></Cover>
                <Name>{ image.fields.title }</Name>
                <Type>{ image.fields.projectType }</Type>
              </ImageItem>
            </Link>
          )) }
        </ImageContainer>
      </Fragment>
       }

    </Container>
  );
};

export default FeaturedPage;