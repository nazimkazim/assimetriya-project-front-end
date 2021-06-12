import { Header, Content, Logo, Menu, Link } from './styles';
import { Links } from './Link';


export const HeaderComponent = () => {
  return (
    <Header>
      <Content>
        <Logo>
          <img src="https://res.cloudinary.com/nzmai/image/upload/v1623471885/assimetriya-project/logo.svg" />
        </Logo>
        <Menu>
          { Links.map(item => (
            <Link key={ item.id }>{ item.name }</Link>
          )) }
        </Menu>
      </Content>
    </Header>
  );
};