/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

 module.exports = {

  attributes: {
    name: 'string',
    apellido: 'string',
    rut: 'string',
    fechaNacimiento: 'string',
    direccion: 'string',
    genero: 'string'
  }
};
sails.config.models.migrate='drop';

