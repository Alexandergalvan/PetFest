import { motion } from 'framer-motion';
import { useState } from 'react';

interface Evento {
  id: number;
  titulo: string;
  descripcion: string;
  hora: string;
  duracion: string;
  tipo: 'concurso' | 'actividad' | 'taller' | 'exhibicion';
  fecha: string;
}

const Programa = () => {
  const [fechaSeleccionada, setFechaSeleccionada] = useState('2024-06-15');

  const eventos: Evento[] = [
    {
      id: 1,
      titulo: 'Inauguración del Festival',
      descripcion: 'Ceremonia de apertura con desfile de mascotas',
      hora: '09:00',
      duracion: '1 hora',
      tipo: 'actividad',
      fecha: '2024-06-15'
    },
    {
      id: 2,
      titulo: 'Concurso de Disfraces',
      descripcion: 'Muestra tu creatividad disfrazando a tu mascota',
      hora: '10:30',
      duracion: '2 horas',
      tipo: 'concurso',
      fecha: '2024-06-15'
    },
    {
      id: 3,
      titulo: 'Taller de Adiestramiento',
      descripcion: 'Aprende técnicas básicas de adiestramiento',
      hora: '13:00',
      duracion: '1.5 horas',
      tipo: 'taller',
      fecha: '2024-06-15'
    },
    {
      id: 4,
      titulo: 'Exhibición de Agilidad',
      descripcion: 'Demuestra las habilidades de tu mascota',
      hora: '15:00',
      duracion: '2 horas',
      tipo: 'exhibicion',
      fecha: '2024-06-15'
    },
    {
      id: 5,
      titulo: 'Concurso de Talentos',
      descripcion: 'Muestra los talentos especiales de tu mascota',
      hora: '10:00',
      duracion: '2 horas',
      tipo: 'concurso',
      fecha: '2024-06-16'
    },
    {
      id: 6,
      titulo: 'Taller de Cuidado',
      descripcion: 'Aprende sobre el cuidado básico de mascotas',
      hora: '13:30',
      duracion: '1 hora',
      tipo: 'taller',
      fecha: '2024-06-16'
    }
  ];

  const getColorTipo = (tipo: string) => {
    switch (tipo) {
      case 'concurso':
        return 'bg-festival-orange';
      case 'actividad':
        return 'bg-festival-blue';
      case 'taller':
        return 'bg-festival-green';
      case 'exhibicion':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  const eventosFiltrados = eventos.filter(evento => evento.fecha === fechaSeleccionada);

  return (
    <div className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Programa del Festival</h1>
          <p className="text-xl text-gray-600">
            Disfruta de dos días llenos de diversión y actividades para ti y tu mascota
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Selector de fecha */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Selecciona la fecha</h2>
              <div className="space-y-2">
                <button
                  onClick={() => setFechaSeleccionada('2024-06-15')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${fechaSeleccionada === '2024-06-15'
                      ? 'bg-festival-orange text-white'
                      : 'hover:bg-gray-100'
                    }`}
                >
                  Sábado 15 de Junio
                </button>
                <button
                  onClick={() => setFechaSeleccionada('2024-06-16')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${fechaSeleccionada === '2024-06-16'
                      ? 'bg-festival-orange text-white'
                      : 'hover:bg-gray-100'
                    }`}
                >
                  Domingo 16 de Junio
                </button>
              </div>
            </div>
          </div>

          {/* Lista de eventos */}
          <div className="md:col-span-3">
            <div className="space-y-4">
              {eventosFiltrados.map((evento) => (
                <motion.div
                  key={evento.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="card"
                >
                  <div className="flex items-start gap-4">
                    <div className={`${getColorTipo(evento.tipo)} text-white px-3 py-1 rounded-full text-sm`}>
                      {evento.tipo.charAt(0).toUpperCase() + evento.tipo.slice(1)}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{evento.titulo}</h3>
                      <p className="text-gray-600 mb-2">{evento.descripcion}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>🕒 {evento.hora}</span>
                        <span>⏱️ {evento.duracion}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programa; 