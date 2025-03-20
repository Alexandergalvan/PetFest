import { motion } from 'framer-motion';
import { useState } from 'react';

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  tipoParticipante: 'asistente' | 'expositor' | 'patrocinador';
  nombreMascota: string;
  tipoMascota: string;
  raza: string;
  edad: string;
  concursos: string[];
  comentarios: string;
  // Campos adicionales para expositores
  nombreNegocio?: string;
  descripcionProductos?: string;
  logoNegocio?: string;
  // Campos adicionales para patrocinadores
  nombreRepresentante?: string;
  cargoRepresentante?: string;
  direccionNegocio?: string;
  tipoDonativo?: string;
  descripcionDonativo?: string;
}

const Registro = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    telefono: '',
    tipoParticipante: 'asistente',
    nombreMascota: '',
    tipoMascota: '',
    raza: '',
    edad: '',
    concursos: [],
    comentarios: ''
  });

  const [enviado, setEnviado] = useState(false);
  const [previewLogo, setPreviewLogo] = useState<string | null>(null);

  const concursosDisponibles = [
    { id: 'disfraces', nombre: 'Concurso de Disfraces' },
    { id: 'talentos', nombre: 'Concurso de Talentos' },
    { id: 'agilidad', nombre: 'Concurso de Agilidad' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    setEnviado(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        concursos: checkbox.checked
          ? [...prev.concursos, value]
          : prev.concursos.filter(c => c !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Actualizar el nombre del archivo
      setFormData(prev => ({
        ...prev,
        logoNegocio: file.name
      }));

      // Crear vista previa del logo
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewLogo(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const input = document.getElementById('logoNegocio') as HTMLInputElement;
      if (input) {
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);
        input.files = dataTransfer.files;
        handleFileChange({ target: { files: [file] } } as any);
      }
    }
  };

  return (
    <div className="section-padding">
      <div className="container-custom max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Registro al Festival</h1>
          <p className="text-xl text-gray-600">
            Completa el formulario para asegurar tu lugar en el festival
          </p>
        </motion.div>

        {enviado ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="card text-center py-8"
          >
            <span className="text-4xl mb-4 block">🎉</span>
            <h2 className="text-2xl font-bold mb-4">¡Registro Exitoso!</h2>
            <p className="text-gray-600 mb-6">
              Gracias por registrarte. Te enviaremos un correo con los detalles de tu inscripción.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setEnviado(false)}
              className="btn-primary"
            >
              Registrar otro participante
            </motion.button>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="card space-y-6"
          >
            {/* Información Personal */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Información Personal</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre Completo
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
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-festival-orange focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="tipoParticipante" className="block text-sm font-medium text-gray-700 mb-1">
                    Tipo de Participante
                  </label>
                  <select
                    id="tipoParticipante"
                    name="tipoParticipante"
                    value={formData.tipoParticipante}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-festival-orange focus:border-transparent"
                  >
                    <option value="asistente">Asistente</option>
                    <option value="expositor">Expositor</option>
                    <option value="patrocinador">Patrocinador</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Información de la Mascota (solo para asistentes) */}
            {formData.tipoParticipante === 'asistente' && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Información de la Mascota</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nombreMascota" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre de la Mascota
                    </label>
                    <input
                      type="text"
                      id="nombreMascota"
                      name="nombreMascota"
                      value={formData.nombreMascota}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-festival-orange focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="tipoMascota" className="block text-sm font-medium text-gray-700 mb-1">
                      Tipo de Mascota
                    </label>
                    <input
                      type="text"
                      id="tipoMascota"
                      name="tipoMascota"
                      value={formData.tipoMascota}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-festival-orange focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="raza" className="block text-sm font-medium text-gray-700 mb-1">
                      Raza
                    </label>
                    <input
                      type="text"
                      id="raza"
                      name="raza"
                      value={formData.raza}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-festival-orange focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="edad" className="block text-sm font-medium text-gray-700 mb-1">
                      Edad
                    </label>
                    <input
                      type="text"
                      id="edad"
                      name="edad"
                      value={formData.edad}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-festival-orange focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Información del Negocio (para expositores) */}
            {formData.tipoParticipante === 'expositor' && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Información del Negocio</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nombreNegocio" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre del Negocio
                    </label>
                    <input
                      type="text"
                      id="nombreNegocio"
                      name="nombreNegocio"
                      value={formData.nombreNegocio}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-festival-orange focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Logo del Negocio
                    </label>
                    <div
                      onDragOver={handleDragOver}
                      onDrop={handleDrop}
                      className={`relative border-2 border-dashed rounded-lg p-4 text-center transition-colors duration-200 ${previewLogo ? 'border-festival-orange bg-orange-50' : 'border-gray-300 hover:border-festival-orange'
                        }`}
                    >
                      <input
                        type="file"
                        id="logoNegocio"
                        name="logoNegocio"
                        onChange={handleFileChange}
                        accept="image/*"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      {previewLogo ? (
                        <div className="space-y-2">
                          <img
                            src={previewLogo}
                            alt="Vista previa del logo"
                            className="mx-auto max-h-32 object-contain"
                          />
                          <p className="text-sm text-gray-600">{formData.logoNegocio}</p>
                          <button
                            type="button"
                            onClick={() => {
                              setPreviewLogo(null);
                              setFormData(prev => ({ ...prev, logoNegocio: '' }));
                              const input = document.getElementById('logoNegocio') as HTMLInputElement;
                              if (input) input.value = '';
                            }}
                            className="text-sm text-red-600 hover:text-red-700"
                          >
                            Cambiar logo
                          </button>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <div className="mx-auto w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                            <svg
                              className="w-6 h-6 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">
                              Arrastra y suelta tu logo aquí o
                            </p>
                            <p className="text-sm text-festival-orange font-medium">
                              haz clic para seleccionar
                            </p>
                          </div>
                          <p className="text-xs text-gray-500">
                            PNG, JPG o GIF (máx. 2MB)
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="descripcionProductos" className="block text-sm font-medium text-gray-700 mb-1">
                      Descripción de Productos/Servicios
                    </label>
                    <textarea
                      id="descripcionProductos"
                      name="descripcionProductos"
                      value={formData.descripcionProductos}
                      onChange={handleChange}
                      rows={4}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-festival-orange focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Información del Patrocinador */}
            {formData.tipoParticipante === 'patrocinador' && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Información del Patrocinador</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nombreRepresentante" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre del Representante
                    </label>
                    <input
                      type="text"
                      id="nombreRepresentante"
                      name="nombreRepresentante"
                      value={formData.nombreRepresentante}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-festival-orange focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="cargoRepresentante" className="block text-sm font-medium text-gray-700 mb-1">
                      Cargo del Representante
                    </label>
                    <input
                      type="text"
                      id="cargoRepresentante"
                      name="cargoRepresentante"
                      value={formData.cargoRepresentante}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-festival-orange focus:border-transparent"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="direccionNegocio" className="block text-sm font-medium text-gray-700 mb-1">
                      Dirección del Negocio
                    </label>
                    <input
                      type="text"
                      id="direccionNegocio"
                      name="direccionNegocio"
                      value={formData.direccionNegocio}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-festival-orange focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="tipoDonativo" className="block text-sm font-medium text-gray-700 mb-1">
                      Tipo de Donativo
                    </label>
                    <select
                      id="tipoDonativo"
                      name="tipoDonativo"
                      value={formData.tipoDonativo}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-festival-orange focus:border-transparent"
                    >
                      <option value="">Selecciona un tipo</option>
                      <option value="dinero">Dinero</option>
                      <option value="productos">Productos</option>
                      <option value="servicios">Servicios</option>
                      <option value="equipamiento">Equipamiento</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="descripcionDonativo" className="block text-sm font-medium text-gray-700 mb-1">
                      Descripción del Donativo
                    </label>
                    <textarea
                      id="descripcionDonativo"
                      name="descripcionDonativo"
                      value={formData.descripcionDonativo}
                      onChange={handleChange}
                      rows={4}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-festival-orange focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Concursos (solo para asistentes) */}
            {formData.tipoParticipante === 'asistente' && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Concursos</h2>
                <div className="space-y-2 flex flex-wrap gap-4 items-center">
                  {concursosDisponibles.map((concurso) => (
                    <label key={concurso.id} className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        name="concursos"
                        value={concurso.id}
                        checked={formData.concursos.includes(concurso.id)}
                        onChange={handleChange}
                        className="h-4 w-4 text-festival-orange focus:ring-festival-orange border-gray-300 rounded"
                      />
                      <span className="text-gray-700">{concurso.nombre}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Comentarios */}
            <div>
              <label htmlFor="comentarios" className="block text-sm font-medium text-gray-700 mb-1">
                Comentarios Adicionales
              </label>
              <textarea
                id="comentarios"
                name="comentarios"
                value={formData.comentarios}
                onChange={handleChange}
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
              Enviar Registro
            </motion.button>
          </motion.form>
        )}
      </div>
    </div>
  );
};

export default Registro; 