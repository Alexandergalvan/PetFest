import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface Imagen {
  id: number;
  url: string;
  titulo: string;
  descripcion: string;
  categoria: 'mascotas' | 'eventos' | 'concursos' | 'exhibiciones';
}

const Galeria = () => {
  const [imagenSeleccionada, setImagenSeleccionada] = useState<Imagen | null>(null);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<Imagen['categoria']>('mascotas');

  const categorias = [
    { id: 'mascotas', label: 'Mascotas' },
    { id: 'eventos', label: 'Eventos' },
    { id: 'concursos', label: 'Concursos' },
    { id: 'exhibiciones', label: 'Exhibiciones' },
  ] as const;

  const imagenes: Imagen[] = [
    {
      id: 1,
      url: import.meta.env.BASE_URL + '/images/galeria/perro.webp',
      titulo: 'Perro Jugando',
      descripcion: 'Momentos divertidos en el área de juegos',
      categoria: 'mascotas'
    },
    {
      id: 2,
      url: import.meta.env.BASE_URL + '/images/galeria/inauguracion.webp',
      titulo: 'Inauguración',
      descripcion: 'Ceremonia de apertura del festival',
      categoria: 'eventos'
    },
    {
      id: 3,
      url: import.meta.env.BASE_URL + '/images/galeria/talento.webp',
      titulo: 'Concurso de Talento',
      descripcion: 'Participantes mostrando sus habilidades',
      categoria: 'concursos'
    },
    {
      id: 4,
      url: import.meta.env.BASE_URL + '/images/galeria/adiestramiento.webp',
      titulo: 'Exhibición de Adiestramiento',
      descripcion: 'Demostración de obediencia canina',
      categoria: 'exhibiciones'
    },
    {
      id: 5,
      url: import.meta.env.BASE_URL + '/images/galeria/gato.webp',
      titulo: 'Gato Descansando',
      descripcion: 'Área de descanso para mascotas',
      categoria: 'mascotas'
    },
    {
      id: 6,
      url: import.meta.env.BASE_URL + '/images/galeria/conferencia.webp',
      titulo: 'Conferencia',
      descripcion: 'Expertos compartiendo conocimientos',
      categoria: 'eventos'
    },
    {
      id: 7,
      url: import.meta.env.BASE_URL + '/images/galeria/concurso.webp',
      titulo: 'Concurso de Disfraces',
      descripcion: 'Mascotas con sus mejores disfraces',
      categoria: 'concursos'
    },
    {
      id: 8,
      url: import.meta.env.BASE_URL + '/images/galeria/agilidad.webp',
      titulo: 'Exhibición de Agilidad',
      descripcion: 'Perros demostrando su destreza',
      categoria: 'exhibiciones'
    },
  ];

  const imagenesFiltradas = categoriaSeleccionada === 'mascotas'
    ? imagenes
    : imagenes.filter(imagen => imagen.categoria === categoriaSeleccionada);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Galería del Festival</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Revive los mejores momentos y experiencias de ediciones anteriores
          </p>
        </motion.div>

        {/* Filtros de Categoría */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categorias.map(categoria => (
            <button
              key={categoria.id}
              onClick={() => setCategoriaSeleccionada(categoria.id)}
              className={`px-6 py-2 rounded-full transition-colors duration-200 ${categoriaSeleccionada === categoria.id
                ? 'bg-festival-orange text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
            >
              {categoria.label}
            </button>
          ))}
        </div>

        {/* Grid de Imágenes */}
        <AnimatePresence mode="wait">
          <motion.div
            key={categoriaSeleccionada}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {imagenesFiltradas.map(imagen => (
              <motion.div
                key={imagen.id}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
                onClick={() => setImagenSeleccionada(imagen)}
              >
                <img
                  src={imagen.url}
                  alt={imagen.titulo}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-lg font-semibold">{imagen.titulo}</h3>
                    <p className="text-sm">{imagen.descripcion}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modal de Imagen */}
      <AnimatePresence>
        {imagenSeleccionada && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setImagenSeleccionada(null)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative max-w-4xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={imagenSeleccionada.url}
                alt={imagenSeleccionada.titulo}
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
                <h3 className="text-xl font-bold text-white mb-2">
                  {imagenSeleccionada.titulo}
                </h3>
                <p className="text-white/90">
                  {imagenSeleccionada.descripcion}
                </p>
              </div>
              <button
                onClick={() => setImagenSeleccionada(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
              >
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Galeria; 