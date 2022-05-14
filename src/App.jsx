import { BrowserRouter } from 'react-router-dom';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
import ToursGrid from './components/ToursGrid';

const App = () => (
  <BrowserRouter>
    <Header />
    <Banner />
    <section style={{ background: 'red' }}>
      <ToursGrid />
    </section>
    <Footer />
  </BrowserRouter>
);

export default App;
