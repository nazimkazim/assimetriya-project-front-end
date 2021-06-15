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

  useEffect(() => {
    const allTypes = homeImages.map(item => item.type);
    const uniqueTypes = [...new Set(allTypes)];
    setTypes(uniqueTypes);
  }, []);

  return (
    <Container>
      <HeaderComponent pathName={ pathName } />
      <FilterStrip types={ types } />
      <ImageContainner>
        { homeImages.map(image => (
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