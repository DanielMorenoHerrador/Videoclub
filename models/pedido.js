'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pedido extends Model {
    
    static associate(models) {
      
      this.belongsTo(models.pelicula, {
        foreignKey: 'peliculaId'
      });
      this.belongsTo(models.user, {
        foreignKey: 'userId'
      });
    }
  };
  pedido.init({
    userId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    movieId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rentDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    returnDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
  }, {
    sequelize,
    timestamps: false,
    modelName: 'pedido',
  });
  return pedido;
};