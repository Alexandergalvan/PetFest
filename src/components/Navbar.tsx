import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const menuItems = [
  { path: '/', label: 'Inicio' },
  { path: '/programa', label: 'Programa' },
  { path: '/concursos', label: 'Concursos' },
  { path: '/patrocinadores', label: 'Patrocinadores' },
  { path: '/recursos', label: 'Recursos' },
  { path: '/contacto', label: 'Contacto' },
  { path: '/redes-sociales', label: 'Redes Sociales' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                className="h-8 w-auto"
                src="/images/logo.webp"
                alt="PetFest Logo"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 ${location.pathname === item.path
                  ? 'text-festival-orange'
                  : 'text-gray-700 hover:text-festival-orange'
                  }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/registro"
              className="bg-festival-orange text-white px-4 py-2 rounded-lg hover:bg-festival-orange-dark transition-colors duration-200"
            >
              Registrarse
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-festival-orange hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Abrir menú principal</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto", display: "block" },
          closed: { opacity: 0, height: 0, display: "none" }
        }}
        transition={{ duration: 0.2 }}
        className="md:hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === item.path
                ? 'text-festival-orange bg-orange-50'
                : 'text-gray-700 hover:bg-gray-50'
                }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/registro"
            className="block px-3 py-2 rounded-md text-base font-medium bg-festival-orange text-white hover:bg-festival-orange-dark"
          >
            Registrarse
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar; 