'use strict';
const {Model} = require('sequelize');
const category = require('./pedido');
module.exports = (sequelize, DataTypes) => {
  class pelicula extends Model {
    
    static associate(models) {
      
      this.hasMany(models.pedido, {
        foreignKey: 'peliculaId'
      });
    }
  };
  pelicula.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    genero: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'pelicula',
  });
  return pelicula;
};