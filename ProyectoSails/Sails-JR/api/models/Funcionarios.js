//Modulo de Funcionarios

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
    contrasena: {
      type: 'string',
      encrypt: true
    },
    perfil: {
      type: 'string',
      enum: ['user', 'admin', 'super_admin']
    },
    logSesion: {
      type: 'string'
    },
    unidadAdministrativa: {
      model: 'unidades'
    },
    cargo: {
      model: 'cargos'
    }
  }
};
