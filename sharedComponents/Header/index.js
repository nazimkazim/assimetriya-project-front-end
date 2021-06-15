import { useState } from 'react';
import { Content, Logo, Menu, LinkItem } from './styles';
import { Links } from './Link';
import Link from 'next/link';


export const HeaderComponent = ({ pathName }) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <Content openMenu={ openMenu } pathName={ pathName }>
      <Logo onClick={ () => setOpenMenu(!openMenu) }>
        <img src="https://res.cloudinary.com/nzmai/image/upload/v1623471885/assimetriya-project/logo.svg" />
      </Logo>
      <Menu openMenu={ openMenu }>
        { Links.map(item => (
          <LinkItem pathName={ pathName } key={ item.id }><Link href={ item.link } >{ item.name }</Link></LinkItem>
        )) }
      </Menu>
    </Content>
  );
};