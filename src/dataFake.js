import { v4 as uuidv4 } from 'uuid';
import img1 from './assets/imgs/tour01-machupicchu.jpg';
import img2 from './assets/imgs/tour02-trujillo.jpg';
import img3 from './assets/imgs/tour03-huacachina.jpg';

const dataTours = [
  {
    id: uuidv4(),
    img: `${img1}`,
    title: 'Cusco, Capital Arqueológica de America',
    slug: 'cusco-capital-arqueologica-de-america',
    duration: {
      days: 9,
      nights: 8,
    },
    price: 1200,
    information: 'El topónimo de la ciudad fue el quechua Qosqo, que significa centro, ombligo, cinturón. Esto porque, según la mitología Inca, en ella confluyen el mundo de abajo (Uku Pacha) con el mundo visible (Kay Pacha) y el mundo superior (Hanan Pacha). De este modo, la ciudad fue y es llamada el ombligo del mundo, en referencia al universo. El Cusco, una región con los más bellos paisajes del planeta, coronada por seis montes de más de 6,000 metros sobre el nivel del mar, es la ciudad más antigua del hemisferio occidental y la cuna de la civilización Incaica. Reconocida a nivel mundial por los maravillosos restos arqueológicos encontrados, como la ciudadela de Machupicchu.',
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
    img: `${img3}`,
    title: 'Psicoterapia de otro doctor',
    slug: 'psicoterapia-de-otro-doctor',
    duration: {
      days: 4,
      nights: 3,
    },
    price: 200,
    description: 'Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing.',
    information: 'El topónimo de la ciudad fue el quechua Qosqo, que significa centro, ombligo, cinturón. Esto porque, según la mitología Inca, en ella confluyen el mundo de abajo (Uku Pacha) con el mundo visible (Kay Pacha) y el mundo superior (Hanan Pacha). De este modo, la ciudad fue y es llamada el ombligo del mundo, en referencia al universo. El Cusco, una región con los más bellos paisajes del planeta, coronada por seis montes de más de 6,000 metros sobre el nivel del mar, es la ciudad más antigua del hemisferio occidental y la cuna de la civilización Incaica. Reconocida a nivel mundial por los maravillosos restos arqueológicos encontrados, como la ciudadela de Machupicchu.',
    banner: true,
    popular: true,
  },
  {
    id: uuidv4(),
    img: `${img2}`,
    title: 'Psicoterapia de otro doctor nro 3',
    slug: 'psicoterapia-de-otro-doctor-nro-3',
    duration: {
      days: 4,
      nights: 3,
    },
    price: 200,
    description: 'Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing.',
    information: 'El topónimo de la ciudad fue el quechua Qosqo, que significa centro, ombligo, cinturón. Esto porque, según la mitología Inca, en ella confluyen el mundo de abajo (Uku Pacha) con el mundo visible (Kay Pacha) y el mundo superior (Hanan Pacha). De este modo, la ciudad fue y es llamada el ombligo del mundo, en referencia al universo. El Cusco, una región con los más bellos paisajes del planeta, coronada por seis montes de más de 6,000 metros sobre el nivel del mar, es la ciudad más antigua del hemisferio occidental y la cuna de la civilización Incaica. Reconocida a nivel mundial por los maravillosos restos arqueológicos encontrados, como la ciudadela de Machupicchu.',
    banner: true,
    popular: true,
  },
  {
    id: uuidv4(),
    img: 'https://i.ibb.co/L52MdQ3/psycoterapy-img.png',
    title: 'Terapia nro 4',
    slug: 'terapia-nro-4',
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
    popular: true,
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
