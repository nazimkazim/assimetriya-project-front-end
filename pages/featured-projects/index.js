import { useEffect, useState } from 'react';
import { HeaderComponent } from '../../sharedComponents/Header/index';
import { homeImages } from '../home-images';
import { Container, ImageContainner, ImageItem, Cover, Type, Name } from './styles';
import { useRouter } from 'next/router';
import FilterStrip from './components/FilterStrip';


const Featuredpage = () => {
  const path = useRouter();
  const pathName = path.pathname;

  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('');
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
    }
    const filteredProjects = projects.filter(project => project.type === selectedType);
    setProjects(filteredProjects);
  }, [selectedType]);

  return (
    <Container>
      <HeaderComponent pathName={ pathName } />
      <FilterStrip types={ types } setSelectedType={ setSelectedType } selectedType={ selectedType } />
      <ImageContainner>
        { projects.map(image => (
          <ImageItem image={ image.src }>
            <Cover></Cover>
            <Name>{ image.name }</Name>
            <Type>{ image.type }</Type>
          </ImageItem>
        )) }
      </ImageContainner>
    </Container>
  );
};

export default Featuredpage;