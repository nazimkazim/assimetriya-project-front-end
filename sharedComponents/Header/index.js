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
  const [windowHeight, setWindowHeight] = useState(null);
  const path = useRouter();
  const pathName = path.pathname;

  useEffect(() => { return () => { }; }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [openMenu]);

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

  console.log(windowHeight);

  return (
    <Container pathName={ pathName }>
      <Content
        openMenu={ openMenu }
        pathName={ pathName }
        windowHeight={ windowHeight }
      >
        <Logo openMenu={ openMenu }>
          <Link href={ "/" }>
            <img src="https://res.cloudinary.com/nzmai/image/upload/v1627899961/assimetriya-project/logo_new.svg" />
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
