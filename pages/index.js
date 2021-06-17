import { useState } from 'react';
import { HeaderComponent } from '../sharedComponents/Header';
import { Container, ImageContainer } from '../styles/home.page.styles';
import Image from 'next/image';
import { homeImages } from '../home-images';
import { VscChevronRight, VscChevronLeft } from 'react-icons/vsc';
import styles from '../styles/Home.module.scss';


export default function Home() {
  const [current, setCurrent] = useState(0);
  const length = homeImages.length;


  if (!Array.isArray(homeImages) || homeImages.length <= 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <Container>
      <HeaderComponent />
      <VscChevronLeft className={ styles.arrowLeft } onClick={ prevSlide } />
      <VscChevronRight className={ styles.arrowRight } onClick={ nextSlide } />
      <ImageContainer>
        { homeImages.map((slide, index) => {
          return (
            <div key={ index }>
              { index === current && (
                <Image
                  src={ slide.src }
                  alt={ slide.name }
                  layout="fill"
                  objectFit="cover"
                />
              ) }
            </div>
          );
        }) }
      </ImageContainer>
    </Container >

  );
}
