import { motion } from 'framer-motion';

interface Patrocinador {
  id: number;
  nombre: string;
  logo: string;
  descripcion: string;
  sitioWeb: string;
  categoria: 'academico' | 'empresarial' | 'institucional';
}

const Patrocinadores = () => {
  const patrocinadores: Patrocinador[] = [
    {
      id: 1,
      nombre: 'Lio Creaciones',
      logo: '/images/patrocinadores/lio-creaciones.webp',
      categoria: 'empresarial',
      descripcion: 'Venta de accesorios y muebles para el hogar.',
      sitioWeb: 'https://www.facebook.com/profile.php?id=100063886160480'
    },
    {
      id: 2,
      nombre: 'Itzkuintli Gastronomia ',
      logo: '/images/patrocinadores/itzkuintli.webp',
      categoria: 'empresarial',
      descripcion: 'Empresa especializada en gastronomía artesanal para mascotas',
      sitioWeb: 'https://www.facebook.com/itzkuintligastronomia'
    },
    {
      id: 3,
      nombre: 'El Cafecito Restaurant',
      logo: '/images/patrocinadores/el-cafecito.webp',
      categoria: 'empresarial',
      descripcion: 'Acogedor restaurante especializado en café y gastronomía casual',
      sitioWeb: 'https://www.facebook.com/profile.php?id=100063997274729'
    },
    {
      id: 4,
      nombre: 'Veterinaria San Julian',
      logo: '/images/patrocinadores/veterinaria-san-julian.webp',
      categoria: 'empresarial',
      descripcion: 'Servicios de diagnóstico y análisis veterinario',
      sitioWeb: 'https://www.facebook.com/veterinariasanjulian'
    },
    {
      id: 5,
      nombre: 'ELY Detalles e Impresion ',
      logo: '/images/patrocinadores/ely-detalles.webp',
      categoria: 'empresarial',
      descripcion: 'Tienda especializada en servicios de impresión y soluciones gráficas',
      sitioWeb: 'https://www.facebook.com/profile.php?id=100057803793461'
    },
    {
      id: 6,
      nombre: 'Green Forward',
      logo: '/images/patrocinadores/green-forward.webp',
      categoria: 'empresarial',
      descripcion: 'Empresa especializada en soluciones sustentables basadas en economía circular y tecnologías verdes.',
      sitioWeb: 'https://www.facebook.com/GreenForwardMX'
    }
  ];

  const getCategoriaColor = (categoria: string) => {
    switch (categoria) {
      case 'academico':
        return 'bg-gradient-to-r from-blue-50 to-blue-100';
      case 'empresarial':
        return 'bg-gradient-to-r from-green-50 to-green-100';
      case 'institucional':
        return 'bg-gradient-to-r from-purple-50 to-purple-100';
      default:
        return 'bg-gray-50';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Nuestros Patrocinadores</h1>
          <p className="text-xl text-gray-600">
            Instituciones y organizaciones comprometidas con el bienestar animal y la educación veterinaria
          </p>
        </motion.div>

        {/* Lista de Patrocinadores */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {patrocinadores.map((patrocinador) => (
            <motion.div
              key={patrocinador.id}
              variants={itemVariants}
              className={`card ${getCategoriaColor(patrocinador.categoria)}`}
            >
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <img
                  src={import.meta.env.BASE_URL + patrocinador.logo}
                  alt={patrocinador.nombre}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{patrocinador.nombre}</h3>
              <p className="text-gray-600 mb-4">{patrocinador.descripcion}</p>
              <a
                href={patrocinador.sitioWeb}
                target="_blank"
                rel="noopener noreferrer"
                className="text-festival-orange hover:text-festival-orange-dark transition-colors"
              >
                Visitar sitio web →
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA para Patrocinadores */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <h2 className="text-2xl font-bold mb-4">¿Quieres colaborar con PetFest?</h2>
          <p className="text-gray-600 mb-6">
            Únete a nuestro grupo de patrocinadores y contribuye a la educación y bienestar animal
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Convertirse en Patrocinador
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Patrocinadores; 