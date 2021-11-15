'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('peliculas', [{
        title : "Venom: Habrá Matanza",
        genero: "Accion",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Spider-man: No Way Home",
        genero: "Accion",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Spiral",
        genero: "Terror",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Uncharted",
        genero: "Aventura",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Loki",
        genero: "Ciencia Ficcion",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "One Piece",
        genero: "Anime",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Dragon ball: Broly",
        genero: "Anime",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Los Vengadores: Endgame",
        genero: "Accion",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Venom",
        genero: "Accion",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Soy programador: La Pelicula",
        genero: "Accion",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('peliculas', null, {});
     
  }
};
