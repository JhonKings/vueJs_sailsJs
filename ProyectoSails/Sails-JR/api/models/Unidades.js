//Modulo de Unidades

module.exports = {
  attributes: {
    titulo: {
      type: 'string'
    },
    descripcion: {
      type: 'string'
    },
    unidadPadre: {
      model: 'unidades'
    },
    listaFuncionario: {
      type: 'string',
      collection: 'funcionarios',
      via: 'unidadAdministrativa'
    }
  }
};
