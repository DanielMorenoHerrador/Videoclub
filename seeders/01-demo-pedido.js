'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
      await queryInterface.bulkInsert('pedidos', [{
      userId: 1,
      peliculaId: 2,
      rentDate: new Date(),
      returnDate: new Date(),
    }, {
      userId: 2,
      peliculaId: 3,
      rentDate: new Date(),
      returnDate: new Date(),
    }, {
      userId: 3,
      peliculaId: 9,
      rentDate: new Date(),
      returnDate: new Date(),
    }, {
      userId: 4,
      peliculaId: 11,
      rentDate: new Date(),
      returnDate: new Date(),
    }, {
      userId: 5,
      peliculaId: 15,
      rentDate: new Date(),
      returnDate: new Date(),
    }, {
      userId: 6,
      peliculaId: 16,
      rentDate: new Date(),
      returnDate: new Date(),
    }, {
      userId: 7,
      peliculaId: 1,
      rentDate: new Date(),
      returnDate: new Date(),
    }, {
      userId: 8,
      peliculaId: 5,
      rentDate: new Date(),
      returnDate: new Date(),
    }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('pedidos', null, {});
     
  }
};
