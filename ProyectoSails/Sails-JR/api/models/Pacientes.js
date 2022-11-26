//Modulo de Pacientes

module.exports = {
  attributes: {
    nombre: {
      type: 'string'
    },
    apellido: {
      type: 'string'
    },
    rut: {
      type: 'string',
      unique: true,
      required: true
    },
    fechaNacimiento: {
      type: 'string'
    },
    direccion: {
      type: 'string'
    },
    genero: {
      type: 'string',
      enum: ['Femeninio', 'Masculino', 'Otro']
    }
  }
};
