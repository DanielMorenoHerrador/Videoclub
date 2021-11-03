'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('peliculas', [{
        title : "Venom: Habrá Matanza",
        pedidoId : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Spider-man: No Way Home",
        pedidoId : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Spiral",
        pedidoId : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Uncharted",
        pedidoId : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Loki",
        pedidoId : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "One Piece",
        pedidoId : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Dragon ball: Broly",
        pedidoId : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Los Vengadores: Endgame",
        pedidoId : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Venom",
        pedidoId : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Soy programador: La Pelicula",
        pedidoId : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('peliculas', null, {});
     
  }
};
