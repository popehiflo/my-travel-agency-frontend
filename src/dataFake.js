import { v4 as uuidv4 } from 'uuid';
import img1 from './assets/imgs/tour01-machupicchu.jpg';
import img2 from './assets/imgs/tour02-trujillo.jpg';
import img3 from './assets/imgs/tour03-huacachina.jpg';
import img4 from './assets/imgs/tour04-arequipa.jpg';
import imgDefault from './assets/imgs/default-image.jpg';

const dataTours = [
  {
    id: uuidv4(),
    category: 'essential',
    imgs: [
      `${img1}`,
      `${imgDefault}`,
    ],
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
    itinerary: [
      {
        id: uuidv4(),
        day: 1,
        tramo: 'Llegada a Lima',
        description: 'Una ciudad que vive, donde el pasado se mezcla con el presente. Donde los palacios, monasterios y conventos coloniales existen en asombrosa armonía con modernas edificaciones y las más impresionantes y milenarias huacas Pre-incas. Ya sea en el zaguán de una vieja casona o en la profundidad de una lúgubre catacumba. Lima, la ciudad de los reyes te espera, para deslumbrarte con su magia y embriagarte con su sabor. Al llegar al aeropuerto de Lima, un anfitrión lo recibirá y lo asistirá en su traslado y registro en el hotel.',
      },
      {
        id: uuidv4(),
        day: 2,
        tramo: 'Lima - Cusco - Visita a la Ciudad & 4 Ruinas',
        description: 'A la hora indicada, el traslado al aeropuerto, donde tienen el vuelo con destino a Cusco y vuestra llegada los recogemos del aeropuerto y traslado hacia vuestro hotel. Por la tarde los consagraremos con la visita a la antigua capital del imperio Inca y actual capital arqueológica de América; la visita comienza con la Catedral de Cusco, la cual se encuentra decorada el interior con muchos retablos en pan de oro al igual que sus cuadros que datan de la escuela cusqueña, luego el templo del sol, más conocido como Q’oricancha. Luego visitamos los sitios arqueológicos Incas, como son los complejos de Tambomachay, Puca Pucara, Q’enqo y el impresionante sitio de Sacsayhuamán; construida estratégicamente en una colina con vista a la ciudad del Cusco. Sus enormes muros de piedras fueron tallados y unidos con precisión de manera sorprendente. Algunas de estas piedras sobrepasan los 9 pies de altura y pesan más de 100 toneladas.',
      },
      {
        id: uuidv4(),
        day: 3,
        tramo: 'Cusco - Tipon - Pikillacta - Andahuaylillas',
        description: 'Este día comenzaremos a explorar el Valle Sagrado de los Incas, a orillas del río Vilcanota. La excursión comienza con la ciudadela Inca de Pisaq, compuesta por terrazas, fuentes, observatorios y un cementerio, el más grande de la región, este fue un punto de control y dominio de los Incas en el Valle Sagrado. Luego de la visita guiada bajaremos al poblado y nos dirigiremos al mercado tradicional de Pisaq, allí tendremos la oportunidad de descubrir las costumbres de la gente y también de regatear con los vendedores sus artesanías; luego continuaremos hacia el corazón del Valle Sagrado de Urubamba, donde se tiene el almuerzo y luego salimos rumbo a la fortaleza de Ollantaytambo, situado en la colina que domina el pueblo, se destacan edificios como el Templo del Sol y sus gigantescos monolitos: el Mañaracay o Salón Real, el Incahuatana y los Baños de la Princesa. En la parte superior sobresale una fortaleza, con una serie de terrazas de piedra labrada, construida para vigilar el ingreso a esta parte del valle y protegerlo de posibles invasiones de los pueblos de la Selva. Luego de la visita nos dirigimos hacia la estación de tren para salir rumbo a Aguas Calientes, a vuestra llegada traslado hacia vuestro hotel.',
      },
    ],
    banner: true,
    popular: true,
  },
  {
    id: uuidv4(),
    category: 'essential',
    imgs: [
      `${img4}`,
      `${imgDefault}`,
    ],
    title: 'Discovering Southern Peru',
    slug: 'discovering-southern-peru',
    duration: {
      days: 10,
      nights: 9,
    },
    price: 1500,
    information: 'This trip will allow you to discover the main places that are the hallmark of Peru. It starts in the capital city, Lima.',
    banner: true,
    popular: true,
  },
  {
    id: uuidv4(),
    category: 'essential',
    imgs: [
      `${img2}`,
      `${imgDefault}`,
    ],
    title: 'Treasures of Northern Peru',
    slug: 'treasures-of-northern-peru',
    duration: {
      days: 13,
      nights: 12,
    },
    price: 1300,
    information: 'Northern Peru is a place full of varied geography and historical sites. There are: Trujillo; with an immense archaeological wealth, it possesses diverse.',
    banner: true,
    popular: true,
  },
  {
    id: uuidv4(),
    category: 'essential',
    imgs: [
      'https://i.ibb.co/L52MdQ3/psycoterapy-img.png',
    ],
    title: 'In Search of the Temples of the Sun Peru & Bolivia',
    slug: 'in-search-of-the-temples-of-the-sun-peru-bolivia',
    duration: {
      days: 13,
      nights: 3,
    },
    price: 2400,
    information: 'This trip combines the cultural and natural richness of the two sister countries, Peru and Bolivia. We will visit the region of Cusco and the.',
    banner: false,
    popular: false,
  },
  {
    id: uuidv4(),
    category: 'trekking-nature',
    imgs: [
      `${img1}`,
      `${imgDefault}`,
    ],
    title: 'Consulta nro 5 del doctor X',
    slug: 'consulta-nro-5-del-doctor-x',
    duration: {
      days: 4,
      nights: 3,
    },
    price: 200,
    information: 'El topónimo de la ciudad fue el quechua Qosqo, que significa centro, ombligo, cinturón. Esto porque, según la mitología Inca, en ella confluyen el mundo de abajo (Uku Pacha) con el mundo visible (Kay Pacha) y el mundo superior (Hanan Pacha). De este modo, la ciudad fue y es llamada el ombligo del mundo, en referencia al universo. El Cusco, una región con los más bellos paisajes del planeta, coronada por seis montes de más de 6,000 metros sobre el nivel del mar, es la ciudad más antigua del hemisferio occidental y la cuna de la civilización Incaica. Reconocida a nivel mundial por los maravillosos restos arqueológicos encontrados, como la ciudadela de Machupicchu.',
    banner: false,
    popular: false,
  },
  {
    id: uuidv4(),
    category: 'trekking-nature',
    imgs: [
      `${img2}`,
      `${imgDefault}`,
    ],
    title: 'Consulta con el nombre del servicio un poco largo',
    slug: 'consulta-con-el-nombre-del-servicio-un-poco-largo',
    duration: {
      days: 4,
      nights: 3,
    },
    information: 'El topónimo de la ciudad fue el quechua Qosqo, que significa centro, ombligo, cinturón. Esto porque, según la mitología Inca, en ella confluyen el mundo de abajo (Uku Pacha) con el mundo visible (Kay Pacha) y el mundo superior (Hanan Pacha). De este modo, la ciudad fue y es llamada el ombligo del mundo, en referencia al universo. El Cusco, una región con los más bellos paisajes del planeta, coronada por seis montes de más de 6,000 metros sobre el nivel del mar, es la ciudad más antigua del hemisferio occidental y la cuna de la civilización Incaica. Reconocida a nivel mundial por los maravillosos restos arqueológicos encontrados, como la ciudadela de Machupicchu.',
    banner: false,
    popular: false,
  },
  {
    id: uuidv4(),
    category: 'trekking-nature',
    imgs: [
      `${img3}`,
      `${imgDefault}`,
    ],
    title: 'Consulta con el nombre del servicio un poco largo',
    slug: 'consulta-con-el-nombre-del-servicio-un-poco-largo',
    duration: {
      days: 4,
      nights: 3,
    },
    information: 'El topónimo de la ciudad fue el quechua Qosqo, que significa centro, ombligo, cinturón. Esto porque, según la mitología Inca, en ella confluyen el mundo de abajo (Uku Pacha) con el mundo visible (Kay Pacha) y el mundo superior (Hanan Pacha). De este modo, la ciudad fue y es llamada el ombligo del mundo, en referencia al universo. El Cusco, una región con los más bellos paisajes del planeta, coronada por seis montes de más de 6,000 metros sobre el nivel del mar, es la ciudad más antigua del hemisferio occidental y la cuna de la civilización Incaica. Reconocida a nivel mundial por los maravillosos restos arqueológicos encontrados, como la ciudadela de Machupicchu.',
    banner: false,
    popular: false,
  },
  {
    id: uuidv4(),
    category: 'spiritual-journeys',
    imgs: [
      `${img3}`,
      `${imgDefault}`,
    ],
    title: 'Consulta con el nombre del servicio un poco largo',
    slug: 'consulta-con-el-nombre-del-servicio-un-poco-largo',
    duration: {
      days: 4,
      nights: 3,
    },
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

export function getTourBySlug(slug) {
  return dataTours.find((item) => item.slug === slug);
}

export function getToursByPopularity() {
  return dataTours.filter((item) => item.popular);
}

export function getToursByBanner() {
  return dataTours.filter((item) => item.banner);
}
