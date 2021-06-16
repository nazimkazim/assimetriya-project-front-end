import { useEffect, useState } from 'react';
import { HeaderComponent } from '../../sharedComponents/Header/index';
import { homeImages } from '../../home-images';
import { Container, ImageContainer, ImageItem, Cover, Type, Name } from '../../styles/featured.projects.styles';
import { useRouter } from 'next/router';
import FilterStrip from '../../sharedComponents/FilterStrip';

const FeaturedPage = () => {
  const path = useRouter();
  const pathName = path.pathname;

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
      <HeaderComponent pathName={ pathName } />
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
        { projects.map((image, index) => (
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
            key={ index }>
            <Cover></Cover>
            <Name>{ image.name }</Name>
            <Type>{ image.type }</Type>
          </ImageItem>
        )) }
      </ImageContainer>
    </Container>
  );
};

export default FeaturedPage;