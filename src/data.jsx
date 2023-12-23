import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode, FaHtml5, FaJs, FaJava,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.jpeg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpeg';
import Work4 from './assets/project-4.jpeg';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

import {
  SiCss3,
  SiFacebook, SiGithub,
  SiGooglecloud, SiHtml5,
  SiJquery, SiLinkedin,
  SiMicrosoftazure,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiSpring, SiWhatsapp
} from "react-icons/si";
import {GrMysql} from "react-icons/gr";

export const links = [
  {
    id: 1,
    name: 'Inicio',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'Sobre mí',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portafolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contacto',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'Nombres : ',
    description: 'Jose Luis',
  },

  {
    id: 2,
    title: 'Apellidos : ',
    description: 'Morillos Pinedo',
  },

  {
    id: 3,
    title: 'Edad : ',
    description: '22 años',
  },

  {
    id: 4,
    title: 'Nacionalidad : ',
    description: 'Peruana',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Disponible',
  },

  {
    id: 6,
    title: 'Sitio : ',
    description: 'Lima',
  },

  {
    id: 7,
    title: 'Número : ',
    description: '+51 903065898',
  },

  {
    id: 8,
    title: 'Correo : ',
    description: 'jmorillosp161@gmail.com',
  },

  {
    id: 9,
    title: 'Idiomas : ',
    description: 'Español Nativo, Inglés B1, Italiano A1',
  },
];

export const stats = [

  {
    id: 1,
    no: <SiLinkedin/>,
    title: '<strong>Linkedin</strong> <br /> <a href="https://www.linkedin.com/in/jmorillosp161/">/jmorillosp161</a>',
  },

  {
    id: 2,
    no: <SiGithub/>,
    title: '<strong>GitHub</strong> <br /> <a href="https://github.com/Joshe1601">/Joshe1601</a>',
  },

  {
    id: 3,
    no: <SiWhatsapp/>,
    title: '<strong>Whatsapp</strong> <br /> <a href="https://wa.me/+51951805121">/+51951805121</a>',
  },

  {
    id: 4,
    no: <SiFacebook/>,
    title: '<strong>Facebook</strong> <br /> <a href="https://www.facebook.com/jmorillospinedo/">/jmorillospinedo</a>',
  },

];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'abril 2023 - julio 2023',
    title: 'Desarrollo web Full Stack <span> Pontificia Universidad Católica del Perú </span>',
    desc: 'Desarrollo de una página web e-commerce de compra y venta de videojuegos implementando Jakarta EE (Java) para el Back-End; HTML, CSS y Bootstrap para el Front-End; MySQL para la base de datos y Google Cloud Platform para el despliegue utilizando el servidor web Tomcat Apache.',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'agosto 2023 - diciembre 2023',
    title: 'Desarrollo web Full Stack <span> Pontificia Universidad Católica del Perú </span>',
    desc: 'Desarrollo de una página web de análisis y gestión de inventarios de equipos implementando una API Rest y lógica en Spring Framework (Java) para el Back-End; HTML, JavaScript, CSS y Bootstrap para el Front-End; MySQL para la base de datos y Google Cloud Platform para el uso de Google Maps API, Cloud Storage, Big Query, Zona DNS y despliegue utilizando el servidor web Http Apache.',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'agosto 2023 - diciembre 2023',
    title: 'Desarrollo web Full Stack <span> Pontificia Universidad Católica del Perú </span>',
    desc: 'Desarrollo de una página web de análisis y gestión de inventarios de equipos implementando una API Rest y lógica en Spring Framework (Java) para el Back-End; HTML, JavaScript, CSS y Bootstrap para el Front-End; MySQL para la base de datos y Google Cloud Platform para el uso de Google Maps API, Cloud Storage, Big Query, Zona DNS y despliegue utilizando el servidor web Http Apache.',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: 'abril 2019 - presente',
    title: 'Ing. de Telecomunicaciones <span> Pregrado </span>',
    desc: ' Estudiante del décimo ciclo de la Pontificia Universidad Católica del Perú ',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: 'mayo 2020 - agosto 2021',
    title: 'Matemáticas <span> Pregrado </span>',
    desc: 'Estudiante del quinto ciclo de la Universidad Nacional Mayor de San Marcos',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: 'septiembre 2023 - diciembre 2023',
    title: 'Desarrollo Web <span> Formaciones </span>',
    desc: 'Estudiante del Programa Oracle Next Education F2 T5 y seleccionado como "ALumniONE" al completar los siguientes módulos:',
  },

  {
    id: 7,
    category: 'education',
    icon: <FaGraduationCap />,
    year: 'octubre 2023 - diciembre 2023',
    title: 'Conocimientos en la nube <span> Desafío Formativo </span>',
    desc: 'Estudiante del desafío de GitHub Universe Cloud Skills Challenge, el cual fue un programa elaborado por Microsoft Learn',
  },
];

export const skills = [
  {
    id: 1,
    icon: <FaJava />,
    title: 'Java',
    percentage: '82',
  },

  {
    id: 2,
    icon: <SiSpring />,
    title: 'Spring',
    percentage: '75',
  },

  {
    id: 3,
    icon: <SiHtml5 />,
    title: 'Html',
    percentage: '80',
  },

  {
    id: 4,
    icon: <SiCss3 />,
    title: 'Css',
    percentage: '70',
  },

  {
    id: 5,
    icon: <FaJs />,
    title: 'Javascript',
    percentage: '55',
  },

  {
    id: 6,
    icon: <SiNodedotjs />,
    title: 'NodeJS',
    percentage: '24',
  },

  {
    id: 7,
    icon: <SiJquery />,
    title: 'JQuery',
    percentage: '22',
  },

  {
    id: 8,
    icon: <GrMysql />,
    title: 'MySQL',
    percentage: '62',
  },

  {
    id: 9,
    icon: <SiPostgresql />,
    title: 'PostgreSQL',
    percentage: '25',
  },

  {
    id: 10,
    icon: <SiMongodb />,
    title: 'MongoDB',
    percentage: '8',
  },

  {
    id: 11,
    icon: <SiGooglecloud />,
    title: 'Google Cloud',
    percentage: '42',
  },

  {
    id: 12,
    icon: <SiMicrosoftazure />,
    title: 'Microsoft Azure',
    percentage: '12',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Photo Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Website Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Video Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Premium',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Video Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Premium',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Landing Page',
    details: [
      {
        title: 'Project : ',
        desc: 'Website',
      },
      {
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        title: 'Language : ',
        desc: 'React JS, Node JS',
      },
      {
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Photo Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dibble.com',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
