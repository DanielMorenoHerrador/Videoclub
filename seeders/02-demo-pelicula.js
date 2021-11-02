'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('peliculas', [{
        title : "Train to Busan",
        pedidoId : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Shaun of the dead",
        pedidoId : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "ZombieLand",
        pedidoId : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Evil Dead",
        pedidoId : 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Evil Dead 2",
        pedidoId : 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Evil Dead 3",
        pedidoId : 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "28 Days Later",
        pedidoId : 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Zombiever",
        pedidoId : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Overlord",
        pedidoId : 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Black Sheep",
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
