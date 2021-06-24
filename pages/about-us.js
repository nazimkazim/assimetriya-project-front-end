import { HeaderComponent } from '../sharedComponents/Header';
import { Container } from '../styles/featured.projects.styles';
import { ProjectInfoContainer, ProjectName, ProjectDescription, Image } from '../styles/portfolio.styles';
import { createClient } from 'contentful';
import { ABOUT_US_CONTENT_TYPE } from '../constants';

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  });

  const res = await client.getEntries({ content_type: ABOUT_US_CONTENT_TYPE });

  return {
    props: {
      aboutUs: res.items
    },
    revalidate: 1
  };
}

const AboutUs = ({ aboutUs }) => {
  //console.log(aboutUs[0]);
  return (
    <Container>
      <HeaderComponent />
      <ProjectInfoContainer>
        <ProjectName>{ aboutUs[0].fields.header.toUpperCase() }</ProjectName>
        <small>{ aboutUs[0].fields.companyMetaTag }</small>
        <ProjectDescription>
          { aboutUs[0].fields.description.content[0].content[0].value }
        </ProjectDescription>
        { aboutUs[0] && aboutUs[0].fields && aboutUs[0].fields.gallery && aboutUs[0].fields.gallery.length > 0 && aboutUs[0].fields.gallery.map(item => (
          <Image
            src={ item.fields.file.url }
            alt={ item.fields.id }
            key={ item.fields.id }
          />
        )) }
      </ProjectInfoContainer>

    </Container>
  );
};

export default AboutUs;