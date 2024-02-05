import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode, FaJs, FaJava, FaBootstrap, FaReact, FaPython, FaFlask,
} from 'react-icons/fa';
import {FiFileText, FiUser, FiExternalLink, FiServer} from 'react-icons/fi';

import ErgoProxy from './assets/ergoproxy.png';
import Texhnolyze from './assets/texhnolyze.jpeg';
import Netflight from './assets/netflight.png';
import Switch from './assets/switch.jpg';
import Morito from './assets/Morito.png';
import EchoText from './assets/EchoText.png';

import ProgramaONE from './assets/ProgramaONE.pdf';
import JavaOO from './assets/JavaOO.pdf';
import PrinProg from './assets/PrinProg.pdf';


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
  SiAmazonaws,
  SiCss3, SiExpress,
  SiFacebook, SiFirebase, SiGit, SiGithub,
  SiGooglecloud, SiHtml5,
  SiJquery, SiLinkedin, SiMeta,
  SiMicrosoftazure,
  SiMongodb, SiNginx,
  SiNodedotjs, SiOpenai,
  SiPostgresql, SiReact,
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
    name: 'Información',
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
    title: 'Desarrollo web Back-End <span> Pontificia Universidad Católica del Perú </span>',
    desc: 'Desarrollo de una página web de estadísticas deportivas implementando una API Rest en Django (Python) y PostgreSQL para la base de datos.',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: 'abril 2019 - presente',
    title: 'Ing. de Telecomunicaciones <span> Pregrado </span>',
    desc: ' Estudiante del octavo ciclo de la Pontificia Universidad Católica del Perú ',
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
    desc: 'Estudiante del Programa Oracle Next Education y seleccionado como "ALumniONE" al completar los siguientes módulos: <br>' +
        '- Formación en Java y Spring | septiembre 2023 - octubre 2023 <br>' +
        '- Formación en SQL con MySQL | noviembre 2023 - presente <br>' +
        '- Formación en Data Science | noviembre 2023 - presente <br>',
  },

  {
    id: 7,
    category: 'education',
    icon: <FaGraduationCap />,
    year: 'octubre 2023 - diciembre 2023',
    title: 'Conocimientos en la nube <span> Desafío Formativo </span>',
    desc: 'Estudiante del desafío de GitHub Universe Cloud Skills Challenge, elaborado por Microsoft ' +
        ' en la plataforma de Microsoft Learn',
  },
];

export const skills = [
  {
    id: 1,
    icon: <SiGooglecloud />,
    title: 'Google Cloud',
    percentage: '100',
  },

  {
    id: 2,
    icon: <SiFirebase />,
    title: 'Google Firebase',
    percentage: '100',
  },

  {
    id: 3,
    icon: <SiMicrosoftazure />,
    title: 'Microsoft Azure',
    percentage: '100',
  },

  {
    id: 4,
    icon: <SiAmazonaws />,
    title: 'Amazon AWS',
    percentage: '100',
  },

  {
    id: 5,
    icon: <FaJava />,
    title: 'Java',
    percentage: '82',
  },

  {
    id: 6,
    icon: <SiSpring />,
    title: 'Spring',
    percentage: '75',
  },

  {
    id: 7,
    icon: <SiHtml5 />,
    title: 'Html',
    percentage: '80',
  },

  {
    id: 8,
    icon: <SiCss3 />,
    title: 'Css',
    percentage: '70',
  },

  {
    id: 9,
    icon: <FaJs />,
    title: 'Javascript',
    percentage: '55',
  },

  {
    id: 10,
    icon: <SiJquery />,
    title: 'JQuery',
    percentage: '22',
  },

  {
    id: 11,
    icon: <SiNodedotjs />,
    title: 'NodeJS',
    percentage: '24',
  },

  {
    id: 12,
    icon: <SiReact />,
    title: 'ReactJS',
    percentage: '24',
  },

  {
    id: 13,
    icon: <SiExpress />,
    title: 'ExpressJS',
    percentage: '24',
  },

  {
    id: 14,
    icon: <FaPython />,
    title: 'Python',
    percentage: '24',
  },

  {
    id: 15,
    icon: <FaFlask />,
    title: 'Flask',
    percentage: '24',
  },
  {
    id: 16,
    icon: <SiGit />,
    title: 'Git',
    percentage: '24',
  },

  {
    id: 17,
    icon: <GrMysql />,
    title: 'MySQL',
    percentage: '62',
  },

  {
    id: 18,
    icon: <SiPostgresql />,
    title: 'PostgreSQL',
    percentage: '25',
  },

  {
    id: 19,
    icon: <SiMongodb />,
    title: 'MongoDB',
    percentage: '8',
  },


];

export const certificates = [
  {
    id: 1,
    pdf: ProgramaONE,
    title: 'Oracle Next Education - Programa ONE',
  },

  {
    id: 2,
    pdf: JavaOO,
    title: 'Oracle Next Education - Java Orientado a Objetos',
  },

  {
    id: 3,
    pdf: PrinProg,
    title: 'Oracle Next Education - Principios de Programación',
  },
  {
    id: 1,
    pdf: ProgramaONE,
    title: 'Oracle Next Education - Programa ONE',
  },

  {
    id: 2,
    pdf: JavaOO,
    title: 'Oracle Next Education - Java Orientado a Objetos',
  },

  {
    id: 3,
    pdf: PrinProg,
    title: 'Oracle Next Education - Principios de Programación',
  },
    ]

