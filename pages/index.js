import { useState } from 'react';
import { HeaderComponent } from '../sharedComponents/Header';
import { Container, ImageContainer } from '../styles/home.page.styles';
import Image from 'next/image';
import { createClient } from 'contentful';
import { VscChevronRight, VscChevronLeft } from 'react-icons/vsc';
import styles from '../styles/Home.module.scss';
import { motion } from 'framer-motion';

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  });

  const res = await client.getEntries({ content_type: 'asymetriya' });

  return {
    props: {
      c_projects: res.items
    }
  };
}

export default function Home({ c_projects }) {
  const [current, setCurrent] = useState(0);

  const length = c_projects && c_projects.length;

  console.log(c_projects);


  if (!Array.isArray(c_projects) || c_projects.length <= 0) {
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
        { c_projects.map((slide, index) => {
          return (
            <div key={ index }>
              { index === current && (
                <motion.div
                  initial={ { opacity: 0.6 } }
                  animate={ { opacity: 1 } }
                  transition={ {
                    delay: 0.3,
                    duration: 0.5
                  } }
                >
                  <Image
                    src={ `https:${slide.fields.mainPicture.fields.file.url}` }
                    alt={ slide.name }
                    layout="fill"
                    objectFit="cover"
                  />
                </motion.div>
              )
              }
            </div>
          );
        }) }
      </ImageContainer>
    </Container >

  );
}
