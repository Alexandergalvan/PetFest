import { motion } from 'framer-motion';

interface Concurso {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: string;
  hora: string;
  lugar: string;
  imagen: string;
  premios: string[];
  requisitos: string[];
}

const Concursos = () => {
  const concursos: Concurso[] = [
    {
      id: 1,
      titulo: 'Concurso de Disfraces',
      descripcion: 'Disfraza a tu mascota con el tema que prefieras y participa por premios increíbles.',
      fecha: '2024-04-27',
      hora: '14:00',
      lugar: 'Área de Concursos',
      imagen: import.meta.env.BASE_URL + '/images/concursos/disfraces.webp',
      premios: [
        '1er lugar: Kit de cuidado premium + $500',
        '2do lugar: Kit de juguetes + $300',
        '3er lugar: Kit de snacks + $200'
      ],
      requisitos: [
        'Mascota con disfraz completo',
        'Dueño presente',
        'Registro previo',
        'Carnet de vacunación al día'
      ]
    },
    {
      id: 2,
      titulo: 'La mascota más famosa',
      descripcion: 'Comparte la foto de tu mascota y participa por ser la más famosa del festival.',
      fecha: '2024-04-27',
      hora: '24:00',
      lugar: 'Redes Sociales',
      imagen: import.meta.env.BASE_URL + '/images/concursos/famosos.webp',
      premios: [
        '1er lugar: Kit VIP de mascota + $1000',
        '2do lugar: Kit de cuidado premium + $500',
        '3er lugar: Kit de juguetes + $300'
      ],
      requisitos: [
        'Enviar fotografía por inbox',
        'La mascota debe aparecer sola en la foto',
        'Incluir nombre de la mascota y edad',
        'Incluir nombre del dueño y teléfono',
        'Fecha límite: 27 de abril a las 24:00'
      ]
    },
  ];

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
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Concursos</h1>
          <p className="text-xl text-gray-600">
            Participa en nuestros emocionantes concursos y gana increíbles premios
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {concursos.map((concurso) => (
            <motion.div
              key={concurso.id}
              variants={itemVariants}
              className="card overflow-hidden"
            >
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <img
                  src={concurso.imagen}
                  alt={concurso.titulo}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{concurso.titulo}</h3>
                <p className="text-gray-600 mb-4">{concurso.descripcion}</p>

                <div className="mb-4">
                  <div className="flex items-center gap-2 text-gray-500 mb-2">
                    <span>📅 {concurso.fecha}</span>
                    <span>🕒 {concurso.hora}</span>
                  </div>
                  <div className="bg-festival-orange bg-opacity-10 p-3 rounded-lg">
                    <p className="text-festival-orange font-semibold">Premio:</p>
                    {concurso.premios.map((premio, index) => (
                      <p key={index} className="text-gray-700">{premio}</p>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Requisitos:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {concurso.requisitos.map((requisito, index) => (
                      <li key={index}>{requisito}</li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary w-full mt-6"
                >
                  Inscribirse
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Concursos; 