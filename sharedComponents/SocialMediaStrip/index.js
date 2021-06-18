import { Strip, Circle } from '../../styles/social.media.strip';
import { SocialMediaIcons } from './data';
export const SocialMediaStrip = () => {
  return (
    <Strip>
      { SocialMediaIcons.map(item => (
        <Circle>{ item.logo }</Circle>
      )) }
    </Strip>
  );
};
