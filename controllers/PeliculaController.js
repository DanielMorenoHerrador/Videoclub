//Importo modelo de datos
const db = require("../models");
const peliculas = db.pelicula;
const Op = db.Sequelize.Op; //Import all ORM sequelize functions 

var pedidoModel  = require('../models').pedido;  //Add for dependency response

const PeliculaController = {}; //Create the object controller



//CRUD end-points Functions
//-------------------------------------------------------------------------------------
//GET all peliculas from database
PeliculaController.getAll = (req, res) => {
    
    peliculas.findAll({include: [{ model:pedidoModel}]})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving peliculas."
        });
      });
  };


//-------------------------------------------------------------------------------------
//GET peliculas by Id from database
PeliculaController.getById = (req, res) => {
    const id = req.params.id;

    peliculas.findByPk(id, {include: [{ model:pedidoModel}]})
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Tutorial with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving peliculas with id=" + id
        });
      });
  };



//-------------------------------------------------------------------------------------
//CREATE a new movie in database
PeliculaController.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a peliculas
    const newPelicula = {
      title: req.body.title,
      categoryId: req.body.categoryId
    };
  
    // Save peliculas in the database
    peliculas.create(newPelicula)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Movie."
        });
      });
  };


//-------------------------------------------------------------------------------------
//UPDATE a movie from database
PeliculaController.update = (req, res) => {
    const id = req.params.id;
  
    peliculas.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Movie was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Movie with id=${id}. Maybe Movie was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Movie with id=" + id
        });
      });
  };


//-------------------------------------------------------------------------------------
//GET movie by Title from database 
//FindByTitle
PeliculaController.getByTitle = (req, res) => {
    peliculas.findAll({ where: { title: req.params.title } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };


//-------------------------------------------------------------------------------------
//DELETE a movie by Id from database
PeliculaController.delete = (req, res) => {
    const id = req.params.id;
  
    peliculas.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Movie was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Movie with id=${id}. Maybe Movie was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Movie with id=" + id
        });
      });
  };


//-------------------------------------------------------------------------------------
//DELETE all peliculas from database
//delete all peliculas 
PeliculaController.deleteAll = (req, res) => {
    peliculas.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} peliculas were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all peliculas."
        });
      });
  };

module.exports = PeliculaController;