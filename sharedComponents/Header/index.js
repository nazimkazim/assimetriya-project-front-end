import { useState } from 'react';
import { Content, Logo, Menu, LinkItem } from './styles';
import { Links } from './Link';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import Media from 'react-media';
import { MEDIA_QUERY_BREAKPOINTS } from '../../constants';


export const HeaderComponent = ({ pathName }) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <Content openMenu={ openMenu } pathName={ pathName }>
      <Logo>
        <img src="https://res.cloudinary.com/nzmai/image/upload/v1623471885/assimetriya-project/logo.svg" />
        <Media queries={ { small: `(max-width: ${MEDIA_QUERY_BREAKPOINTS.mobile})` } }>
          { matches =>
            matches.small ? (
              <GiHamburgerMenu size={ 30 } onClick={ () => setOpenMenu(!openMenu) }></GiHamburgerMenu>
            ) : (
              ''
            )
          }
        </Media>
      </Logo>


      <Menu openMenu={ openMenu } pathName={ pathName }>
        { Links.map(item => (
          <LinkItem pathName={ pathName } key={ item.id }><Link href={ item.link } >{ item.name }</Link></LinkItem>
        )) }
      </Menu>

    </Content>
  );
};
