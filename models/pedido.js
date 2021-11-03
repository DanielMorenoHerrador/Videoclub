'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pedido extends Model {
    
    static associate(models) {
      
      this.hasMany(models.pelicula,{
        foreignKey:'pedidoId'
      });
    }
  };
  pedido.init({
    type: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'pedido',
  });
  return pedido;
};