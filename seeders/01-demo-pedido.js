'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
      await queryInterface.bulkInsert('pedidos', [{
      userId: 1,
      movieId: 2,
      rentDate: new Date(),
    }, {
      userId: 2,
      movieId: 3,
      rentDate: new Date(),
    }, {
      userId: 3,
      movieId: 9,
      rentDate: new Date(),
    }, {
      userId: 4,
      movieId: 11,
      rentDate: new Date(),
    }, {
      userId: 5,
      movieId: 15,
      rentDate: new Date(),
    }, {
      userId: 6,
      movieId: 16,
      rentDate: new Date(),
    }, {
      userId: 7,
      movieId: 1,
      rentDate: new Date(),
    }, {
      userId: 8,
      movieId: 5,
      rentDate: new Date(),
    }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('pedidos', null, {});
     
  }
};
