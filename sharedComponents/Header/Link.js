import { v4 as uuidv4 } from 'uuid';

export const Links = [
  {
    name: 'home',
    link: '/',
    id: uuidv4()
  }, {
    name: 'selected projects',
    link: '/featured-projects',
    id: uuidv4()
  }, {
    name: 'about us',
    link: '/about-us',
    id: uuidv4()
  }, {
    name: 'media',
    link: '/media',
    id: uuidv4()
  }, {
    name: 'contact',
    link: '/contact',
    id: uuidv4()
  }
];