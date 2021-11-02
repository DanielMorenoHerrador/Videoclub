'use strict';
const {Model} = require('sequelize');
const category = require('./pedido');
module.exports = (sequelize, DataTypes) => {
  class pelicula extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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