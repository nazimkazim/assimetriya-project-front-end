import { FaFacebook, FaInstagramSquare, FaTelegramPlane, FaWhatsappSquare } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
const size = 30;
const color = "#333";

export const SocialMediaIcons = [
  {
    logo: <FaFacebook size={ size } color={ color } />,
    address: 'https://www.facebook.com/profile.php?id=100070582666841',
    active: true,
    id: uuidv4()
  },
  {
    logo: <FaInstagramSquare size={ size } color={ color } />,
    address: 'https://instagram.com/asimmetriya.kz?utm_medium=copy_link',
    active: true,
    id: uuidv4()
  },
  {
    logo: <FaTelegramPlane size={ size } color={ color } />,
    active: false,
    address: 'www.google.com',
    id: uuidv4()
  },
  {
    logo: <FaWhatsappSquare size={ size } color={ color } />,
    active: false,
    address: 'www.google.com',
    id: uuidv4()
  }
];


