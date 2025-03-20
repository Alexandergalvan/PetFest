import { motion } from 'framer-motion';
import { useState } from 'react';

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
}

const Contacto = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    setEnviado(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contacto</h1>
          <p className="text-xl text-gray-600">
            ¿Tienes alguna pregunta? No dudes en contactarnos
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="card">
              <h2 className="text-2xl font-bold mb-4">Información de Contacto</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <h3 className="font-semibold">Dirección</h3>
                    <p className="text-gray-600">Av. Principal #123, Ciudad</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📞</span>
                  <div>
                    <h3 className="font-semibold">Teléfono</h3>
                    <p className="text-gray-600">(123) 456-7890</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">info@petfest.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold mb-4">Horarios de Atención</h2>
              <div className="space-y-2">
                <p className="flex justify-between">
                  <span className="font-semibold">Lunes - Viernes:</span>
                  <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-semibold">Sábados:</span>
                  <span className="text-gray-600">10:00 AM - 4:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-semibold">Domingos:</span>
                  <span className="text-gray-600">Cerrado</span>
                </p>
              </div>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold mb-4">Síguenos en Redes Sociales</h2>
              <div className="flex gap-4">
                <a href="#" className="text-2xl hover:text-festival-orange transition-colors">
                  Facebook
                </a>
                <a href="#" className="text-2xl hover:text-festival-orange transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-2xl hover:text-festival-orange transition-colors">
                  Twitter
                </a>
              </div>
            </div>
          </motion.div>

          {/* Formulario de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="card"
          >
            <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>
            {enviado ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <span className="text-4xl mb-4 block">✅</span>
                <h3 className="text-xl font-semibold mb-2">¡Mensaje enviado!</h3>
                <p className="text-gray-600 mb-4">
                  Gracias por contactarnos. Nos pondremos en contacto contigo pronto.
                </p>
                <button
                  onClick={() => setEnviado(false)}
                  className="btn-primary"
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-festival-orange focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-festival-orange focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-festival-orange focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-festival-orange focus:border-transparent"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="btn-primary w-full"
                >
                  Enviar Mensaje
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Mapa */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12"
        >
          <div className="card p-0 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1234.5678!2d-123.4567!3d12.3456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDIwJzQ0LjIiTiAxMjPCsDI3JzI0LjEiVw!5e0!3m2!1ses!2s!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contacto; 