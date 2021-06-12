import { HeaderComponent } from '../sharedComponents/Header';
import { Container, ImageContainer } from './index.styles';
import Image from 'next/image';
import { homeImages } from './home-images';


export default function Home() {

  return (
    <Container>
      <HeaderComponent />
      <ImageContainer>
        <Image
          src={ homeImages[3].src }
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
        />
      </ImageContainer>
    </Container>

  );
}
