import { v4 as uuidv4 } from 'uuid';
import img1 from './assets/imgs/tour01-machupicchu.jpg';
import img2 from './assets/imgs/tour02-trujillo.jpg';
import img3 from './assets/imgs/tour03-huacachina.jpg';
import img4 from './assets/imgs/tour04-arequipa.jpg';

const dataTours = [
  {
    id: uuidv4(),
    category: 'essential',
    img: `${img1}`,
    title: 'Cusco, Arqueological Capital of America',
    slug: 'cusco-arqueological-capital-of-america',
    duration: {
      days: 9,
      nights: 8,
    },
    price: 1200,
    information: 'The toponym of the city was the Quechua Qosqo, which means center, navel, belt. This is because, according to Inca mythology, en ella confluyen el mundo de abajo (Uku Pacha) con el mundo visible (Kay Pacha) y el mundo superior (Hanan Pacha). De este modo, la ciudad fue y es llamada el ombligo del mundo, en referencia al universo. El Cusco, una región con los más bellos paisajes del planeta, coronada por seis montes de más de 6,000 metros sobre el nivel del mar, es la ciudad más antigua del hemisferio occidental y la cuna de la civilización Incaica. Reconocida a nivel mundial por los maravillosos restos arqueológicos encontrados, como la ciudadela de Machupicchu.',
    includes: {
      include01: '08 noches incluidas',
      include02: 'Alojamiento en cómodos hoteles de categoría superior a 3 estrellas',
      include03: 'Transporte turístico',
    },
    description: 'Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing.',
    banner: true,
    popular: true,
  },
  {
    id: uuidv4(),
    category: 'essential',
    img: `${img4}`,
    title: 'Discovering Southern Peru',
    slug: 'discovering-southern-peru',
    duration: {
      days: 10,
      nights: 9,
    },
    price: 1500,
    description: 'Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing.',
    information: 'This trip will allow you to discover the main places that are the hallmark of Peru. It starts in the capital city, Lima.',
    banner: true,
    popular: true,
  },
  {
    id: uuidv4(),
    category: 'essential',
    img: `${img2}`,
    title: 'Treasures of Northern Peru',
    slug: 'treasures-of-northern-peru',
    duration: {
      days: 13,
      nights: 12,
    },
    price: 1300,
    description: 'Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing.',
    information: 'Northern Peru is a place full of varied geography and historical sites. There are: Trujillo; with an immense archaeological wealth, it possesses diverse.',
    banner: true,
    popular: true,
  },
  {
    id: uuidv4(),
    category: 'essential',
    img: 'https://i.ibb.co/L52MdQ3/psycoterapy-img.png',
    title: 'In Search of the Temples of the Sun Peru & Bolivia',
    slug: 'in-search-of-the-temples-of-the-sun-peru-bolivia',
    duration: {
      days: 13,
      nights: 3,
    },
    price: 2400,
    description: 'Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing.',
    information: 'This trip combines the cultural and natural richness of the two sister countries, Peru and Bolivia. We will visit the region of Cusco and the.',
    banner: false,
    popular: true,
  },
  {
    id: uuidv4(),
    category: 'trekking-nature',
    img: `${img1}`,
    title: 'Consulta nro 5 del doctor X',
    slug: 'consulta-nro-5-del-doctor-x',
    duration: {
      days: 4,
      nights: 3,
    },
    price: 200,
    description: 'Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing.',
    information: 'El topónimo de la ciudad fue el quechua Qosqo, que significa centro, ombligo, cinturón. Esto porque, según la mitología Inca, en ella confluyen el mundo de abajo (Uku Pacha) con el mundo visible (Kay Pacha) y el mundo superior (Hanan Pacha). De este modo, la ciudad fue y es llamada el ombligo del mundo, en referencia al universo. El Cusco, una región con los más bellos paisajes del planeta, coronada por seis montes de más de 6,000 metros sobre el nivel del mar, es la ciudad más antigua del hemisferio occidental y la cuna de la civilización Incaica. Reconocida a nivel mundial por los maravillosos restos arqueológicos encontrados, como la ciudadela de Machupicchu.',
    banner: false,
    popular: true,
  },
  {
    id: uuidv4(),
    category: 'trekking-nature',
    img: `${img2}`,
    title: 'Consulta con el nombre del servicio un poco largo',
    slug: 'consulta-con-el-nombre-del-servicio-un-poco-largo',
    duration: {
      days: 4,
      nights: 3,
    },
    description: 'Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing.',
    information: 'El topónimo de la ciudad fue el quechua Qosqo, que significa centro, ombligo, cinturón. Esto porque, según la mitología Inca, en ella confluyen el mundo de abajo (Uku Pacha) con el mundo visible (Kay Pacha) y el mundo superior (Hanan Pacha). De este modo, la ciudad fue y es llamada el ombligo del mundo, en referencia al universo. El Cusco, una región con los más bellos paisajes del planeta, coronada por seis montes de más de 6,000 metros sobre el nivel del mar, es la ciudad más antigua del hemisferio occidental y la cuna de la civilización Incaica. Reconocida a nivel mundial por los maravillosos restos arqueológicos encontrados, como la ciudadela de Machupicchu.',
    banner: false,
    popular: true,
  },
  {
    id: uuidv4(),
    category: 'trekking-nature',
    img: `${img3}`,
    title: 'Consulta con el nombre del servicio un poco largo',
    slug: 'consulta-con-el-nombre-del-servicio-un-poco-largo',
    duration: {
      days: 4,
      nights: 3,
    },
    description: 'Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing.',
    information: 'El topónimo de la ciudad fue el quechua Qosqo, que significa centro, ombligo, cinturón. Esto porque, según la mitología Inca, en ella confluyen el mundo de abajo (Uku Pacha) con el mundo visible (Kay Pacha) y el mundo superior (Hanan Pacha). De este modo, la ciudad fue y es llamada el ombligo del mundo, en referencia al universo. El Cusco, una región con los más bellos paisajes del planeta, coronada por seis montes de más de 6,000 metros sobre el nivel del mar, es la ciudad más antigua del hemisferio occidental y la cuna de la civilización Incaica. Reconocida a nivel mundial por los maravillosos restos arqueológicos encontrados, como la ciudadela de Machupicchu.',
    banner: false,
    popular: false,
  },
  {
    id: uuidv4(),
    category: 'spiritual-journeys',
    img: `${img3}`,
    title: 'Consulta con el nombre del servicio un poco largo',
    slug: 'consulta-con-el-nombre-del-servicio-un-poco-largo',
    duration: {
      days: 4,
      nights: 3,
    },
    description: 'Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing.',
    information: 'El topónimo de la ciudad fue el quechua Qosqo, que significa centro, ombligo, cinturón. Esto porque, según la mitología Inca, en ella confluyen el mundo de abajo (Uku Pacha) con el mundo visible (Kay Pacha) y el mundo superior (Hanan Pacha). De este modo, la ciudad fue y es llamada el ombligo del mundo, en referencia al universo. El Cusco, una región con los más bellos paisajes del planeta, coronada por seis montes de más de 6,000 metros sobre el nivel del mar, es la ciudad más antigua del hemisferio occidental y la cuna de la civilización Incaica. Reconocida a nivel mundial por los maravillosos restos arqueológicos encontrados, como la ciudadela de Machupicchu.',
    banner: false,
    popular: false,
  },
];

export function getAllTours() {
  return dataTours;
}

export function getTourById(id) {
  return dataTours.find((item) => item.id === id);
}

export function getToursByPopularity() {
  return dataTours.filter((item) => item.popular);
}

export function getToursByBanner() {
  return dataTours.filter((item) => item.banner);
}
