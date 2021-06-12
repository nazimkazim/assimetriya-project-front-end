import styles from '../styles/Home.module.scss';
import { HeaderComponent } from '../sharedComponents/Header';

export default function Home() {

  return (
    <div className={ styles.container }>
      <HeaderComponent />
      
    </div>
  );
}
