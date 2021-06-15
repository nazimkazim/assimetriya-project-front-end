import { useEffect, useState } from 'react';
import { HeaderComponent } from '../sharedComponents/Header';
import { Container, ImageContainer } from './index.styles';
import Image from 'next/image';
import { homeImages } from './home-images';
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

  console.log(current);

  return (
    <Container>
      <HeaderComponent />
      <VscChevronLeft className={ styles.arrowLeft } onClick={ prevSlide } />
      <VscChevronRight className={ styles.arrowRight } onClick={ nextSlide } />
      <ImageContainer>
        { homeImages.map((slide, index) => {
          return (
            <div key={ index }>
              { index === current && <Image
                src={ slide.src }
                alt="Picture of the author"
                layout="fill"
                objectFit="cover"
              /> }

            </div>
          );
        }) }
        {/* <Image
          src={ homeImages[image].src }
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
        /> */}
      </ImageContainer>
    </Container>

  );
}
