import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Backpack from './pages/Backpack';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Tour from './pages/Tour';
import Tours from './pages/Tours';
import Success from './pages/Success';

const App = () => {
  const userLogged = useSelector((state) => state.user.currentUser);
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account/sign-in" element={userLogged ? <Navigate to="/" /> : <SignIn />} />
        <Route path="/account/sign-up" element={userLogged ? <Navigate to="/" /> : <SignUp />} />
        <Route path="/backpack" element={<Backpack />} />
        <Route path="/backpack/success" element={<Success />} />
        <Route path="/tours/:category" element={<Tours />} />
        <Route path="/tour/:slug" element={<Tour />} />
        <Route path="/admin-panel" element={<h1 style={{ marginTop: '100px' }}>Admin Panel</h1>} />
        <Route path="/test-nested" element={<h1 style={{ marginTop: '100px' }}>Test Nested</h1>}>
          <Route path="nested-a" element={<h1 style={{ marginTop: '100px' }}>Nested AAA</h1>} />
          <Route path="nested-b" element={<h1 style={{ marginTop: '100px' }}>Nested BBB</h1>} />
        </Route>
        <Route path="*" element={<h1 style={{ marginTop: '100px' }}>404</h1>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
