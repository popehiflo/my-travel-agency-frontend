import { BrowserRouter } from 'react-router-dom';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
import Tours from './pages/Tours';

const App = () => (
  <BrowserRouter>
    <Header />
    <Banner />
    <Tours />
    <Footer />
  </BrowserRouter>
);

export default App;
