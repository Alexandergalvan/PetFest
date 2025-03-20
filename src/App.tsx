import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Programa from './pages/Programa';
import Concursos from './pages/Concursos';
import Galeria from './pages/Galeria';
import Contacto from './pages/Contacto';
import Registro from './pages/Registro';
import Patrocinadores from './pages/Patrocinadores';
import Recursos from './pages/Recursos';
import RedesSociales from './pages/RedesSociales';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="programa" element={<Programa />} />
            <Route path="concursos" element={<Concursos />} />
            <Route path="galeria" element={<Galeria />} />
            <Route path="contacto" element={<Contacto />} />
            <Route path="registro" element={<Registro />} />
            <Route path="patrocinadores" element={<Patrocinadores />} />
            <Route path="recursos" element={<Recursos />} />
            <Route path="redes-sociales" element={<RedesSociales />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