export const portfolio = [
  {
    id: 1,
    img: ErgoProxy,
    icons: [
        {
        icon : <FaJava/>,
        },
      {
        icon : <FaBootstrap/>,
      },
      {
        icon : <GrMysql/>,
      },
      {
        icon : <SiGooglecloud/>,
      },
    ],
    title: 'Ergo Proxy',
    details: [
      {
        icon: <FiFileText />,
        title: 'Proyecto : ',
        desc: 'E-Commerce de videojuegos',
      },
      {
        icon: <FiUser />,
        title: 'Servidores : ',
        desc: 'Tomcat Apache, Google Cloud Platform',
      },
      {
        icon: <FaCode />,
        title: 'Tecnologías : ',
        desc: 'Java JakartaEE, HTML, CSS, Javascript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'En construccion',
      },
    ],
  },

  {
    id: 2,
    img: Texhnolyze,
    icons: [
        {
          icon : <FaJava/>,
        },
      {
        icon : <SiSpring/>,
      },
      {
        icon : <FaBootstrap/>,
      },
      {
        icon : <FaJs/>,
      },
      {
        icon : <GrMysql/>,
      },
      {
        icon : <SiGooglecloud/>,
      },
    ],
    title: 'Texhnolyze',
    details: [
      {
        icon: <FiFileText />,
        title: 'Proyecto : ',
        desc: 'Sistema de gestión de equipos',
      },
      {
        icon: <FiServer />,
        title: 'Servidores : ',
        desc: 'Apache2, Tomcat Apache, Google Cloud Platform',
      },
      {
        icon: <FaCode />,
        title: 'Tecnologías : ',
        desc: 'Java Spring, HTML, CSS, JavaScript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'En construccion',
      },
    ],
  },

  {
    id: 3,
    img: Netflight,
    title: 'Netflight',
    icons: [
      {
        icon : <FaReact/>,
      },
      {
        icon : <SiFirebase/>,
      },
      {
        icon : <SiMicrosoftazure/>,
      }
    ],
    details: [
      {
        icon: <FiFileText />,
        title: 'Proyecto : ',
        desc: 'Clon de Netflix',
      },
      {
        icon: <FiServer/>,
        title: 'Servidores : ',
        desc: 'Firebase, Azure Blob Storage',
      },
      {
        icon: <FaCode />,
        title: 'Tecnologías : ',
        desc: 'React JS, Node JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'netflight.mptechprojects.com',
      },
    ],
  },

  {
    id: 4,
    img: Switch,
    title: 'Switch',
    icons: [
      {
        icon : <FaReact/>,
      },
      {
        icon : <SiFirebase/>,
      },
      {
        icon : <SiMicrosoftazure/>,
      },
      {
        icon : <SiNginx/>,
      }
    ],
    details: [
      {
        icon: <FiFileText />,
        title: 'Proyecto : ',
        desc: 'Clon de Twitch',
      },
      {
        icon: <FiUser />,
        title: 'Servidores : ',
        desc: 'Firebase, NGINX, Microsoft Azure',
      },
      {
        icon: <FaCode />,
        title: 'Tecnologías : ',
        desc: 'React JS, Node JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'En construccion',
      },
    ],
  },

  {
    id: 5,
    img: Morito,
    title: 'Morito Bot',
    icons: [
      {
        icon : <FaPython/>,
      },
      {
        icon : <SiFirebase/>,
      },
      {
        icon : <SiMicrosoftazure/>,
      },
      {
          icon : <SiMeta/>,
      },
      {
          icon : <SiOpenai/>,
      },
    ],
    details: [
      {
        icon: <FiFileText />,
        title: 'Proyecto : ',
        desc: 'Chatbot implementado en Whatsapp',
      },
      {
        icon: <FiUser />,
        title: 'Servidores : ',
        desc: 'Firebase, Microsoft Azure, Whatsapp Cloud, OpenAI API',
      },
      {
        icon: <FaCode />,
        title: 'Tecnologías : ',
        desc: 'Python, Flask',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'moritobot.mptechprojects.com/',
      },
    ],
  },

  {
    id: 6,
    img: EchoText,
    title: 'EchoText',
    icons: [
      {
        icon : <FaPython/>,
      },
      {
        icon : <FaFlask/>,
      },
      {
        icon : <SiMicrosoftazure/>,
      },
      {
        icon : <SiOpenai/>,
      },
    ],
    details: [
      {
        icon: <FiFileText />,
        title: 'Proyecto : ',
        desc: 'Reconocimiento de voz con Python',
      },
      {
        icon: <FiUser />,
        title: 'Servidores : ',
        desc: 'Firebase, Microsoft Azure, OpenAI',
      },
      {
        icon: <FaCode />,
        title: 'Tecnologías : ',
        desc: 'Python, Flask',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'En construccion',
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
