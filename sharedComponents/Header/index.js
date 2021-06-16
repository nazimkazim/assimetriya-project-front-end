import { useState } from 'react';
import { Content, Logo, Menu, LinkItem } from './styles';
import { Links } from './Link';
import Link from 'next/link';
import Media from 'react-media';
import { MEDIA_QUERY_BREAKPOINTS } from '../../constants';
import { VscChromeClose, VscMenu } from 'react-icons/vsc';


export const HeaderComponent = ({ pathName }) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Content openMenu={ openMenu } pathName={ pathName }>
      <Logo>
        <img src="https://res.cloudinary.com/nzmai/image/upload/v1623471885/assimetriya-project/logo.svg" />
        <Media queries={ { small: `(max-width: ${MEDIA_QUERY_BREAKPOINTS.mobile})` } }>
          { matches =>
            matches.small && !openMenu ? (
              <VscMenu size={ 30 } onClick={ () => setOpenMenu(!openMenu) } />
            ) : (
              <VscChromeClose size={ 30 } onClick={ () => setOpenMenu(!openMenu) } />
            )
          }
        </Media>
      </Logo>

      <Menu openMenu={ openMenu } pathName={ pathName }>
        { Links.map(item => (
          <LinkItem pathName={ pathName } key={ item.id }><Link href={ item.link } >{ item.name }</Link></LinkItem>
        )) }
      </Menu>

    </Content >
  );
};
