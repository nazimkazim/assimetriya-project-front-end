import { v4 as uuidv4 } from 'uuid';

export const Links = [
  {
    name: 'home',
    link: '/',
    id: uuidv4()
  }, {
    name: 'projects',
    link: '/featured-projects',
    id: uuidv4()
  }, {
    name: 'about',
    link: '/about-us',
    id: uuidv4()
  }, {
    name: 'contact',
    link: '/contact',
    id: uuidv4()
  }
];