import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-festival-cream overflow-hidden">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              Un día de diversión para ti y tu mejor amigo
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Únete a nosotros en el festival más grande de mascotas del año.
              Concursos, actividades, premios y mucha diversión te esperan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/programa" className="btn-primary">
                Ver Programa
              </Link>
              <Link to="/registro" className="btn-secondary">
                Regístrate Ahora
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={import.meta.env.BASE_URL + '/images/galeria/home.webp'}
                alt="Perro feliz en el festival"
                className="w-full h-full object-cover"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-festival-orange text-white p-4 rounded-lg shadow-lg"
            >
              <p className="text-lg font-semibold">15-16 Junio 2024</p>
              <p className="text-sm">¡No te lo pierdas!</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-48 h-48 bg-festival-blue opacity-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-festival-green opacity-10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
    </div>
  );
};

export default Hero; 