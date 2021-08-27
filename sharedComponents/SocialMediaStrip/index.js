import { Strip, Circle } from '../../styles/social.media.strip';
import { SocialMediaIcons } from './data';
import { SOCIAL_MEDIA_CONTENT_TYPE } from '../../constants';
import { createClient } from 'contentful';

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  });

  const res = await client.getEntries({ content_type: SOCIAL_MEDIA_CONTENT_TYPE });

  return {
    props: {
      c_socialMedia: res.items
    },
    revalidate: 1
  };
}

const SocialMediaStrip = ({ marginTop }) => {

  return (
    <Strip marginTop={ marginTop }>
      { SocialMediaIcons.map(item => {
        if (item.active)
          return <Circle href={ item.address } target="_blank" key={ item.id }>{ item.logo }</Circle>;
      }) }
    </Strip>
  );
};

export default SocialMediaStrip;
