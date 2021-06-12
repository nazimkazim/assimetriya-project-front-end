import styles from '../styles/Home.module.scss';
import { Wave } from '../sharedComponents/wave';
import { useRef } from 'react';

import { useEffect, useState } from 'react';

export default function Home() {
  const [mutedVideo, setMuted] = useState(true);
  const cursorRef = useRef();

  useEffect(() => {
    function updateScrollPosition(e) {
      console.log(e);
      // update the scroll position
      cursorRef.current.setAttribute("style", `top: ${e.pageY}px; left: ${e.pageX}px;`);
    }

    if (cursorRef && cursorRef.current) {
      cursorRef.current.addEventListener("mousemove", updateScrollPosition, false);
      return function cleanup() {
        cursorRef.current.removeEventListener("mousemove", updateScrollPosition, false);
      };
    }
  }, []);

  console.log(cursorRef);


  return (
    <div className={ styles.container }>
      <div ref={ cursorRef } className={ styles.cursor }></div>
      <Wave mutedVideo={ mutedVideo } playVideo={ () => setMuted(!mutedVideo) } />

      <video autoPlay={ true } muted={ mutedVideo } loop controls={ false }>
        <source src="bck_video.mp4" type="video/mp4">
        </source>
      </video>
    </div>
  );
}
