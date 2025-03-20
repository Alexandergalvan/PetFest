import { motion } from 'framer-motion';
import { useState } from 'react';

interface Recurso {
  id: number;
  titulo: string;
  descripcion: string;
  tipo: 'guia' | 'video' | 'articulo';
  imagen: string;
  url: string;
  categoria: 'todos' | 'cuidados' | 'entrenamiento' | 'salud' | 'nutricion';
  fecha: string;
  contenido?: {
    tipo: 'pdf' | 'video' | 'enlace';
    url: string;
    duracion?: string;
    autor?: string;
    tags?: string[];
  };
}

const Recursos = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<Recurso['categoria']>('todos');
  const [recursoSeleccionado, setRecursoSeleccionado] = useState<Recurso | null>(null);

  const categorias = [
    { id: 'todos', label: 'Todos' },
    { id: 'cuidados', label: 'Cuidados Básicos' },
    { id: 'entrenamiento', label: 'Entrenamiento' },
    { id: 'salud', label: 'Salud' },
    { id: 'nutricion', label: 'Nutrición' },
  ] as const;

  const recursos: Recurso[] = [
    {
      id: 1,
      titulo: 'Guía de Cuidados Básicos para Perros',
      descripcion: 'Aprende los fundamentos del cuidado diario de tu perro, desde el cepillado hasta el baño.',
      tipo: 'guia',
      imagen: '/images/recursos/cuidados-perros.webp',
      url: '#',
      categoria: 'cuidados',
      fecha: '2024-03-15',
      contenido: {
        tipo: 'pdf',
        url: '/recursos/Cuidados para perros, guía completa para el bienestar canino.pdf',
        autor: 'Cobee Team',
        tags: ['perros', 'cuidados básicos', 'higiene']
      }
    },
    {
      id: 2,
      titulo: 'Entrenamiento Básico para Gatos',
      descripcion: 'Descubre técnicas efectivas para entrenar a tu gato y mejorar su comportamiento.',
      tipo: 'video',
      imagen: '/images/recursos/entrenamiento-gatos.webp',
      url: '#',
      categoria: 'entrenamiento',
      fecha: '2024-03-14',
      contenido: {
        tipo: 'video',
        url: 'https://www.youtube.com/embed/jrxmi_ehJDw?si=hZB6ngDwNC-n3OhQ',
        duracion: '22:39',
        autor: 'Experto Animal',
        tags: ['gatos', 'entrenamiento', 'comportamiento']
      }
    },
    {
      id: 3,
      titulo: 'Signos de Enfermedad en Mascotas',
      descripcion: 'Aprende a identificar los primeros signos de enfermedad en tu mascota.',
      tipo: 'articulo',
      imagen: '/images/recursos/PetHealth.webp',
      url: '#',
      categoria: 'salud',
      fecha: '2024-03-13',
      contenido: {
        tipo: 'enlace',
        url: 'https://nutrimascot.es/cuidados-veterinarios/descubre-los-signos-de-enfermedad-en-tu-mascota-y-aprende-como-actuar/',
        autor: 'NutriMascot',
        tags: ['salud', 'prevención', 'enfermedades']
      }
    },
    {
      id: 4,
      titulo: 'Nutrición Balanceada para Mascotas',
      descripcion: 'Guía completa sobre alimentación saludable para perros y gatos.',
      tipo: 'guia',
      imagen: '/images/recursos/nutricion-mascotas.webp',
      url: '#',
      categoria: 'nutricion',
      fecha: '2023-07-28',
      contenido: {
        tipo: 'pdf',
        url: '/recursos/Guía para la alimentación de perros y gatos.pdf',
        autor: 'Pepe Herrera / Emiliano Sánchez',
        tags: ['nutrición', 'alimentación', 'dieta']
      }
    },
  ];

  const recursosFiltrados = categoriaSeleccionada === 'todos'
    ? recursos
    : recursos.filter(recurso => recurso.categoria === categoriaSeleccionada);

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
    <div className="pt-16">
      <div className="section-padding container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Recursos Educativos</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre guías, videos y artículos útiles para el cuidado y bienestar de tu mascota.
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
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              {categoria.label}
            </button>
          ))}
        </div>

        {/* Grid de Recursos */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {recursosFiltrados.map(recurso => (
            <motion.div
              key={recurso.id}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => setRecursoSeleccionado(recurso)}
            >
              <div className="relative h-48">
                <img
                  src={recurso.imagen}
                  alt={recurso.titulo}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${recurso.tipo === 'guia' ? 'bg-blue-100 text-blue-800' :
                    recurso.tipo === 'video' ? 'bg-red-100 text-red-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                    {recurso.tipo === 'guia' ? 'Guía' :
                      recurso.tipo === 'video' ? 'Video' : 'Artículo'}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {recurso.titulo}
                </h3>
                <p className="text-gray-600 mb-4">
                  {recurso.descripcion}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {new Date(recurso.fecha).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <span className="text-festival-orange hover:text-festival-orange-dark font-medium flex items-center">
                    Ver detalles
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal de Recurso */}
      <motion.div
        initial={false}
        animate={recursoSeleccionado ? { opacity: 1 } : { opacity: 0 }}
        className={`fixed inset-0 bg-gray-700 bg-opacity-50 z-50 flex items-center justify-center p-4 ${recursoSeleccionado ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
        onClick={() => setRecursoSeleccionado(null)}
      >
        {recursoSeleccionado && (
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${recursoSeleccionado.tipo === 'guia' ? 'bg-blue-100 text-blue-800' :
                      recursoSeleccionado.tipo === 'video' ? 'bg-red-100 text-red-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                      {recursoSeleccionado.tipo === 'guia' ? 'Guía' :
                        recursoSeleccionado.tipo === 'video' ? 'Video' : 'Artículo'}
                    </span>
                    <span className="text-sm text-gray-500">
                      {new Date(recursoSeleccionado.fecha).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {recursoSeleccionado.titulo}
                  </h2>
                </div>
                <button
                  onClick={() => setRecursoSeleccionado(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <svg
                    className="w-6 h-6"
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
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Columna Principal */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Descripción</h4>
                    <p className="text-gray-600 leading-relaxed">
                      {recursoSeleccionado.descripcion}
                    </p>
                  </div>

                  {recursoSeleccionado.contenido?.tipo === 'video' && (
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Video</h4>
                      <div className="aspect-video bg-black rounded-lg overflow-hidden">
                        <iframe
                          src={recursoSeleccionado.contenido.url}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  )}

                  {recursoSeleccionado.contenido?.tipo === 'pdf' && (
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Documento PDF</h4>
                      <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg border-2 border-dashed border-gray-200">
                        <svg
                          className="w-16 h-16 text-gray-400 mb-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                        <p className="text-gray-600 mb-6 text-center">
                          Este documento está disponible para descargar en formato PDF
                        </p>
                        <a
                          href={recursoSeleccionado.contenido.url}
                          download={recursoSeleccionado.titulo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-festival-orange text-white rounded-lg hover:bg-festival-orange-dark transition-colors"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                            />
                          </svg>
                          <span>Descargar PDF</span>
                        </a>
                      </div>
                    </div>
                  )}

                  {recursoSeleccionado.contenido?.tipo === 'enlace' && (
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Enlace</h4>
                      <a
                        href={recursoSeleccionado.contenido.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-festival-orange hover:text-festival-blue transition-colors"
                      >
                        <span>Visitar enlace</span>
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>

                {/* Columna Lateral */}
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Detalles</h4>
                    <div className="space-y-4">
                      <div>
                        <span className="text-sm text-gray-500">Categoría</span>
                        <p className="text-gray-900 font-medium">{recursoSeleccionado.categoria}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Tipo de Recurso</span>
                        <p className="text-gray-900 font-medium capitalize">{recursoSeleccionado.tipo}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Fecha de Publicación</span>
                        <p className="text-gray-900 font-medium">
                          {new Date(recursoSeleccionado.fecha).toLocaleDateString('es-ES', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                      {recursoSeleccionado.contenido?.autor && (
                        <div>
                          <span className="text-sm text-gray-500">Autor</span>
                          <p className="text-gray-900 font-medium">{recursoSeleccionado.contenido.autor}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {recursoSeleccionado.contenido?.tags && (
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Etiquetas</h4>
                      <div className="flex flex-wrap gap-2">
                        {recursoSeleccionado.contenido.tags.map(tag => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Recursos Relacionados</h4>
                    <div className="space-y-4">
                      {recursos
                        .filter(r => r.categoria === recursoSeleccionado.categoria && r.id !== recursoSeleccionado.id)
                        .slice(0, 3)
                        .map(recurso => (
                          <button
                            key={recurso.id}
                            onClick={() => setRecursoSeleccionado(recurso)}
                            className="w-full text-left p-3 rounded-lg hover:bg-white transition-colors"
                          >
                            <p className="text-gray-900 font-medium">{recurso.titulo}</p>
                            <p className="text-sm text-gray-500">{recurso.categoria}</p>
                          </button>
                        ))}
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Recursos;