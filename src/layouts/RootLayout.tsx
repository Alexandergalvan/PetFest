import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">PetFest</h3>
              <p className="text-gray-300">
                El festival más grande de mascotas del año.
                Diversión garantizada para ti y tu mejor amigo.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/programa" className="text-gray-300 hover:text-white transition-colors">
                    Programa
                  </a>
                </li>
                <li>
                  <a href="/concursos" className="text-gray-300 hover:text-white transition-colors">
                    Concursos
                  </a>
                </li>
                <li>
                  <a href="/galeria" className="text-gray-300 hover:text-white transition-colors">
                    Galería
                  </a>
                </li>
                <li>
                  <a href="/contacto" className="text-gray-300 hover:text-white transition-colors">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Email: info@petfest.com</li>
                <li>Tel: (123) 456-7890</li>
                <li>Dirección: Av. Principal #123</li>
              </ul>
              <div className="mt-4 flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Facebook
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
            <p>&copy; 2024 PetFest. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RootLayout; 