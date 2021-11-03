'use strict';
const {Model} = require('sequelize');
const category = require('./pedido');
module.exports = (sequelize, DataTypes) => {
  class pelicula extends Model {
    
    static associate(models) {
      
      pelicula.belongsTo(models.pedido, {
        foreignKey: 'pedidoId'
      });
    }
  };
  pelicula.init({
    title: DataTypes.STRING,
    pedidoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'pelicula',
  });
  return pelicula;
};