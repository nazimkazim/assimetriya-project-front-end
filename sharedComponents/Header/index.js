import { useState, useEffect } from 'react';
import { Content, Logo, Menu, LinkItem, Container } from './styles';
import { Links } from './Link';
import Link from 'next/link';
import Media from 'react-media';
import { MEDIA_QUERY_BREAKPOINTS } from '../../constants';
import { VscChromeClose, VscMenu } from 'react-icons/vsc';
import { useRouter } from 'next/router';

export const HeaderComponent = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const path = useRouter();
  const pathName = path.pathname;

  useEffect(() => { return () => { }; }, []);

  const callMatches = (matches) => {
    if (matches) {
      if (!openMenu) {
        return <VscMenu size={ 30 } onClick={ () => setOpenMenu(!openMenu) } />;
      } else {
        return <VscChromeClose size={ 30 } onClick={ () => setOpenMenu(!openMenu) } />;
      }
    }
    return;
  };

  return (
    <Container pathName={ pathName }>
      <Content openMenu={ openMenu } pathName={ pathName }>
        <Logo>
          <Link href={ "/" }>
            <img src="https://res.cloudinary.com/nzmai/image/upload/v1623471885/assimetriya-project/logo.svg" />
          </Link>
          <Media queries={ { small: `(max-width: ${MEDIA_QUERY_BREAKPOINTS.mobile})` } }>{ matches => matches.small && callMatches(matches.small) }</Media>
        </Logo>

        <Menu openMenu={ openMenu } pathName={ pathName }>
          { Links.map(item => (
            <LinkItem
              pathName={ pathName }
              key={ item.id }
              chosen={ pathName === item.link }
            >
              <Link href={ item.link }>
                { item.name }
              </Link>
            </LinkItem>
          )) }
        </Menu>
      </Content >
    </Container>
  );
};
