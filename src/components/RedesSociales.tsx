import { motion } from 'framer-motion';
import { useState } from 'react';

interface Post {
  id: number;
  redSocial: 'instagram' | 'facebook' | 'twitter';
  contenido: string;
  imagen: string;
  fecha: string;
  likes: number;
  comentarios: number;
  url: string;
}

const RedesSociales = () => {
  const [redSeleccionada, setRedSeleccionada] = useState<Post['redSocial']>('instagram');

  const posts: Post[] = [
    {
      id: 1,
      redSocial: 'instagram',
      contenido: '¡Prepárense para el Festival de Mascotas! 🐾✨',
      imagen: '/images/redes/instagram-1.jpg',
      fecha: 'Hace 2 horas',
      likes: 245,
      comentarios: 32,
      url: 'https://instagram.com/petfest'
    },
    {
      id: 2,
      redSocial: 'facebook',
      contenido: 'Conoce a nuestros patrocinadores y todo lo que preparan para ti y tu mascota.',
      imagen: '/images/redes/facebook-1.jpg',
      fecha: 'Hace 5 horas',
      likes: 189,
      comentarios: 45,
      url: 'https://facebook.com/petfest'
    },
    {
      id: 3,
      redSocial: 'twitter',
      contenido: '¡Últimos días para inscribirte a los concursos! 🏆',
      imagen: '/images/redes/twitter-1.jpg',
      fecha: 'Hace 1 día',
      likes: 156,
      comentarios: 28,
      url: 'https://twitter.com/petfest'
    },
    {
      id: 4,
      redSocial: 'instagram',
      contenido: 'Mira las fotos de la edición anterior 📸',
      imagen: '/images/redes/instagram-2.jpg',
      fecha: 'Hace 2 días',
      likes: 312,
      comentarios: 67,
      url: 'https://instagram.com/petfest'
    },
    {
      id: 5,
      redSocial: 'facebook',
      contenido: '¡Nuevos premios y sorpresas para este año! 🎁',
      imagen: '/images/redes/facebook-2.jpg',
      fecha: 'Hace 3 días',
      likes: 278,
      comentarios: 89,
      url: 'https://facebook.com/petfest'
    },
    {
      id: 6,
      redSocial: 'twitter',
      contenido: 'Conoce a los veterinarios que estarán presentes 👨‍⚕️',
      imagen: '/images/redes/twitter-2.jpg',
      fecha: 'Hace 4 días',
      likes: 134,
      comentarios: 42,
      url: 'https://twitter.com/petfest'
    }
  ];

  const postsFiltrados = redSeleccionada === 'instagram'
    ? posts
    : posts.filter(post => post.redSocial === redSeleccionada);

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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Síguenos en Redes Sociales</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mantente al día con las últimas noticias y actualizaciones del festival
          </p>
        </motion.div>

        {/* Selector de Red Social */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setRedSeleccionada('instagram')}
            className={`px-6 py-2 rounded-full transition-colors duration-200 ${redSeleccionada === 'instagram'
              ? 'bg-pink-500 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
          >
            Instagram
          </button>
          <button
            onClick={() => setRedSeleccionada('facebook')}
            className={`px-6 py-2 rounded-full transition-colors duration-200 ${redSeleccionada === 'facebook'
              ? 'bg-blue-500 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
          >
            Facebook
          </button>
          <button
            onClick={() => setRedSeleccionada('twitter')}
            className={`px-6 py-2 rounded-full transition-colors duration-200 ${redSeleccionada === 'twitter'
              ? 'bg-sky-500 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
          >
            Twitter
          </button>
        </div>

        {/* Feed de Posts */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto"
        >
          {postsFiltrados.map((post) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="aspect-[4/3]">
                <img
                  src={post.imagen}
                  alt={post.contenido}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${post.redSocial === 'instagram' ? 'bg-pink-100 text-pink-800' :
                      post.redSocial === 'facebook' ? 'bg-blue-100 text-blue-800' :
                        'bg-sky-100 text-sky-800'
                    }`}>
                    {post.redSocial === 'instagram' ? 'Instagram' :
                      post.redSocial === 'facebook' ? 'Facebook' : 'Twitter'}
                  </span>
                  <span className="text-sm text-gray-500">{post.fecha}</span>
                </div>
                <p className="text-gray-700 mb-4 text-lg line-clamp-3">{post.contenido}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-6">
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      {post.comentarios}
                    </span>
                  </div>
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-festival-orange hover:text-festival-orange-dark transition-colors font-medium"
                  >
                    Ver post
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RedesSociales;
