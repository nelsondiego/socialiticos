export interface UserProfile {
  name: string;
  username: string;
  avatar: string;
  following: number;
  followers: number;
  posts: number;
  email: string;
}


export interface Post {
  id: number;
  username: string;
  displayName: string;
  avatar: string;
  content: string;
  timestamp: string;
  comments: number;
  likes: number;
  shares: number;
  image?: string;
}

export interface SuggestedUser {
  id: number;
  username: string;
  avatar: string;
}

export interface Trend {
  id: string;
  name: string;
}

export const userProfile: UserProfile = {
  name: "Antonio Lopez",
  username: "@antonio_lopez",
  avatar: "https://github.com/shadcn.png",
  email: "antonio@gmail.com",
  following: 230,
  followers: 1360,
  posts: 85,
};

function getRandomTimestamp(): string {
  const minutes = Math.floor(Math.random() * 120); // Random minutes up to 2 hours
  if (minutes < 60) {
    return `hace ${minutes} minutos`;
  } else {
    const hours = Math.floor(minutes / 60);
    return `hace ${hours} ${hours === 1 ? 'hora' : 'horas'}`;
  }
}

export const events = [
  {
    id: 1,
    title: "Debate presidencial",
    date: "15/05 - 20:00 - 22:00",
  },
  {
    id: 2,
    title: "Sesión parlamentaria",
    date: "18/05 - 09:00 - 14:00",
  },
  {
    id: 3,
    title: "Conferencia de prensa",
    date: "22/05 - 11:00 - 12:00",
  },
  {
    id: 4,
    title: "Elecciones municipales",
    date: "28/05 - 08:00 - 18:00",
  },
]

export const posts: Post[] = [
  {
    id: 1,
    username: "gilberto_gomez",
    displayName: "Gilberto Gómez",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    content: "La nueva reforma fiscal es un golpe directo a la clase media. ¿Cuándo entenderán que no se puede crecer ahogando a los contribuyentes?",
    timestamp: getRandomTimestamp(),
    comments: 45,
    likes: 287,
    shares: 98,
    image: "/post01.jpg",
  },
  {
    id: 2,
    username: "maria_rodriguez",
    displayName: "María Rodríguez",
    avatar: "https://randomuser.me/api/portraits/women/62.jpg",
    content: "El debate sobre la ley de seguridad nacional demuestra la falta de consenso en el parlamento. Necesitamos líderes que prioricen el diálogo por encima de la polarización.",
    timestamp: getRandomTimestamp(),
    comments: 32,
    likes: 176,
    shares: 54,
  },
  {
    id: 3,
    username: "carlos_sanchez",
    displayName: "Carlos Sánchez",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    content: "La inversión en energías renovables no es solo una cuestión ambiental, es una oportunidad económica que no podemos dejar pasar. El futuro es verde y sostenible.",
    timestamp: getRandomTimestamp(),
    comments: 58,
    likes: 412,
    shares: 201,
  },
  {
    id: 4,
    username: "laura_martinez",
    displayName: "Laura Martínez",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    content: "La brecha salarial sigue siendo una realidad. Necesitamos políticas concretas para garantizar la igualdad de oportunidades en el mercado laboral.",
    timestamp: getRandomTimestamp(),
    comments: 76,
    likes: 523,
    shares: 189,
    image: "/post02.jpg",
  },
  {
    id: 5,
    username: "pedro_ramirez",
    displayName: "Pedro Ramírez",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    content: "El aumento del presupuesto en defensa es cuestionable cuando hay tantas necesidades sociales sin atender. ¿Dónde están nuestras prioridades?",
    timestamp: getRandomTimestamp(),
    comments: 29,
    likes: 145,
    shares: 37,
  },
  {
    id: 6,
    username: "sofia_garcia",
    displayName: "Sofía García",
    avatar: "https://randomuser.me/api/portraits/women/56.jpg",
    content: "La educación pública necesita una reforma urgente. No podemos seguir formando a nuestros jóvenes con un sistema del siglo pasado.",
    timestamp: getRandomTimestamp(),
    comments: 63,
    likes: 389,
    shares: 112,
  },
  {
    id: 7,
    username: "javier_lopez",
    displayName: "Javier López",
    avatar: "https://randomuser.me/api/portraits/men/18.jpg",
    content: "La corrupción sigue siendo el cáncer de nuestra democracia. Necesitamos instituciones fuertes y transparentes para combatirla.",
    timestamp: getRandomTimestamp(),
    comments: 87,
    likes: 542,
    shares: 231,
  },
  {
    id: 8,
    username: "ana_torres",
    displayName: "Ana Torres",
    avatar: "https://randomuser.me/api/portraits/women/89.jpg",
    content: "El cambio climático es una realidad que no podemos seguir ignorando. Es hora de que nuestros líderes tomen medidas drásticas.",
    timestamp: getRandomTimestamp(),
    comments: 95,
    likes: 678,
    shares: 302,
    image: "/post03.jpg",
  },
  {
    id: 9,
    username: "miguel_fernandez",
    displayName: "Miguel Fernández",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    content: "La crisis migratoria requiere una respuesta humanitaria y coordinada. No podemos seguir cerrando los ojos ante el sufrimiento humano.",
    timestamp: getRandomTimestamp(),
    comments: 52,
    likes: 321,
    shares: 98,
  },
  {
    id: 10,
    username: "carmen_ruiz",
    displayName: "Carmen Ruiz",
    avatar: "https://randomuser.me/api/portraits/women/42.jpg",
    content: "La reforma del sistema de pensiones no puede esperar más. Necesitamos garantizar un futuro digno para nuestros mayores.",
    timestamp: getRandomTimestamp(),
    comments: 71,
    likes: 456,
    shares: 187,
  },
  {
    id: 11,
    username: "roberto_silva",
    displayName: "Roberto Silva",
    avatar: "https://randomuser.me/api/portraits/men/59.jpg",
    content: "La libertad de prensa está en peligro. Debemos defender a capa y espada el derecho a la información veraz y plural.",
    timestamp: getRandomTimestamp(),
    comments: 83,
    likes: 512,
    shares: 245,
    image: "/post04.jpg",
  },
  {
    id: 12,
    username: "elena_moreno",
    displayName: "Elena Moreno",
    avatar: "https://randomuser.me/api/portraits/women/71.jpg",
    content: "La inversión en I+D es fundamental para el progreso del país. Sin innovación, nos quedaremos atrás en la economía global.",
    timestamp: getRandomTimestamp(),
    comments: 59,
    likes: 387,
    shares: 156,
  },
  {
    id: 13,
    username: "david_ortiz",
    displayName: "David Ortiz",
    avatar: "https://randomuser.me/api/portraits/men/84.jpg",
    content: "La reforma electoral debe garantizar la representatividad real de todos los sectores de la sociedad. Necesitamos un sistema más justo y proporcional.",
    timestamp: getRandomTimestamp(),
    comments: 41,
    likes: 298,
    shares: 87,
    image: "/post05.jpg",
  },
];

