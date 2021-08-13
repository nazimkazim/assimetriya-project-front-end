import { Strip, Circle } from '../../styles/social.media.strip';
import { SocialMediaIcons } from './data';
export const SocialMediaStrip = ({ marginTop }) => {
  return (
    <Strip marginTop={ marginTop }>
      { SocialMediaIcons.map(item => {
        return <Circle key={ item.id }>{ item.logo }</Circle>;
      }) }
    </Strip>
  );
};
