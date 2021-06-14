import { useState } from 'react';
import { Content, Logo, Menu, Link } from './styles';
import { Links } from './Link';


export const HeaderComponent = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <Content openMenu={ openMenu }>
      <Logo onClick={ () => setOpenMenu(!openMenu) }>
        <img src="https://res.cloudinary.com/nzmai/image/upload/v1623471885/assimetriya-project/logo.svg" />
      </Logo>
      <Menu openMenu={ openMenu }>
        { Links.map(item => (
          <Link key={ item.id }>{ item.name }</Link>
        )) }
      </Menu>
    </Content>

  );
};