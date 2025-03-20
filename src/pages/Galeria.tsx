import { motion } from 'framer-motion';
import { useState } from 'react';

interface Imagen {
  id: number;
  url: string;
  titulo: string;
  categoria: 'concursos' | 'actividades' | 'mascotas' | 'premios';
}

const Galeria = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string>('todas');
  const [imagenSeleccionada, setImagenSeleccionada] = useState<Imagen | null>(null);

  const imagenes: Imagen[] = [
    {
      id: 1,
      url: '/galeria/concurso-disfraces-1.jpg',
      titulo: 'Ganador del Concurso de Disfraces 2023',
      categoria: 'concursos'
    },
    {
      id: 2,
      url: '/galeria/actividad-adiestramiento.jpg',
      titulo: 'Taller de Adiestramiento',
      categoria: 'actividades'
    },
    {
      id: 3,
      url: '/galeria/mascota-feliz.jpg',
      titulo: 'Mascota disfrutando del festival',
      categoria: 'mascotas'
    },
    {
      id: 4,
      url: '/galeria/premio-agilidad.jpg',
      titulo: 'Premiación del Concurso de Agilidad',
      categoria: 'premios'
    },
    {
      id: 5,
      url: '/galeria/concurso-talentos.jpg',
      titulo: 'Presentación de Talentos',
      categoria: 'concursos'
    },
    {
      id: 6,
      url: '/galeria/actividad-juegos.jpg',
      titulo: 'Zona de Juegos',
      categoria: 'actividades'
    },
    {
      id: 7,
      url: '/galeria/mascota-jugando.jpg',
      titulo: 'Mascota jugando en el parque',
      categoria: 'mascotas'
    },
    {
      id: 8,
      url: '/galeria/premio-disfraces.jpg',
      titulo: 'Entrega de Premios',
      categoria: 'premios'
    }
  ];

  const categorias = [
    { id: 'todas', nombre: 'Todas' },
    { id: 'concursos', nombre: 'Concursos' },
    { id: 'actividades', nombre: 'Actividades' },
    { id: 'mascotas', nombre: 'Mascotas' },
    { id: 'premios', nombre: 'Premios' }
  ];

  const imagenesFiltradas = categoriaSeleccionada === 'todas'
    ? imagenes
    : imagenes.filter(imagen => imagen.categoria === categoriaSeleccionada);

  return (
    <div className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Galería</h1>
          <p className="text-xl text-gray-600">
            Revive los mejores momentos de ediciones anteriores
          </p>
        </motion.div>

        {/* Filtros de categoría */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categorias.map((categoria) => (
            <motion.button
              key={categoria.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCategoriaSeleccionada(categoria.id)}
              className={`px-6 py-2 rounded-full transition-colors ${categoriaSeleccionada === categoria.id
                  ? 'bg-festival-orange text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              {categoria.nombre}
            </motion.button>
          ))}
        </div>

        {/* Grid de imágenes */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {imagenesFiltradas.map((imagen) => (
            <motion.div
              key={imagen.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative group cursor-pointer"
              onClick={() => setImagenSeleccionada(imagen)}
            >
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                <img
                  src={imagen.url}
                  alt={imagen.titulo}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <h3 className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {imagen.titulo}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal de imagen */}
        {imagenSeleccionada && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setImagenSeleccionada(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl w-full"
            >
              <img
                src={imagenSeleccionada.url}
                alt={imagenSeleccionada.titulo}
                className="w-full h-auto rounded-lg"
              />
              <h3 className="text-white text-xl font-semibold mt-4 text-center">
                {imagenSeleccionada.titulo}
              </h3>
              <button
                onClick={() => setImagenSeleccionada(null)}
                className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Galeria; 