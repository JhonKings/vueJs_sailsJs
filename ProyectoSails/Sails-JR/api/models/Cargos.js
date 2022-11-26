//Modulo de Cargos

module.exports = {
  attributes: {
    titulo: {
      type: 'string'
    },
    descripcion: {
      type: 'string'
    },
    listaFuncionario: {
      type: 'string',
      collection: 'funcionarios',
      via: 'cargo'
    }
  }
};
