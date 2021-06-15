import { HeaderComponent } from '../../sharedComponents/Header/index';
import { Container } from './styles';
import { useRouter } from 'next/router';


const Featuredpage = () => {
  const path = useRouter();
  const pathName = path.pathname;
  console.log(pathName);
  console.l;
  return (
    <Container>
      <HeaderComponent pathName={ pathName } />
    </Container>
  );
};

export default Featuredpage;