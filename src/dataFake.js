import { v4 as uuidv4 } from 'uuid';
import img1 from './assets/imgs/tour01-machupicchu.jpg';
import img2 from './assets/imgs/tour02-trujillo.jpg';
import img3 from './assets/imgs/tour03-huacachina.jpg';
import img4 from './assets/imgs/tour04-arequipa.jpg';
import imgDefault from './assets/imgs/default-image.jpg';

const dataTours = [
  {
    id: uuidv4(),
    categories: ['essential', 'cultural'],
    imgs: [
      `${img1}`,
      `${imgDefault}`,
    ],
    title: 'Cusco, Arqueological Capital of America',
    slug: 'cusco-arqueological-capital-of-america',
    days: 9,
    nights: 8,
    price: 0,
    information: 'The toponym of the city was the Quechua Qosqo, which means center, navel, belt. This is because, according to Inca mythology, en ella confluyen el mundo de abajo (Uku Pacha) con el mundo visible (Kay Pacha) y el mundo superior (Hanan Pacha). De este modo, la ciudad fue y es llamada el ombligo del mundo, en referencia al universo. El Cusco, una región con los más bellos paisajes del planeta, coronada por seis montes de más de 6,000 metros sobre el nivel del mar, es la ciudad más antigua del hemisferio occidental y la cuna de la civilización Incaica. Reconocida a nivel mundial por los maravillosos restos arqueológicos encontrados, como la ciudadela de Machupicchu.',
    includes: {
      include01: '08 noches incluidas',
      include02: 'Alojamiento en cómodos hoteles de categoría superior a 3 estrellas',
      include03: 'Transporte turístico',
    },
    country: [
      'peru',
    ],
    level: [
      'moderate',
    ],
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
    categories: ['cultural'],
    imgs: [
      `${img4}`,
      `${imgDefault}`,
    ],
    title: 'Discovering Southern Peru',
    slug: 'discovering-southern-peru',
    days: 10,
    nights: 9,
    price: 1500,
    information: 'This trip will allow you to discover the main places that are the hallmark of Peru. It starts in the capital city, Lima.',
    country: [
      'peru',
    ],
    level: [
      'moderate',
    ],
    itinerary: [
      {
        id: '628e46d2f80467332da8e6c5',
        day: 1,
        tramo: 'Llegada a Lima',
        description: 'Una ciudad que vive, donde el pasado se mezcla con el presente. Donde los palacios, monasterios y conventos coloniales existen en asombrosa armonía con modernas edificaciones y las más impresionantes y milenarias huacas Pre-incas. Ya sea en el zaguán de una vieja casona o en la profundidad de una lúgubre catacumba. Lima, la ciudad de los reyes te espera, para deslumbrarte con su magia y embriagarte con su sabor. Al llegar al aeropuerto de Lima, un anfitrión lo recibirá y lo asistirá en su traslado y registro en el hotel.',
      },
      {
        id: '628e46d2f80467332da8e6c6',
        day: 2,
        tramo: 'Lima - Cusco - Visita a la Ciudad & 4 Ruinas',
        description: 'Por la mañana se tiene el vuelo con destino a Arequipa y a vuestra llegada, traslado al hotel. Por la tarde visitaremos los lugares emblemáticos de la ciudad y alrededores. Nuestra visita inicia con el mirador de «Carmen Alto» en este lugar observaremos los tres volcanes tutelares que rodean a la ciudad de Arequipa. Luego el distrito de Yanahuara para apreciar los portales construidos en sillar. Más tarde el monasterio de santa catalina que presenta una ciudadela, fundada en el año de 1579, así mismos daremos un paseo por la plaza de Armas y podremos observar la fachada de la basílica menor de Arequipa, con un estilo neoclásico y la iglesia de la compañía de Jesús. Más tarde en opción pueden visitar el museo santuarios andinos, donde se exhiben objetos y artefactos de la época pre – Inka e Inka, así como la famosa “momia juanita”, la niña de los hielos.',
      },
      {
        id: '628e46d2f80467332da8e6c7',
        day: 3,
        tramo: 'Cusco - Tipon - Pikillacta - Andahuaylillas',
        description: 'Después del desayuno, sobre las 7:30 am, nuestra movilidad pasará por su hotel para iniciar nuestro viaje a uno de los cañones más profundos del mundo, tomando la carretera de Yura, bordeando el nevado Chachani hacia pampa Cañahuas (Reserva Nacional de Aguada Blanca y Salinas) hábitat de los bellos camélidos sudamericanos, las vicuñas; así mismo podremos apreciar variedad de aves migratorias, entre los que se encuentran los flamencos. Nos detendremos en el mirador de los volcanes, que es también la zona más alta del camino (4,950 m.s.n.m.) desde donde apreciamos gran parte de la cordillera occidental, este lugar tiene un magnífico panorama de enormes volcanes nevados como el ampato (6,400m) y huallca huallca (6,025m). Luego estaremos llegando a Chivay y luego a vuestro hotel. Más tarde en opción pueden dirigirse hacia las aguas termales (37 °c) de “la calera” (opcional, con costo).',
      },
      {
        id: '628e46d2f80467332da8e6c8',
        day: 4,
        tramo: 'Chivay - Cruz del Condor - Chivay - Puno',
        description: 'Este será un magnífico día, ya que temprano se dirigirán hacia el mirador de la cruz del cóndor, donde por lo general, se pueden ver volar a las aves más grandes del mundo, los cóndores que con su vuelo majestuoso les brindarán un espectáculo fantástico e inolvidable. También les ofrecerá una magnífica vista del cañón que en horas de la mañana luce espectacular. De retorno pasaremos por pueblos como Yanque, Coporaque y Achomas, pueblos que aún mantienen sus tradiciones como sus trajes típicos, costumbre y podrán ver que no han cambiado nada desde la época de los Incas. Luego nos detendremos en el Pueblo de Maca, donde visitaremos su hermosa iglesia y sus calles de piedras entre otras atracciones, para luego retornar a Chivay donde se tiene tiempo para el almuerzo. Luego continuamos con el viaje hacia Puno y hacia vuestro hotel.',
      },
    ],
    banner: true,
    popular: true,
  },
  {
    id: uuidv4(),
    categories: ['cultural'],
    imgs: [
      `${img2}`,
      `${imgDefault}`,
    ],
    title: 'Treasures of Northern Peru',
    slug: 'treasures-of-northern-peru',
    days: 13,
    nights: 12,
    price: 1300,
    information: 'Northern Peru is a place full of varied geography and historical sites. There are: Trujillo; with an immense archaeological wealth, it possesses diverse.',
    country: [
      'peru',
    ],
    level: [
      'moderate',
    ],
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
    days: 13,
    nights: 3,
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
    days: 4,
    nights: 3,
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
    days: 4,
    nights: 3,
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
    days: 4,
    nights: 3,
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
    days: 4,
    nights: 3,
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

const dataTypeTours = [
  {
    id: uuidv4(),
    img: `${img1}`,
    title: 'Adventure',
    cat: 'adventure',
    description: 'Whether you prefer horse riding, birdwatching, hiking, or ziplining, we have the perfect adventure travel package for you! If that entails getting totally off the beaten track in the Amazon, or visiting remote, far off communities in The Andes, there are an abundance of adventure tours available in Peru.',
  },
  {
    id: uuidv4(),
    img: `${img2}`,
    title: 'Cultural',
    cat: 'cultural',
    description: 'Whether you prefer horse riding, birdwatching, hiking, or ziplining, we have the perfect adventure travel package for you! If that entails getting totally off the beaten track in the Amazon, or visiting remote, far off communities in The Andes, there are an abundance of adventure tours available in Peru.',
  },
  {
    id: uuidv4(),
    img: `${img3}`,
    title: 'Gastronomy',
    cat: 'gastronomy',
    description: 'Whether you prefer horse riding, birdwatching, hiking, or ziplining, we have the perfect adventure travel package for you! If that entails getting totally off the beaten track in the Amazon, or visiting remote, far off communities in The Andes, there are an abundance of adventure tours available in Peru.',
  },
  {
    id: uuidv4(),
    img: `${img4}`,
    title: 'Wellness',
    cat: 'wellness',
    description: 'Whether you prefer horse riding, birdwatching, hiking, or ziplining, we have the perfect adventure travel package for you! If that entails getting totally off the beaten track in the Amazon, or visiting remote, far off communities in The Andes, there are an abundance of adventure tours available in Peru.',
  },
  {
    id: uuidv4(),
    img: `${imgDefault}`,
    title: 'Local Living',
    cat: 'local-living',
    description: 'Whether you prefer horse riding, birdwatching, hiking, or ziplining, we have the perfect adventure travel package for you! If that entails getting totally off the beaten track in the Amazon, or visiting remote, far off communities in The Andes, there are an abundance of adventure tours available in Peru.',
  },
  {
    id: uuidv4(),
    img: 'https://i.ibb.co/L52MdQ3/psycoterapy-img.png',
    title: 'Luxury',
    cat: 'luxury',
    description: 'Loremipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: uuidv4(),
    img: 'https://i.ibb.co/L52MdQ3/psycoterapy-img.png',
    title: 'Essential',
    cat: 'essential',
    description: 'Loremipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

export function getAllTypeTours() {
  return dataTypeTours;
}
