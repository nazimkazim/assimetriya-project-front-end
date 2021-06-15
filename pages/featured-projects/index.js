import { HeaderComponent } from '../../sharedComponents/Header/index';
import { homeImages } from '../home-images';
import { Container, ImageContainner, ImageItem, Cover, Type, Name } from './styles';
import { useRouter } from 'next/router';


const Featuredpage = () => {
  const path = useRouter();
  const pathName = path.pathname;
  console.log(pathName);
  console.l;
  return (
    <Container>
      <HeaderComponent pathName={ pathName } />
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