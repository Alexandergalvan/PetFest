import { motion } from 'framer-motion';
import Galeria from '../components/Galeria';
import Hero from '../components/Hero';

const Home = () => {
  const features = [
    {
      title: 'Concursos Emocionantes',
      description: 'Participa en nuestros concursos de mascotas y gana increíbles premios.',
      icon: '🏆',
    },
    {
      title: 'Actividades Divertidas',
      description: 'Disfruta de actividades especialmente diseñadas para ti y tu mascota.',
      icon: '🎮',
    },
    {
      title: 'Zona de Adopción',
      description: 'Conoce a adorables mascotas que buscan un hogar amoroso.',
      icon: '❤️',
    },
    {
      title: 'Área de Comidas',
      description: 'Deliciosas opciones gastronómicas para todos los gustos.',
      icon: '🍽️',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="pt-16">
      <Hero />

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card text-center"
              >
                <span className="text-4xl mb-4 inline-block">{feature.icon}</span>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-festival-blue bg-opacity-10">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              ¿Listo para la diversión?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              No te pierdas la oportunidad de ser parte del evento más esperado del año.
              ¡Regístrate ahora y asegura tu lugar!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg"
            >
              ¡Reserva tu entrada ahora!
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Sección de Galería */}
      <Galeria />

      {/* Sección de Patrocinadores */}
      {/* ... existing code ... */}

      {/* Sección de Contacto */}
      {/* ... existing code ... */}
    </div>
  );
};

export default Home; 