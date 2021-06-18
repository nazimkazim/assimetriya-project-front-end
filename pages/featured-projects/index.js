import { useEffect, useState } from 'react';
import { HeaderComponent } from '../../sharedComponents/Header/index';
import { homeImages } from '../../home-images';
import { Container, ImageContainer, ImageItem, Cover, Type, Name } from '../../styles/featured.projects.styles';
import FilterStrip from '../../sharedComponents/FilterStrip';
import Link from 'next/link';
import { useRouter } from 'next/router';

const FeaturedPage = () => {

  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('All');
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const allTypes = homeImages.map(item => item.type);
    const uniqueTypes = ['All', ...new Set(allTypes)];
    setTypes(uniqueTypes);
  }, []);

  useEffect(() => {
    const projects = [...homeImages];
    setProjects(projects);
  }, []);

  useEffect(() => {
    const projects = [...homeImages];
    if (selectedType === 'All') {
      setProjects(projects);
    } else {
      const filteredProjects = projects.filter(project => project.type === selectedType);
      setProjects(filteredProjects);
    }

  }, [selectedType]);

  return (
    <Container>
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
        { projects.map((image) => (
          <Link href={ `/portfolio/${[image.id]}` }>
            <ImageItem
              initial={ { scale: 0.8, opacity: 0 } }
              animate={ {
                scale: 1,
                opacity: 1,
                transition: {
                  duration: 1.5
                }
              } }
              image={ image.src }
              key={ image.id }>
              <Cover></Cover>
              <Name>{ image.name }</Name>
              <Type>{ image.type }</Type>
            </ImageItem>
          </Link>
        )) }
      </ImageContainer>
    </Container>
  );
};

export default FeaturedPage;