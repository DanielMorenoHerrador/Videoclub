'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
      await queryInterface.bulkInsert('pedidos', [{
        id: 1,
        type: 'Disponible',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        type: 'No Disponible',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('pedidos', null, {});
     
  }
};
