import { Container } from '../../styles/featured.projects.styles';
import { HeaderComponent } from '../../sharedComponents/Header/index';
import { AddressAndFormContainer, OneSecondSection, Title, Item } from '../../styles/contacts.styles';
import { ContactInfoContainer } from '../../styles/contacts.styles';
import Map from '../../sharedComponents/Map';
import { SocialMediaStrip } from '../../sharedComponents/SocialMediaStrip';
import { ADDRESS_CONTENT_TYPE } from '../../constants';
import { createClient } from 'contentful';
import ContactForm from '../../sharedComponents/ContactForm';

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  });

  const res = await client.getEntries({ content_type: ADDRESS_CONTENT_TYPE });

  return {
    props: {
      data: res.items
    },
    revalidate: 1
  };
}

const Contacts = ({ data }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const formData = {};
    Array.from(e.currentTarget.elements).forEach(field => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });
    fetch('/api/mail', {
      method: 'post',
      body: JSON.stringify(formData)
    });
  };
  return (
    <Container>
      <HeaderComponent />
      <Title>Contacts</Title>
      <ContactInfoContainer>
        <Map />
        <SocialMediaStrip marginTop="40px" />
        <AddressAndFormContainer>
          <OneSecondSection>
            { data.length > 0 ? data[0].fields.address.content[0].content.map(item => (
              <Item>{ item.content[0].content[0].value }</Item>
            )) : '' }
          </OneSecondSection>
          <OneSecondSection>
            <ContactForm handleOnSubmit={ handleOnSubmit } />
          </OneSecondSection>
        </AddressAndFormContainer>
      </ContactInfoContainer>
    </Container>
  );
};

export default Contacts;