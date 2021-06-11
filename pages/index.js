import styles from '../styles/Home.module.scss';
import { Wave } from '../sharedComponents/wave';

import { useEffect, useState } from 'react';

export default function Home() {
  const [mutedVideo, setMuted] = useState(true);

  return (
    <div className={ styles.container }>
      <Wave mutedVideo={ mutedVideo } playVideo={ () => setMuted(!mutedVideo) } />

      <video autoPlay={ true } muted={ mutedVideo } loop controls={ false }>
        <source src="bck_video.mp4" type="video/mp4">
        </source>
      </video>
    </div>
  );
}
