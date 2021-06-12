import { Header, Content, Logo, Menu } from './styles';
import { Links } from './Link';


export const HeaderComponent = () => {
  return (
    <Header>
      <Content>
        <Logo>Logo</Logo>
        <Menu>
          { Links.map(item => (
            <li key={ item.id }>{ item.name }</li>
          )) }
        </Menu>
      </Content>
    </Header>
  );
};